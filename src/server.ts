import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type MailEnv = {
  RESEND_API_KEY?: string;
  MAIL_FROM?: string;
};

const QUOTE_RECIPIENT = "DMB-k@wp.pl";
const MAX_QUOTE_SIZE = 25 * 1024 * 1024;
const FORMSUBMIT_SIZE = 10 * 1024 * 1024;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[char] ?? char);
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

async function handleQuoteRequest(request: Request, env: MailEnv): Promise<Response> {
  const form = await request.formData();
  if (String(form.get("website") ?? "")) return json({ success: true });

  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? form.get("desc") ?? "").trim();
  if (!name || !phone || !email || !message) {
    return json({ success: false, message: "Uzupełnij wszystkie wymagane pola." }, 400);
  }

  const attachments = form.getAll("attachment").filter((item): item is File => item instanceof File && item.size > 0);
  const totalSize = attachments.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_QUOTE_SIZE) {
    return json({ success: false, message: "Łączny rozmiar załączników nie może przekroczyć 25 MB." }, 413);
  }

  if (env.RESEND_API_KEY) {
    const encodedAttachments = await Promise.all(attachments.map(async (file) => ({
      filename: file.name,
      content: bytesToBase64(new Uint8Array(await file.arrayBuffer())),
    })));
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.MAIL_FROM || "DMBK <onboarding@resend.dev>",
        to: [QUOTE_RECIPIENT],
        reply_to: email,
        subject: `Nowe zapytanie o wycenę DMBK — ${name}`,
        html: `<h2>Nowe zapytanie o wycenę</h2><p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p><p><strong>Telefon:</strong> ${escapeHtml(phone)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Opis:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
        attachments: encodedAttachments,
      }),
    });
    if (!response.ok) {
      console.error("Resend error", await response.text());
      return json({ success: false, message: "Usługa pocztowa chwilowo nie przyjęła wiadomości." }, 502);
    }
    return json({ success: true });
  }

  if (attachments.some((file) => file.size > FORMSUBMIT_SIZE)) {
    return json({ success: false, message: "Pojedynczy załącznik nie może przekroczyć 10 MB." }, 413);
  }

  const groups: File[][] = [];
  let currentGroup: File[] = [];
  let currentSize = 0;
  for (const file of attachments) {
    if (currentGroup.length && currentSize + file.size > FORMSUBMIT_SIZE) {
      groups.push(currentGroup);
      currentGroup = [];
      currentSize = 0;
    }
    currentGroup.push(file);
    currentSize += file.size;
  }
  if (currentGroup.length || groups.length === 0) groups.push(currentGroup);

  for (const [index, group] of groups.entries()) {
    const part = new FormData();
    part.set("name", name);
    part.set("phone", phone);
    part.set("email", email);
    part.set("message", message);
    part.set("_subject", `Nowe zapytanie o wycenę DMBK — ${name}${groups.length > 1 ? ` — część ${index + 1}/${groups.length}` : ""}`);
    part.set("_replyto", email);
    part.set("_template", "table");
    part.set("_captcha", "false");
    group.forEach((file) => part.append("attachment", file, file.name));

    const fallback = await fetch(`https://formsubmit.co/ajax/${QUOTE_RECIPIENT}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: part,
    });
    const payload = await fallback.json().catch(() => null) as { success?: string | boolean; message?: string } | null;
    if (!fallback.ok || payload?.success === false || payload?.success === "false") {
      return json({ success: false, message: payload?.message || "Usługa pocztowa nie przyjęła wiadomości." }, 502);
    }
  }

  return json({ success: true, parts: groups.length });
}

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (request.method === "POST" && url.pathname === "/api/wycena") {
        return await handleQuoteRequest(request, env as MailEnv);
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};

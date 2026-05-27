import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useRef, useState } from "react";
import { Upload, Send, CheckCircle2, X, FileText, Image as ImageIcon, FileArchive, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/wycena")({
  head: () => ({
    meta: [
      { title: "Wycena online — DMBK" },
      { name: "description", content: "Bezpłatna wycena online. Wyślij opis, zdjęcia lub projekty (JPG, PNG, PDF, ZIP) — przygotujemy realizację i odezwiemy się szybko." },
      { property: "og:title", content: "Wycena online — DMBK" },
      { property: "og:description", content: "Bezpłatna wycena produkcji konstrukcji stalowych." },
    ],
  }),
  component: Quote,
});

const ALLOWED_EXT = ["jpg", "jpeg", "png", "pdf", "zip"];
const ALLOWED_MIME = ["image/jpeg", "image/png", "application/pdf", "application/zip", "application/x-zip-compressed"];
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const RECIPIENT = "DMB-k@wp.pl";

function fileIcon(name: string) {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (["jpg", "jpeg", "png"].includes(ext)) return ImageIcon;
  if (ext === "pdf") return FileText;
  if (ext === "zip") return FileArchive;
  return FileText;
}

function Quote() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const addFiles = (incoming: FileList | File[]) => {
    const list = Array.from(incoming);
    for (const f of list) {
      const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
      const okExt = ALLOWED_EXT.includes(ext);
      const okMime = ALLOWED_MIME.includes(f.type) || okExt;
      if (!okExt || !okMime) {
        setError(`${t("quote_err_file_type")} ${f.name}`);
        return;
      }
      if (f.size > MAX_SIZE) {
        setError(`${t("quote_err_file_size")} ${f.name}`);
        return;
      }
    }
    setError(null);
    setFiles((prev) => [...prev, ...list]);
  };

  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot anti-spam
    if ((fd.get("website") as string)?.length) {
      setError(t("quote_err_spam"));
      return;
    }

    const name = (fd.get("name") as string)?.trim();
    const phone = (fd.get("phone") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const desc = (fd.get("desc") as string)?.trim();

    if (!name || !phone || !email || !desc) {
      setError(t("quote_err_required"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("quote_err_email"));
      return;
    }
    if (!/^[+()\-\s\d]{7,20}$/.test(phone)) {
      setError(t("quote_err_phone"));
      return;
    }

    setSending(true);
    // Frontend-only: backend wysyłki maila z załącznikami wymaga włączenia
    // Lovable Cloud + Resend (instrukcja u góry po pytaniu).
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left intro */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("quote_kicker")}</span>
            <h1 className="mt-4 font-display text-4xl lg:text-5xl uppercase leading-[1.02]">
              {t("quote_title")}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">{t("quote_intro")}</p>

            <div className="mt-8 inline-flex items-start gap-3 border-l-2 border-primary pl-4 max-w-md">
              <Sparkles size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/90">{t("quote_tip")}</p>
            </div>

            <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary font-display">01.</span> {t("quote_step1")}</li>
              <li className="flex gap-3"><span className="text-primary font-display">02.</span> {t("quote_step2")}</li>
              <li className="flex gap-3"><span className="text-primary font-display">03.</span> {t("quote_step3")}</li>
            </ul>
          </div>

          {/* Form / success */}
          {sent ? (
            <div className="border border-primary/50 bg-card p-10 text-center">
              <CheckCircle2 className="mx-auto text-primary" size={48} />
              <h2 className="mt-4 font-display text-2xl uppercase">{t("quote_sent")}</h2>
              <p className="mt-2 text-muted-foreground">{t("quote_sent_desc")}</p>
              <button
                onClick={() => { setSent(false); setFiles([]); formRef.current?.reset(); }}
                className="mt-6 text-sm uppercase tracking-wider text-primary hover:underline"
              >
                {t("quote_send_more")}
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="border border-border bg-card p-6 lg:p-8 space-y-5"
              noValidate
            >
              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off"
                     className="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden />

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t("quote_field_name")}>
                  <input required maxLength={100} type="text" name="name" autoComplete="name" className={inputCls} />
                </Field>
                <Field label={t("quote_field_phone")}>
                  <input required maxLength={30} type="tel" name="phone" autoComplete="tel" className={inputCls} />
                </Field>
              </div>

              <Field label={t("quote_field_email")}>
                <input required maxLength={150} type="email" name="email" autoComplete="email" className={inputCls} />
              </Field>

              <Field label={t("quote_field_desc")}>
                <textarea required maxLength={2000} rows={5} name="desc" className={`${inputCls} resize-none`} />
              </Field>

              {/* Files */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {t("quote_field_files")}
                </span>
                <p className="text-xs text-muted-foreground mb-3">{t("quote_files_hint")}</p>

                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
                  }}
                  onClick={() => inputRef.current?.click()}
                  className={`group cursor-pointer border border-dashed px-5 py-8 text-center transition-all
                    ${dragOver ? "border-primary bg-primary/5" : "border-border bg-background hover:border-primary/70 hover:bg-primary/[0.03]"}`}
                >
                  <Upload size={22} className="mx-auto text-primary transition-transform group-hover:-translate-y-0.5" />
                  <p className="mt-3 text-sm">{t("quote_files_drop")}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t("quote_files_formats")}
                  </p>
                </div>

                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf,.zip,image/jpeg,image/png,application/pdf,application/zip"
                  className="hidden"
                  onChange={(e) => e.target.files && addFiles(e.target.files)}
                />

                {files.length > 0 && (
                  <div className="mt-4">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                      {t("quote_files_selected")} · {files.length}
                    </div>
                    <ul className="space-y-2">
                      {files.map((f, i) => {
                        const Icon = fileIcon(f.name);
                        return (
                          <li key={`${f.name}-${i}`} className="flex items-center gap-3 border border-border bg-background px-3 py-2 text-sm">
                            <Icon size={16} className="text-primary shrink-0" />
                            <span className="truncate flex-1">{f.name}</span>
                            <span className="text-xs text-muted-foreground shrink-0">
                              {(f.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="text-muted-foreground hover:text-destructive transition-colors p-1"
                              aria-label={t("quote_remove")}
                            >
                              <X size={14} />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {error && (
                <div className="border border-destructive/60 bg-destructive/10 text-destructive text-sm px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:translate-y-0"
              >
                {sending ? t("quote_sending") : t("quote_submit")} <Send size={16} />
              </button>
              <p className="text-xs text-muted-foreground">{t("quote_privacy")}</p>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

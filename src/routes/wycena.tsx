import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/wycena")({
  head: () => ({
    meta: [
      { title: "Wycena online — DMBK" },
      { name: "description", content: "Bezpłatna wycena online. Wyślij opis, zdjęcie lub projekt — odpowiemy szybko." },
      { property: "og:title", content: "Wycena online — DMBK" },
      { property: "og:description", content: "Bezpłatna wycena produkcji konstrukcji stalowych." },
    ],
  }),
  component: Quote,
});

function Quote() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [projectName, setProjectName] = useState("");

  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("quote_kicker")}</span>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase">{t("quote_title")}</h1>
            <p className="mt-4 text-muted-foreground max-w-md">{t("quote_intro")}</p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary">01.</span> {t("quote_step1")}</li>
              <li className="flex gap-3"><span className="text-primary">02.</span> {t("quote_step2")}</li>
              <li className="flex gap-3"><span className="text-primary">03.</span> {t("quote_step3")}</li>
            </ul>
          </div>

          {sent ? (
            <div className="border border-primary/50 bg-card p-10 text-center">
              <CheckCircle2 className="mx-auto text-primary" size={48} />
              <h2 className="mt-4 font-display text-2xl uppercase">{t("quote_sent")}</h2>
              <p className="mt-2 text-muted-foreground">{t("quote_sent_desc")}</p>
              <button
                onClick={() => { setSent(false); setPhotoName(""); setProjectName(""); }}
                className="mt-6 text-sm uppercase tracking-wider text-primary hover:underline"
              >
                {t("quote_send_more")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="border border-border bg-card p-6 lg:p-8 space-y-5"
            >
              <Field label={t("quote_field_name")}>
                <input required maxLength={100} type="text" name="name" className={inputCls} />
              </Field>
              <Field label={t("quote_field_phone")}>
                <input required maxLength={30} type="tel" name="phone" className={inputCls} />
              </Field>
              <Field label={t("quote_field_desc")}>
                <textarea required maxLength={2000} rows={5} name="desc" className={`${inputCls} resize-none`} />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <FileField label={t("quote_field_photo")} pickLabel={t("quote_pick_file")} name="photo" accept="image/*" filename={photoName} onChange={setPhotoName} />
                <FileField label={t("quote_field_project")} pickLabel={t("quote_pick_file")} name="project" accept=".pdf,.dwg,.dxf,image/*" filename={projectName} onChange={setProjectName} />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                {t("quote_submit")} <Send size={16} />
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
  "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function FileField({
  label, pickLabel, name, accept, filename, onChange,
}: { label: string; pickLabel: string; name: string; accept: string; filename: string; onChange: (s: string) => void }) {
  return (
    <label className="block cursor-pointer">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <div className="flex items-center gap-3 border border-dashed border-border bg-background px-4 py-3 hover:border-primary transition-colors">
        <Upload size={16} className="text-primary" />
        <span className="text-sm text-muted-foreground truncate">
          {filename || pickLabel}
        </span>
      </div>
      <input
        type="file"
        name={name}
        accept={accept}
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0]?.name ?? "")}
      />
    </label>
  );
}

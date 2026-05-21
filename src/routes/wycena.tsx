import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Upload, Send, CheckCircle2 } from "lucide-react";

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
  const [sent, setSent] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [projectName, setProjectName] = useState("");

  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Wycena online</span>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase">
              Wyślij zapytanie
            </h1>
            <p className="mt-4 text-muted-foreground max-w-md">
              Opisz, czego potrzebujesz. Możesz dołączyć zdjęcie lub plik z projektem. Odpowiemy zwykle
              tego samego dnia roboczego.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary">01.</span> Wypełnij formularz</li>
              <li className="flex gap-3"><span className="text-primary">02.</span> Dołącz zdjęcie lub rysunek</li>
              <li className="flex gap-3"><span className="text-primary">03.</span> Otrzymaj wycenę</li>
            </ul>
          </div>

          {sent ? (
            <div className="border border-primary/50 bg-card p-10 text-center">
              <CheckCircle2 className="mx-auto text-primary" size={48} />
              <h2 className="mt-4 font-display text-2xl uppercase">Wysłane!</h2>
              <p className="mt-2 text-muted-foreground">
                Dzięki za zapytanie. Odezwiemy się najszybciej jak to możliwe.
              </p>
              <button
                onClick={() => { setSent(false); setPhotoName(""); setProjectName(""); }}
                className="mt-6 text-sm uppercase tracking-wider text-primary hover:underline"
              >
                Wyślij kolejne
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="border border-border bg-card p-6 lg:p-8 space-y-5"
            >
              <Field label="Imię i nazwisko *">
                <input required maxLength={100} type="text" name="name" className={inputCls} />
              </Field>
              <Field label="Telefon *">
                <input required maxLength={30} type="tel" name="phone" className={inputCls} />
              </Field>
              <Field label="Opis zapytania *">
                <textarea required maxLength={2000} rows={5} name="desc" className={`${inputCls} resize-none`} />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <FileField label="Zdjęcie" name="photo" accept="image/*" filename={photoName} onChange={setPhotoName} />
                <FileField label="Projekt / rysunek" name="project" accept=".pdf,.dwg,.dxf,image/*" filename={projectName} onChange={setProjectName} />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                Wyślij zapytanie <Send size={16} />
              </button>
              <p className="text-xs text-muted-foreground">
                Dane wykorzystamy wyłącznie do kontaktu w sprawie wyceny.
              </p>
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
  label, name, accept, filename, onChange,
}: { label: string; name: string; accept: string; filename: string; onChange: (s: string) => void }) {
  return (
    <label className="block cursor-pointer">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <div className="flex items-center gap-3 border border-dashed border-border bg-background px-4 py-3 hover:border-primary transition-colors">
        <Upload size={16} className="text-primary" />
        <span className="text-sm text-muted-foreground truncate">
          {filename || "Wybierz plik"}
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

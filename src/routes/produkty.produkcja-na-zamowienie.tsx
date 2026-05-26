import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, FileUp, Lightbulb, Layers, Cog, Check } from "lucide-react";
import { useState } from "react";
import specialImg from "@/assets/product-special.jpg";

export const Route = createFileRoute("/produkty/produkcja-na-zamowienie")({
  head: () => ({
    meta: [
      { title: "Produkcja na zamówienie — DMBK" },
      { name: "description", content: "Indywidualne projekty, prototypy i krótkie serie. Produkcja według rysunku technicznego klienta. Prześlij projekt — wycenimy szybko." },
      { property: "og:image", content: specialImg },
    ],
  }),
  component: ProdukcjaNaZamowienie,
});

const features = [
  { icon: Lightbulb, title: "Pod rysunek techniczny", desc: "Produkcja zgodna z dostarczoną dokumentacją." },
  { icon: Layers, title: "Prototypy", desc: "Realizujemy pojedyncze egzemplarze do testów." },
  { icon: Cog, title: "Krótkie serie", desc: "Małe partie produkcyjne pod konkretne zlecenie." },
  { icon: Check, title: "Elastyczność", desc: "Indywidualne podejście do każdego projektu." },
];

function ProdukcjaNaZamowienie() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Produkcja na zamówienie</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 04 — Custom</span>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl uppercase leading-[0.95]">
              Produkcja na zamówienie
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Realizujemy indywidualne projekty według dokumentacji klienta — od pojedynczych prototypów
              po krótkie serie produkcyjne. Nietypowy osprzęt, konstrukcje pod konkretną maszynę,
              rozwiązania szyte na miarę.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <img src={specialImg} alt="Produkcja na zamówienie DMBK" className="relative w-full object-cover border border-border" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-x py-16 lg:py-20">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Specyfikacja</span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Jak pracujemy</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-6 lg:p-8">
                <f.icon size={26} className="text-primary" strokeWidth={1.5} />
                <div className="mt-4 font-display text-lg uppercase tracking-wider">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement + formularz */}
      <section className="container-x py-16 lg:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Twój projekt</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">
            Masz własny projekt? <span className="text-primary">Wykonamy go</span> od pomysłu do gotowego produktu.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Prześlij rysunek, zdjęcie lub opis. Wycenimy realizację szybko i konkretnie.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Analiza dokumentacji", "Wycena i terminy", "Produkcja", "Odbiór / wysyłka"].map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="text-primary font-display tracking-wider">0{i + 1}</span>
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-card p-6 lg:p-8">
          {sent ? (
            <div className="text-center py-10">
              <Check size={40} className="text-primary mx-auto" />
              <h3 className="mt-4 font-display text-2xl uppercase">Projekt przesłany</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Dzięki! Odezwiemy się najszybciej jak to możliwe.
              </p>
              <button
                onClick={() => { setSent(false); setFileName(null); }}
                className="mt-6 text-xs uppercase tracking-[0.25em] text-primary hover:gap-3"
              >
                Wyślij kolejny
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-primary">/ Formularz</div>
              <h3 className="font-display text-2xl uppercase">Prześlij projekt</h3>

              <div>
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground">Imię i nazwisko *</label>
                <input required type="text" className="mt-1 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground">Telefon *</label>
                  <input required type="tel" className="mt-1 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground">E-mail</label>
                  <input type="email" className="mt-1 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground">Opis projektu *</label>
                <textarea required rows={4} className="mt-1 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Plik / rysunek techniczny (PDF, DWG, JPG, PNG)
                </label>
                <label className="mt-1 flex items-center gap-3 border border-dashed border-border bg-background px-4 py-4 cursor-pointer hover:border-primary transition-colors">
                  <FileUp size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground truncate">
                    {fileName ?? "Wybierz plik lub przeciągnij tutaj"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
                >
                  Prześlij projekt <ArrowRight size={16} />
                </button>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                >
                  Zapytaj o realizację
                </Link>
              </div>

              <p className="pt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                Dane wykorzystamy wyłącznie do kontaktu w sprawie wyceny.
              </p>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

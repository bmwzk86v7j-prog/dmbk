import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Frame, Anchor, LayoutGrid, Cog, Wrench, Flame } from "lucide-react";
import constructionImg from "@/assets/product-construction.jpg";

export const Route = createFileRoute("/produkty/konstrukcje-stalowe")({
  head: () => ({
    meta: [
      { title: "Konstrukcje stalowe — DMBK" },
      { name: "description", content: "Projektowanie i produkcja konstrukcji stalowych — stal S235 i S355, spawanie MIG/MAG, cięcie i gięcie, ramy, wsporniki, podesty." },
      { property: "og:image", content: constructionImg },
    ],
  }),
  component: KonstrukcjeStalowe,
});

const specs: [string, string][] = [
  ["Stal", "S235 / S355"],
  ["Spawanie", "MIG/MAG"],
  ["Obróbka", "Cięcie, gięcie"],
  ["Produkcja", "Według projektu klienta"],
  ["Wykończenie", "Lakier proszkowy / podkład"],
  ["Tolerancje", "Wysoka precyzja wykonania"],
];

const realizations = [
  { icon: Frame, title: "Ramy stalowe" },
  { icon: Anchor, title: "Wsporniki" },
  { icon: LayoutGrid, title: "Podesty" },
  { icon: Cog, title: "Konstrukcje techniczne" },
  { icon: Wrench, title: "Elementy przemysłowe" },
  { icon: Flame, title: "Konstrukcje spawane" },
];

function KonstrukcjeStalowe() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Konstrukcje stalowe</span>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={constructionImg} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
          <div className="absolute inset-0 grain" aria-hidden />
        </div>
        <div className="container-x relative py-24 lg:py-32">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 03 — Konstrukcje stalowe</span>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl uppercase leading-[0.9] max-w-4xl">
            Stal. Spawy. <span className="text-primary">Precyzja.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Projektujemy i wykonujemy trwałe konstrukcje stalowe dla rolnictwa, przemysłu oraz
            indywidualnych zastosowań. Wysoka wytrzymałość i precyzja każdego spawu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/wycena"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
            >
              Wycena projektu <ArrowRight size={16} />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Specyfikacja</span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Parametry techniczne</h2>
            <div className="mt-8 border border-border">
              {specs.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[160px_1fr] gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
                >
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground self-center">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Możliwe realizacje</span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Co wykonujemy</h2>
            <div className="mt-8 grid grid-cols-2 gap-px bg-border border border-border">
              {realizations.map((r) => (
                <div key={r.title} className="group bg-background p-5 hover:bg-primary/10 transition-colors">
                  <r.icon size={22} className="text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  <div className="mt-3 font-display text-base uppercase tracking-wider">{r.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

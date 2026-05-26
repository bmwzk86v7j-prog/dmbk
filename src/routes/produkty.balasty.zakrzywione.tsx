import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";

export const Route = createFileRoute("/produkty/balasty/zakrzywione")({
  head: () => ({
    meta: [
      { title: "Balasty zakrzywione do ciągników — DMBK" },
      { name: "description", content: "Balasty zakrzywione DMBK — profilowana geometria, wagi 300–1800 kg, lakier proszkowy, opcje LED i personalizacja." },
      { property: "og:image", content: ballastImg },
    ],
  }),
  component: BalastyZakrzywione,
});

const gallery = [ballastImg, ballastImg, ballastImg, ballastImg];
const specs: [string, string][] = [
  ["Wagi", "300 – 1800 kg"],
  ["Geometria", "Zakrzywiona, profilowana"],
  ["Mocowanie", "TUZ kat. II / III"],
  ["Lakierowanie", "Proszkowe, RAL na życzenie"],
  ["Opcje", "LED, dociążenie, logo"],
  ["Materiał", "Stal konstrukcyjna"],
];

function BalastyZakrzywione() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/balasty" className="hover:text-primary">Balasty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Zakrzywione</span>
        </div>
      </section>

      <section className="container-x py-16 lg:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl" aria-hidden />
            <img src={ballastImg} alt="Balast zakrzywiony DMBK" className="relative w-full object-cover border border-border" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {gallery.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden border border-border bg-card">
                <img src={g} alt="" className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Wariant B</span>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-tight">
            Balasty zakrzywione
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Profilowany kształt poprawia geometrię pracy i nadaje frontowi ciągnika nowoczesny,
            techniczny charakter. Lepsza ergonomia i estetyka bez kompromisów w masie.
          </p>

          <div className="mt-8 border border-border">
            {specs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[140px_1fr] gap-4 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
              >
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground self-center">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/wycena"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
            >
              Zapytaj o wycenę <ArrowRight size={16} />
            </Link>
            <Link
              to="/produkty/balasty"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Wróć do balastów
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

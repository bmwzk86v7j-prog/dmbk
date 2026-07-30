import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";

const WEIGHTS = [300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800] as const;

export const Route = createFileRoute("/produkty/balasty/")({
  head: () => ({
    meta: [
      { title: "Balasty do ciągników — modele 300–1800 kg | DMBK" },
      {
        name: "description",
        content:
          "Balasty do ciągników DMBK — modele od 300 do 1800 kg, wersje proste i przeginane, opcja ze skrzynką narzędziową.",
      },
      { property: "og:title", content: "Balasty DMBK — modele 300–1800 kg" },
      {
        property: "og:description",
        content: "Wybierz model balastu i skonfiguruj wersję prostą lub przeginaną oraz opcję skrzynki.",
      },
    ],
  }),
  component: BalastyIndexPage,
});

function BalastyIndexPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">
            Produkty
          </Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Balasty do ciągników</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 01 — Balasty</span>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase leading-[0.95]">
              Balasty do ciągników
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Obciążniki poprawiające stabilność i przyczepność ciągnika. Dostępne w zakresie wag od 300 do 1800 kg.
              Warianty proste i przeginane, opcjonalnie ze skrzynką narzędziową.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#modele" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
                Zobacz modele <ArrowRight size={16} />
              </a>
              <Link to="/wycena" className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">
                Zapytaj o wycenę
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <img src={ballastImg} alt="Balast DMBK" className="relative w-full object-cover border border-border" />
          </div>
        </div>
      </section>

      <section id="modele" className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Modele</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Wybierz wagę balastu</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Na stronie produktu skonfigurujesz wersję (prosty / przeginany) oraz opcję skrzynki narzędziowej.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WEIGHTS.map((w) => (
            <Link
              key={w}
              to="/produkty/balasty/$weight"
              params={{ weight: String(w) }}
              className="group relative border border-border bg-card p-6 hover:border-primary/60 transition-colors"
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Balast</div>
              <div className="mt-2 font-display text-3xl lg:text-4xl uppercase tracking-wider group-hover:text-primary transition-colors">
                {w} <span className="text-lg text-muted-foreground">kg</span>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span>Konfigurator</span>
                <ArrowRight size={14} className="text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

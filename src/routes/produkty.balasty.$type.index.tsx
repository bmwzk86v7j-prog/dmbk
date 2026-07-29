import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight } from "lucide-react";

const WEIGHTS = [300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800] as const;
const TYPES = { przednie: "Balasty przednie", tylne: "Balasty tylne" } as const;
type TypeKey = keyof typeof TYPES;

export const Route = createFileRoute("/produkty/balasty/$type/")({
  beforeLoad: ({ params }) => {
    if (!(params.type in TYPES)) throw notFound();
  },
  head: ({ params }) => {
    const label = TYPES[params.type as TypeKey] ?? "Balasty";
    return {
      meta: [
        { title: `${label} — modele 300–1800 kg | DMBK` },
        {
          name: "description",
          content: `${label} DMBK — dostępne modele od 300 do 1800 kg. Konfiguracja: prosty / przeginany, ze skrzynką lub bez.`,
        },
        { property: "og:title", content: `${label} DMBK — modele 300–1800 kg` },
        {
          property: "og:description",
          content: `${label}: wybierz model balastu i skonfiguruj wersję prostą lub przeginaną oraz opcję skrzynki.`,
        },
      ],
    };
  },
  component: BalastyList,
});

function BalastyList() {
  const { type } = Route.useParams();
  const label = TYPES[type as TypeKey];

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/balasty" className="hover:text-primary">Balasty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">{label}</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Modele</span>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-tight">{label}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Wybierz wagę balastu. Na stronie produktu skonfigurujesz wersję (prosty / przeginany) oraz opcję skrzynki narzędziowej.
          </p>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WEIGHTS.map((w) => (
            <Link
              key={w}
              to="/produkty/balasty/$type/$weight"
              params={{ type, weight: String(w) }}
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
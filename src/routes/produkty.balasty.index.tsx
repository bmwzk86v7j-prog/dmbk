import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight } from "lucide-react";
import ballast600 from "@/assets/balast-600-700-01.png";
import ballast800 from "@/assets/balast-800-900-01.png";
import ballast1000 from "@/assets/balast-1000-1600-01.jpg";
import ballast1800 from "@/assets/balast-1800-01.png";

const GROUPS = [
  { slug: "600-700", weight: "600–700 kg", image: ballast600 },
  { slug: "800-900", weight: "800–900 kg", image: ballast800 },
  { slug: "1000-1600", weight: "1000–1600 kg", image: ballast1000 },
  { slug: "1800", weight: "1800 kg", image: ballast1800 },
] as const;

export const Route = createFileRoute("/produkty/balasty/")({
  head: () => ({
    meta: [
      { title: "Balasty do ciągników — grupy wagowe | DMBK" },
      {
        name: "description",
        content: "Balasty do ciągników DMBK w czterech grupach wagowych. Wybierz masę, obudowę i dostępne wyposażenie.",
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
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Balasty do ciągników</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 01 — Balasty</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl lg:text-6xl uppercase leading-[0.95]">Balasty według gabarytu i masy</h1>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            Oferta jest podzielona według obudów i przedziałów wagowych. Po wejściu w kartę wybierzesz konkretną masę i dostępne wyposażenie. Zdjęcie zmienia się wtedy, gdy zmienia się wygląd lub wielkość obudowy.
          </p>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((group) => (
            <Link
              key={group.slug}
              to="/produkty/balasty/$weight"
              params={{ weight: group.slug }}
              className="group overflow-hidden border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img src={group.image} alt={`Balast DMBK ${group.weight}`} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Przedział wagowy</div>
                    <h2 className="mt-2 font-display text-4xl uppercase group-hover:text-primary transition-colors">{group.weight}</h2>
                  </div>
                  <ArrowRight className="mt-1 text-primary transition-transform group-hover:translate-x-1" size={20} />
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs uppercase tracking-widest text-muted-foreground">
                  <span>Zobacz dostępne wersje</span>
                  <ArrowRight size={14} className="text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

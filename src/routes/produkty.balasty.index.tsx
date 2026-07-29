import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Weight } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";

export const Route = createFileRoute("/produkty/balasty/")({
  head: () => ({
    meta: [
      { title: "Balasty do ciągników — przednie i tylne | DMBK" },
      {
        name: "description",
        content:
          "Balasty do ciągników DMBK — wersje przednie i tylne, wagi 300–1800 kg, wersje proste i przeginane, opcja ze skrzynką.",
      },
      { property: "og:title", content: "Balasty DMBK — przednie i tylne, 300–1800 kg" },
      { property: "og:description", content: "Wybierz balasty przednie lub tylne. Wagi 300–1800 kg." },
    ],
  }),
  component: BalastyIndexPage,
});

const subcategories = [
  {
    to: "/produkty/balasty/$type" as const,
    params: { type: "przednie" },
    title: "Balasty przednie",
    desc: "Obciążniki montowane na przednim TUZ. Poprawiają przyczepność i stabilność ciągnika.",
    img: ballastImg,
    index: "A",
  },
  {
    to: "/produkty/balasty/$type" as const,
    params: { type: "tylne" },
    title: "Balasty tylne",
    desc: "Obciążniki tylne — balansują masę maszyny przy pracy z ciężkim osprzętem przednim.",
    img: ballastImg,
    index: "B",
  },
];

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
              Obciążniki poprawiające stabilność i przyczepność ciągnika. Dostępne w wersjach przednich i tylnych, w zakresie wag od 300 do 1800 kg. Warianty proste i przeginane, opcjonalnie ze skrzynką narzędziową.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#warianty" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
                Wybierz montaż <ArrowRight size={16} />
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

      <section id="warianty" className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Podkategorie</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Wybierz miejsce montażu</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {subcategories.map((s) => (
            <Link
              key={s.params.type}
              to={s.to}
              params={s.params}
              className="group relative overflow-hidden border border-border bg-card hover:border-primary/60 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 font-display text-xs tracking-[0.3em] text-primary">
                  WARIANT {s.index}
                </div>
                <div className="absolute top-4 right-4 size-12 grid place-items-center border border-border bg-background/70 backdrop-blur-sm group-hover:border-primary group-hover:text-primary transition-colors">
                  <Weight size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase tracking-wider">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                  Zobacz modele <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import stairsImg1 from "@/assets/schody-stalowe-01.jpg";
import stairsImg2 from "@/assets/schody-stalowe-02.jpg";

export const Route = createFileRoute("/produkty/schody-stalowe")({
  head: () => ({
    meta: [
      { title: "Schody stalowe — DMBK" },
      {
        name: "description",
        content: "Schody stalowe DMBK wykonywane na wymiar: konstrukcje zewnętrzne i techniczne, podesty, stopnie oraz balustrady.",
      },
      { property: "og:image", content: stairsImg1 },
      { property: "og:type", content: "product" },
    ],
  }),
  component: SchodyStalowe,
});

const features = [
  "Wykonanie na wymiar według dokumentacji lub pomiarów na obiekcie.",
  "Schody zewnętrzne, techniczne i ewakuacyjne.",
  "Stalowa konstrukcja schodów i podestu wykonana na wymiar.",
  "Stopnie kratowe zapewniające odpływ wody i pewne użytkowanie.",
  "Solidne połączenia spawane i montażowe.",
  "Zabezpieczenie antykorozyjne dostosowane do miejsca montażu.",
];

const gallery = [
  { src: stairsImg1, alt: "Zewnętrzna konstrukcja schodów stalowych z podestem" },
  { src: stairsImg2, alt: "Realizacja schodów stalowych DMBK" },
];

function SchodyStalowe() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/konstrukcje-stalowe" className="hover:text-primary">Konstrukcje stalowe</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Schody stalowe</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img src={stairsImg1} alt="Zewnętrzne schody stalowe DMBK" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Konstrukcje stalowe</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">Schody stalowe</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Projektujemy i wykonujemy schody stalowe przeznaczone do obiektów przemysłowych,
              usługowych oraz budynków mieszkalnych. Każdą konstrukcję dopasowujemy do miejsca
              montażu, wymaganych wymiarów i sposobu użytkowania.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-primary/40 text-primary">
                    <Check size={12} strokeWidth={2} />
                  </span>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/wycena" className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
              Zapytaj o realizację <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Realizacje</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Schody wykonane na wymiar</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {gallery.map((image, index) => (
            <figure key={image.src} className="overflow-hidden border border-border bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <figcaption className="border-t border-border px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl uppercase">Potrzebujesz schodów dopasowanych do obiektu?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">Prześlij podstawowe wymiary lub dokumentację — przygotujemy zakres wykonania i wycenę.</p>
          </div>
          <Link to="/wycena" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
            Wycena projektu <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

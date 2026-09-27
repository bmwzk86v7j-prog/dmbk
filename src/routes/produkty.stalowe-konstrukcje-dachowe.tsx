import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import roofImg1 from "@/assets/konstrukcja-dachowa-01.jpg";
import roofImg2 from "@/assets/konstrukcja-dachowa-02.jpg";
import roofImg3 from "@/assets/konstrukcja-dachowa-03.jpg";

export const Route = createFileRoute("/produkty/stalowe-konstrukcje-dachowe")({
  head: () => ({
    meta: [
      { title: "Stalowe konstrukcje dachowe — DMBK" },
      {
        name: "description",
        content:
          "Produkcja stalowych konstrukcji dachowych DMBK: dźwigary, belki, stężenia i elementy montażowe wykonywane według dokumentacji technicznej.",
      },
      { property: "og:title", content: "Stalowe konstrukcje dachowe — DMBK" },
      {
        property: "og:description",
        content: "Prefabrikacja i montaż stalowych układów nośnych dachów według dokumentacji technicznej.",
      },
      { property: "og:image", content: roofImg1 },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StaloweKonstrukcjeDachowe,
});

const features = [
  "Wykonanie według dokumentacji technicznej i wymiarów obiektu.",
  "Dźwigary, belki, rygle i elementy stężeń dachowych.",
  "Prefabrykowane elementy przygotowane do sprawnego montażu.",
  "Solidne połączenia spawane i montażowe.",
  "Zabezpieczenie powierzchni odpowiednio do ustaleń projektu.",
  "Realizacja pojedynczych konstrukcji oraz większych układów dachowych.",
];

const gallery = [
  { src: roofImg1, alt: "Montaż stalowej konstrukcji dachowej DMBK na obiekcie" },
  { src: roofImg2, alt: "Prefabrykowane dźwigary stalowej konstrukcji dachowej" },
  { src: roofImg3, alt: "Układ nośny dachu przygotowany do montażu" },
];

function StaloweKonstrukcjeDachowe() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/konstrukcje-stalowe" className="hover:text-primary">Konstrukcje stalowe</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Stalowe konstrukcje dachowe</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img
                src={roofImg1}
                alt="Montaż stalowej konstrukcji dachowej DMBK"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Konstrukcje stalowe</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">
              Stalowe konstrukcje dachowe
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Wykonujemy stalowe układy nośne dachów dla obiektów przemysłowych, gospodarczych i
              usługowych. Elementy przygotowujemy zgodnie z dokumentacją techniczną, z naciskiem na
              dokładność wykonania, sztywność konstrukcji oraz sprawny montaż na obiekcie.
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

            <Link
              to="/wycena"
              className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
            >
              Zapytaj o realizację <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Realizacja</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Konstrukcja dachowa w trakcie montażu</h2>

        <div className="mt-10 grid gap-5 lg:gap-6">
          {gallery.map((image, index) => (
            <figure key={image.src} className="overflow-hidden border border-border bg-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="border-t border-border px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl uppercase">Potrzebujesz konstrukcji pod konkretny obiekt?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Prześlij dokumentację lub podstawowe wymiary — przygotujemy zakres wykonania i wycenę.
            </p>
          </div>
          <Link
            to="/wycena"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            Wycena projektu <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

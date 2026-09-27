import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import spychImg1 from "@/assets/spych-do-kiszonki-01.png";
import spychImg2 from "@/assets/spych-do-kiszonki-02.png";
import spychImg3 from "@/assets/spych-do-kiszonki-03.png";

export const Route = createFileRoute("/produkty/osprzet/spych-do-kiszonki")({
  head: () => ({
    meta: [
      { title: "Spych do kiszonki — DMBK" },
      {
        name: "description",
        content:
          "Spych DMBK do sprawnego rozprowadzania i równomiernego układania zielonki na pryzmach oraz w silosach. Solidna konstrukcja stalowa i wzmocniona krawędź robocza.",
      },
      { property: "og:title", content: "Spych do kiszonki — DMBK" },
      {
        property: "og:description",
        content: "Szeroka powierzchnia robocza, wzmocniona krawędź i solidna konstrukcja stalowa DMBK.",
      },
      { property: "og:image", content: spychImg3 },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpychDoKiszonki,
});

const gallery = [
  { src: spychImg1, alt: "Spych do kiszonki DMBK — widok konstrukcji i mocowania" },
  { src: spychImg2, alt: "Spychy do kiszonki DMBK — widok od strony roboczej" },
  { src: spychImg3, alt: "Spych DMBK podczas rozprowadzania zielonki na pryzmie" },
];

const features = [
  "Do rozprowadzania i wyrównywania kukurydzy, traw oraz innych zielonek.",
  "Szeroka powierzchnia robocza usprawniająca pracę na pryzmie.",
  "Solidna, spawana konstrukcja stalowa.",
  "Wzmocniona dolna krawędź robocza.",
  "Wysokie boki ograniczające przesypywanie się materiału.",
  "Osłona górna poprawiająca bezpieczeństwo i widoczność podczas pracy.",
  "Możliwość dopasowania mocowania do maszyny klienta.",
];

function SpychDoKiszonki() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/osprzet" className="hover:text-primary">Osprzęt rolniczy i przemysłowy</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Spych do kiszonki</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img
                src={spychImg3}
                alt="Spych DMBK podczas rozprowadzania zielonki na pryzmie"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 02 — Osprzęt</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">
              Spych do kiszonki
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Spych DMBK przeznaczony do sprawnego rozprowadzania i równomiernego układania zielonki
              na pryzmach oraz w silosach. Szeroka, solidna konstrukcja ułatwia pracę z dużą ilością
              materiału, a wzmocniona dolna krawędź zapewnia trwałość podczas intensywnego użytkowania.
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

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/wycena"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                Zapytaj o produkt <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Galeria</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Zdjęcia produktu</h2>

        <div className="mt-10 grid gap-5 lg:gap-6">
          {gallery.map((image, index) => (
            <figure key={image.src} className="border border-border bg-card overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground border-t border-border">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl uppercase">Masz pytania o ten produkt?</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Napisz lub zadzwoń — doradzimy i przygotujemy wycenę pod Twoją maszynę.
            </p>
          </div>
          <Link
            to="/wycena"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            Zapytaj o produkt <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

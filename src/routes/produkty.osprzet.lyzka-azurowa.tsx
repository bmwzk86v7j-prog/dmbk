import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import bucketImg1 from "@/assets/lyzka-azurowa-01.jpg";
import bucketImg2 from "@/assets/lyzka-azurowa-02.jpg";
import bucketImg3 from "@/assets/lyzka-azurowa-03.jpg";
import bucketImg4 from "@/assets/lyzka-azurowa-04.jpg";
import bucketImg5 from "@/assets/lyzka-azurowa-05.jpg";

export const Route = createFileRoute("/produkty/osprzet/lyzka-azurowa")({
  head: () => ({
    meta: [
      { title: "Łyżka ażurowa / przesiewowa — DMBK" },
      {
        name: "description",
        content: "Łyżka ażurowa DMBK do zbierania kamieni i przesiewania ziemi. Wzmocniona konstrukcja stalowa z profilowanymi prętami i zębami roboczymi.",
      },
      { property: "og:title", content: "Łyżka ażurowa / przesiewowa — DMBK" },
      { property: "og:image", content: bucketImg1 },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LyzkaAzurowa,
});

const features = [
  "Do zbierania i oddzielania kamieni od ziemi.",
  "Ażurowa konstrukcja umożliwiająca przesiewanie materiału.",
  "Wytrzymałe, profilowane pręty robocze.",
  "Wzmocniona przednia krawędź z zębami.",
  "Solidne ściany boczne usztywniające konstrukcję.",
  "Spawana konstrukcja stalowa przeznaczona do intensywnej pracy.",
  "Możliwość dopasowania szerokości i mocowania do maszyny klienta.",
  "Powłoka lakiernicza zabezpieczająca stal przed korozją.",
];

const gallery = [
  { src: bucketImg1, alt: "Łyżka ażurowa DMBK — widok z przodu" },
  { src: bucketImg2, alt: "Łyżka przesiewowa DMBK — konstrukcja robocza" },
  { src: bucketImg3, alt: "Profilowane pręty i wzmocnione boki łyżki" },
  { src: bucketImg4, alt: "Łyżka ażurowa DMBK — widok konstrukcji mocowania" },
  { src: bucketImg5, alt: "Wzmocniona przednia krawędź z zębami roboczymi" },
];

function LyzkaAzurowa() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/osprzet" className="hover:text-primary">Osprzęt rolniczy i przemysłowy</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Łyżka ażurowa / przesiewowa</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img src={bucketImg1} alt="Łyżka ażurowa DMBK" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 02 — Osprzęt</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">Łyżka ażurowa / przesiewowa</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Wytrzymała łyżka przeznaczona do zbierania kamieni oraz przesiewania ziemi, piasku i
              luźnych materiałów. Ażurowa konstrukcja pozwala oddzielić drobny materiał od większych
              elementów, usprawniając oczyszczanie pól, placów i terenów budowlanych.
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
              Zapytaj o produkt <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Galeria</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Zdjęcia produktu</h2>
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
            <h3 className="font-display text-2xl lg:text-3xl uppercase">Potrzebujesz łyżki dopasowanej do swojej maszyny?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">Napisz lub zadzwoń — ustalimy szerokość, mocowanie i przygotujemy wycenę.</p>
          </div>
          <Link to="/wycena" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
            Zapytaj o produkt <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

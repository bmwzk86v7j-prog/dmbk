import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import walImg1 from "@/assets/wal-pryzmowy-01.png.asset.json";
import walImg2 from "@/assets/wal-pryzmowy-02.png.asset.json";
import walImg3 from "@/assets/wal-pryzmowy-03.png.asset.json";

export const Route = createFileRoute("/produkty/osprzet/wal-pryzmowy")({
  head: () => ({
    meta: [
      { title: "Wał pryzmowy do ugniatania kiszonki — DMBK" },
      {
        name: "description",
        content:
          "Wał pryzmowy DMBK do dogniatania kiszonki w pryzmach i silosach. Profilowane pierścienie robocze, solidna konstrukcja stalowa, mocowanie do ciągnika.",
      },
      { property: "og:title", content: "Wał pryzmowy do ugniatania kiszonki — DMBK" },
      {
        property: "og:description",
        content: "Profilowane pierścienie dogniatające, spawana konstrukcja stalowa, produkcja DMBK.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WalPryzmowy,
});

const gallery = [
  { src: walImg1.url, alt: "Wał pryzmowy DMBK — widok z przodu" },
  { src: walImg2.url, alt: "Wał pryzmowy DMBK — widok całego urządzenia" },
  { src: walImg3.url, alt: "Wał pryzmowy DMBK — widok z boku" },
];

const features = [
  "Do ugniatania pryzm z kukurydzy, traw i innych zielonek.",
  "Profilowane pierścienie dogniatające.",
  "Solidna, spawana konstrukcja stalowa.",
  "Mocowanie do ciągnika.",
  "Dodatkowe koło widoczne na zdjęciach.",
];

function WalPryzmowy() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/osprzet" className="hover:text-primary">Osprzęt rolniczy i przemysłowy</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Wał pryzmowy</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="relative w-full object-cover border border-border"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 02 — Osprzęt</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">
              Wał pryzmowy do ugniatania kiszonki
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Wał pryzmowy DMBK przeznaczony do dogniatania kiszonki w pryzmach i silosach. Profilowane
              pierścienie robocze pomagają zagęścić materiał podczas przejazdu ciągnikiem.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-primary/40 text-primary">
                    <Check size={12} strokeWidth={2} />
                  </span>
                  <span className="text-foreground/90">{f}</span>
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
          {gallery.map((g, i) => (
            <figure key={g.src} className="border border-border bg-card overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground border-t border-border">
                {g.alt}
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

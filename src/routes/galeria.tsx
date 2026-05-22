import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hallImg from "@/assets/gallery-hall.jpg";
import weldImg from "@/assets/gallery-weld.jpg";
import welderImg from "@/assets/gallery-welder.jpg";
import ballastImg from "@/assets/product-ballast.jpg";
import bucketImg from "@/assets/product-bucket.jpg";
import constructionImg from "@/assets/product-construction.jpg";
import specialImg from "@/assets/product-special.jpg";
import heroImg from "@/assets/hero-ballast.png";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — DMBK" },
      { name: "description", content: "Galeria realizacji DMBK: produkty, spawy, hala, proces produkcji." },
      { property: "og:title", content: "Galeria DMBK" },
      { property: "og:description", content: "Zobacz nasze realizacje i proces produkcji." },
      { property: "og:image", content: welderImg },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const { t } = useI18n();
  const items = [
    { src: welderImg, alt: "Spawacz", span: "lg:col-span-2 lg:row-span-2" },
    { src: weldImg, alt: "Spaw MIG/MAG" },
    { src: heroImg, alt: "Balast DMBK" },
    { src: hallImg, alt: "Hala produkcyjna", span: "lg:col-span-2" },
    { src: bucketImg, alt: "Łyżka koparkowa" },
    { src: ballastImg, alt: "Balasty" },
    { src: constructionImg, alt: "Konstrukcja stalowa" },
    { src: specialImg, alt: "Projekt specjalny" },
  ];

  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("gal_kicker")}</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase max-w-3xl">
          {t("gal_title")}
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t("gal_intro")}</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px] lg:auto-rows-[260px]">
          {items.map((it) => (
            <figure
              key={it.alt}
              className={`relative overflow-hidden border border-border bg-card group ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-3 text-xs uppercase tracking-widest bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                {it.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";
import bucketImg from "@/assets/product-bucket.jpg";
import constructionImg from "@/assets/product-construction.jpg";
import specialImg from "@/assets/product-special.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/produkty")({
  head: () => ({
    meta: [
      { title: "Produkty — DMBK" },
      { name: "description", content: "Katalog produktów DMBK: balasty do traktorów, łyżki do koparek, konstrukcje stalowe, projekty specjalne." },
      { property: "og:title", content: "Produkty DMBK" },
      { property: "og:description", content: "Balasty, łyżki, konstrukcje stalowe, projekty specjalne." },
      { property: "og:image", content: ballastImg },
    ],
  }),
  component: Products,
});

function Products() {
  const { t } = useI18n();

  const products = [
    {
      title: t("cat_ballast"),
      img: ballastImg,
      desc: t("prod_ballast_desc"),
      params: ["200–1500 kg", "TUZ", "Lakier proszkowy"],
    },
    {
      title: t("cat_bucket"),
      img: bucketImg,
      desc: t("prod_bucket_desc"),
      params: ["30–200 cm", "Esco / standard", "Hardox"],
    },
    {
      title: t("cat_construction"),
      img: constructionImg,
      desc: t("prod_construction_desc"),
      params: ["S235 / S355", "MIG/MAG", "Cięcie, gięcie, spawanie"],
    },
    {
      title: t("cat_special"),
      img: specialImg,
      desc: t("prod_special_desc"),
      params: ["Pod rysunek", "Prototypy", "Krótkie serie"],
    },
  ];

  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("prod_kicker")}</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase max-w-3xl">{t("prod_title")}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t("prod_intro")}</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <article key={p.title} className="group border border-border bg-card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-display text-2xl uppercase tracking-wider">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.params.map((pp) => (
                    <li key={pp} className="flex gap-2">
                      <span className="text-primary">—</span> {pp}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    to="/wycena"
                    className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
                  >
                    {t("prod_ask")} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

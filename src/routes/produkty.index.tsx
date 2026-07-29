import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Weight, Tractor, Factory, Wrench } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";
import bucketImg from "@/assets/product-bucket.jpg";
import constructionImg from "@/assets/product-construction.jpg";
import specialImg from "@/assets/product-special.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/produkty/")({
  head: () => ({
    meta: [
      { title: "Produkty — Balasty, osprzęt, konstrukcje stalowe | DMBK" },
      {
        name: "description",
        content:
          "Katalog DMBK: balasty i obciążniki do ciągników, osprzęt rolniczy i przemysłowy, konstrukcje stalowe, produkcja na zamówienie. Stal S235/S355, spawanie MIG/MAG.",
      },
      { property: "og:title", content: "Produkty DMBK — stal, precyzja, indywidualne realizacje" },
      { property: "og:description", content: "Balasty, osprzęt, konstrukcje stalowe i produkcja na zamówienie." },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const { t } = useI18n();

  const categories = [
    {
      to: "/produkty/balasty" as const,
      title: t("cat_ballast"),
      subtitle: t("cat_ballast_subtitle"),
      desc: t("cat_ballast_desc"),
      img: ballastImg,
      icon: Weight,
      tags: ["300–1800 kg", "Proste / zakrzywione", "LED", "Logo"],
      index: "01",
    },
    {
      to: "/produkty/osprzet" as const,
      title: t("cat_bucket"),
      subtitle: t("cat_bucket_subtitle"),
      desc: t("cat_bucket_desc"),
      img: bucketImg,
      icon: Tractor,
      tags: [t("eq_silage"), t("eq_stone"), t("eq_wood"), t("eq_bucket")],
      index: "02",
    },
    {
      to: "/produkty/konstrukcje-stalowe" as const,
      title: t("cat_construction"),
      subtitle: t("cat_construction_subtitle"),
      desc: t("cat_construction_desc"),
      img: constructionImg,
      icon: Factory,
      tags: ["S235 / S355", "MIG/MAG", "—", "—"],
      index: "03",
    },
    {
      to: "/produkty/produkcja-na-zamowienie" as const,
      title: t("cat_special"),
      subtitle: t("cat_special_subtitle"),
      desc: t("cat_special_desc"),
      img: specialImg,
      icon: Wrench,
      tags: [t("cust_f1"), t("cust_f2"), t("cust_f3"), t("cust_f4")],
      index: "04",
    },
  ];

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-20 lg:py-28 relative">
          <div className="absolute inset-0 grain pointer-events-none" aria-hidden />
          <div className="relative max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("prod_kicker")}</span>
            <h1 className="mt-4 font-display text-5xl lg:text-7xl uppercase leading-[0.95]">
              {t("prod_title_pre")} <span className="text-primary">{t("prod_title_brand")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("prod_intro")}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden border border-border bg-card hover:border-primary/60 transition-colors duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="font-display text-xs tracking-[0.3em] text-primary">{c.index}</span>
                  <span className="h-px w-10 bg-primary/60" />
                </div>
                <div className="absolute top-4 right-4 size-12 grid place-items-center border border-border bg-background/70 backdrop-blur-sm group-hover:border-primary group-hover:text-primary transition-colors">
                  <c.icon size={20} strokeWidth={1.5} />
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{c.subtitle}</div>
                <h2 className="mt-2 font-display text-2xl lg:text-3xl uppercase tracking-wider">{c.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((tag, i) => (
                    <li
                      key={`${tag}-${i}`}
                      className="text-[11px] uppercase tracking-widest border border-border px-2.5 py-1 text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground transition-colors"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                    {t("prod_see_category")}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t("prod_gallery_specs")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl uppercase">{t("prod_nothing_title")}</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">{t("prod_nothing_desc")}</p>
          </div>
          <Link
            to="/wycena"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            {t("prod_send_inquiry")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Cog, Factory, ShieldCheck, Truck, Ship, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-ballast.png";
import ballastImg from "@/assets/product-ballast.jpg";
import bucketImg from "@/assets/product-bucket.jpg";
import constructionImg from "@/assets/product-construction.jpg";
import specialImg from "@/assets/product-special.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DMBK — Konstrukcje stalowe i produkcja osprzętu" },
      { name: "description", content: "DMBK — balasty, łyżki, konstrukcje stalowe. Produkcja własna, spawanie MIG/MAG, indywidualne projekty." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  const categories = [
    { title: t("cat_ballast"), img: ballastImg, to: "/produkty/balasty" as const },
    { title: t("cat_bucket"), img: bucketImg, to: "/produkty/osprzet" as const },
    { title: t("cat_construction"), img: constructionImg, to: "/produkty/konstrukcje-stalowe" as const },
    { title: t("cat_special"), img: specialImg, to: "/produkty/produkcja-na-zamowienie" as const },
  ];

  const features = [
    { icon: Hammer, title: t("feat_migmag"), desc: t("feat_migmag_desc") },
    { icon: Factory, title: t("feat_own"), desc: t("feat_own_desc") },
    { icon: Cog, title: t("feat_custom"), desc: t("feat_custom_desc") },
    { icon: ShieldCheck, title: t("feat_durable"), desc: t("feat_durable_desc") },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grain" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 lg:py-28">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" /> {t("home_kicker")}
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-balance">
              DMBK
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-medium text-muted-foreground tracking-normal normal-case">
                {t("home_subtitle")}
              </span>
            </h1>
            <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
              {t("home_categories")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produkty"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("home_cta_products")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/wycena"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                {t("home_cta_quote")}
              </Link>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl" aria-hidden />
            <img
              src={heroImg}
              alt="Balast traktorowy DMBK"
              className="relative w-full h-auto object-contain"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest">
              {t("home_made_pl")}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="p-6 lg:p-8 border-r last:border-r-0 border-border">
              <f.icon size={22} className="text-primary" />
              <div className="mt-3 font-display text-lg uppercase tracking-wider">{f.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("home_section_kicker")}</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl uppercase">{t("home_section_title")}</h2>
          </div>
          <Link to="/produkty" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary inline-flex items-center gap-2">
            {t("home_catalog_link")} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative overflow-hidden border border-border bg-card aspect-[4/5]"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-display text-lg uppercase tracking-wider">{c.title}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-primary opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  {t("home_see")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-20 lg:py-24">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("shipping_kicker")}</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl uppercase max-w-3xl">{t("shipping_title")}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("shipping_desc")}</p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { icon: Truck, title: t("shipping_europe"), desc: t("shipping_europe_desc") },
              { icon: Ship, title: t("shipping_logistics"), desc: t("shipping_logistics_desc") },
              { icon: Clock, title: t("shipping_time"), desc: t("shipping_time_desc") },
              { icon: ShieldCheck, title: t("shipping_safe"), desc: t("shipping_safe_desc") },
            ].map((f) => (
              <div key={f.title} className="bg-background p-8 lg:p-10">
                <f.icon size={28} className="text-primary" strokeWidth={1.5} />
                <div className="mt-5 font-display text-xl uppercase tracking-wider">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("shipping_cta")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl lg:text-4xl uppercase">{t("home_cta_title")}</h3>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              {t("home_cta_desc")}
            </p>
          </div>
          <Link
            to="/wycena"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            {t("home_cta_send")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

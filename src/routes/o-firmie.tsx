import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hallImg from "@/assets/gallery-hall.jpg";
import { Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/o-firmie")({
  head: () => ({
    meta: [
      { title: "O firmie — DMBK" },
      { name: "description", content: "DMBK — nowoczesna firma specjalizująca się w produkcji konstrukcji stalowych oraz osprzętu użytkowego." },
      { property: "og:title", content: "O firmie — DMBK" },
      { property: "og:description", content: "Jakość wykonania, precyzja spawów i trwałość produktów." },
      { property: "og:image", content: hallImg },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const bullets = [t("about_b1"), t("about_b2"), t("about_b3"), t("about_b4"), t("about_b5")];

  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-28">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("about_kicker")}</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase max-w-3xl text-balance">
          {t("about_title")}
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold">DMBK</span> {t("about_p1_pre")}
            </p>
            <p>{t("about_p2")}</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground text-base">
                  <span className="flex h-6 w-6 items-center justify-center bg-primary text-primary-foreground">
                    <Check size={14} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link
                to="/wycena"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                {t("about_cta")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={hallImg}
              alt="Hala produkcyjna DMBK"
              loading="lazy"
              className="w-full h-auto object-cover border border-border"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-16 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { v: "10+", l: t("about_stat1") },
            { v: "500+", l: t("about_stat2") },
            { v: "100%", l: t("about_stat3") },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-primary">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

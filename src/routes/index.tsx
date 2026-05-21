import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Cog, Factory, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-ballast.jpg";
import ballastImg from "@/assets/product-ballast.jpg";
import bucketImg from "@/assets/product-bucket.jpg";
import constructionImg from "@/assets/product-construction.jpg";
import specialImg from "@/assets/product-special.jpg";

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

const categories = [
  { title: "Balasty do traktorów", img: ballastImg, to: "/produkty" as const },
  { title: "Łyżki do koparek", img: bucketImg, to: "/produkty" as const },
  { title: "Konstrukcje stalowe", img: constructionImg, to: "/produkty" as const },
  { title: "Projekty specjalne", img: specialImg, to: "/produkty" as const },
];

const features = [
  { icon: Hammer, title: "MIG/MAG", desc: "Precyzyjne spawanie, czyste spoiny, trwałe konstrukcje." },
  { icon: Factory, title: "Produkcja własna", desc: "Pełna kontrola jakości na każdym etapie." },
  { icon: Cog, title: "Indywidualne projekty", desc: "Realizujemy nietypowe zlecenia pod wymiar." },
  { icon: ShieldCheck, title: "Trwałość", desc: "Materiały i wykonanie odpowiadające ciężkiej pracy." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grain" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 lg:py-28">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" /> Steel works since day one
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-balance">
              DMBK
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-medium text-muted-foreground tracking-normal normal-case">
                Konstrukcje stalowe i profesjonalna produkcja osprzętu
              </span>
            </h1>
            <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
              Balasty • Łyżki • Konstrukcje stalowe • Produkcja własna
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produkty"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Zobacz produkty
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/wycena"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Wycena online
              </Link>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl" aria-hidden />
            <img
              src={heroImg}
              alt="Balast traktorowy DMBK"
              width={1920}
              height={1280}
              className="relative w-full h-auto object-cover border border-border"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest">
              Made in PL
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
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

      {/* CATEGORIES */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 01 — Co produkujemy</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl uppercase">Nasze produkty</h2>
          </div>
          <Link to="/produkty" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary inline-flex items-center gap-2">
            Cały katalog <ArrowRight size={14} />
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
                  Zobacz →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl lg:text-4xl uppercase">Masz projekt? Zrobimy to ze stali.</h3>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Prześlij rysunek, zdjęcie lub opis. Wycenimy realizację szybko i konkretnie.
            </p>
          </div>
          <Link
            to="/wycena"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            Wyślij zapytanie <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

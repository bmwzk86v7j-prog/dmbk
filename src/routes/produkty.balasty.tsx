import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Check, Lightbulb, Palette, Weight, ChevronRight } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";

export const Route = createFileRoute("/produkty/balasty")({
  head: () => ({
    meta: [
      { title: "Balasty i obciążniki do ciągników — DMBK" },
      { name: "description", content: "Balasty przednie do ciągników 300–1800 kg. Wersje proste i zakrzywione, lakier proszkowy, opcja LED, personalizacja logo i napisów." },
      { property: "og:title", content: "Balasty DMBK — proste i zakrzywione, 300–1800 kg" },
      { property: "og:description", content: "Ciężkie obciążniki przednie, lakier proszkowy, LED, personalizacja." },
      { property: "og:image", content: ballastImg },
    ],
  }),
  component: BalastyPage,
});

const weights = ["300", "400", "500", "600", "700", "800", "1000", "1200", "1400", "1600", "1700", "1800"];

const features = [
  { icon: Weight, title: "Solidna konstrukcja", desc: "Stalowy korpus odporny na ciężką eksploatację." },
  { icon: Palette, title: "Lakier proszkowy", desc: "Trwała powłoka ochronna, dowolny kolor RAL." },
  { icon: Lightbulb, title: "Oświetlenie LED", desc: "Opcjonalne kierunkowskazy i światła robocze." },
  { icon: Check, title: "System dociążenia", desc: "Dodatkowe obciążniki zwiększające masę balastu." },
];

const subcategories = [
  {
    to: "/produkty/balasty/proste" as const,
    title: "Balasty proste",
    desc: "Klasyczna geometria — maksymalna masa, prosty montaż, sprawdzona konstrukcja.",
    img: ballastImg,
    index: "A",
  },
  {
    to: "/produkty/balasty/zakrzywione" as const,
    title: "Balasty zakrzywione",
    desc: "Profilowany kształt — lepsza geometria pracy i estetyka frontu ciągnika.",
    img: ballastImg,
    index: "B",
  },
];

function BalastyPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Balasty i obciążniki</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 01 — Balasty</span>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase leading-[0.95]">
              Balasty i obciążniki do ciągników
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ciężkie obciążniki przednie poprawiające stabilność, przyczepność i komfort pracy ciągników
              oraz maszyn rolniczych. Dostępne w wersjach prostych i zakrzywionych, w zakresie wag od
              300 do 1800 kg.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#modele"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                Zobacz modele <ArrowRight size={16} />
              </a>
              <Link
                to="/wycena"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Zapytaj o wycenę
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <img src={ballastImg} alt="Balast DMBK" className="relative w-full object-cover border border-border" />
          </div>
        </div>
      </section>

      {/* Specyfikacja */}
      <section className="border-b border-border bg-card">
        <div className="container-x py-16 lg:py-20">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Specyfikacja techniczna</span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Parametry</h2>

          <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Dostępne wagi (kg)
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-border border border-border">
                {weights.map((w) => (
                  <div
                    key={w}
                    className="bg-background p-4 text-center font-display text-xl tracking-wider hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {w}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                Inne wagi — na zamówienie
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {features.map((f) => (
                <div key={f.title} className="bg-background p-6">
                  <f.icon size={22} className="text-primary" strokeWidth={1.5} />
                  <div className="mt-3 font-display text-base uppercase tracking-wider">{f.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personalizacja */}
      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />
        <div className="container-x relative py-16 lg:py-20 grid lg:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="size-20 grid place-items-center border border-primary text-primary">
            <Palette size={32} strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Personalizacja</span>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl uppercase">
              Twój napis. Twoje logo. Twój balast.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              Indywidualne oznaczenia, napisy i logo klienta — wycinane laserowo lub aplikowane na lakierze.
              Idealne rozwiązanie dla gospodarstw, firm rolniczych i flot maszyn.
            </p>
            <Link
              to="/wycena"
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary hover:gap-3 transition-all"
            >
              Zamów personalizację <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Podkategorie */}
      <section id="modele" className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Modele</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Wybierz wariant</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {subcategories.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative overflow-hidden border border-border bg-card hover:border-primary/60 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 font-display text-xs tracking-[0.3em] text-primary">
                  WARIANT {s.index}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase tracking-wider">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                  Otwórz <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

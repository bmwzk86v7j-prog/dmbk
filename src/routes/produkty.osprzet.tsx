import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Wheat, Mountain, TreePine, Container } from "lucide-react";
import bucketImg from "@/assets/product-bucket.jpg";

export const Route = createFileRoute("/produkty/osprzet")({
  head: () => ({
    meta: [
      { title: "Osprzęt rolniczy i przemysłowy — DMBK" },
      { name: "description", content: "Spychy do kiszonki i kamieni, osprzęt do drewna, duże łyżki przemysłowe i rolnicze. Produkcja DMBK pod konkretną maszynę." },
      { property: "og:image", content: bucketImg },
    ],
  }),
  component: Osprzet,
});

const products = [
  {
    icon: Wheat,
    title: "Spychy do kiszonki",
    desc: "Wytrzymałe spychy do silosów i pryzm. Wzmocnione krawędzie, odporność na intensywną pracę.",
    specs: ["Szerokości robocze pod zamówienie", "Wzmocnione lemiesze", "Mocowania pod ładowacz"],
  },
  {
    icon: Mountain,
    title: "Spychy do kamieni",
    desc: "Konstrukcje do pracy w trudnym terenie. Geometria zoptymalizowana pod kruszywo i kamień.",
    specs: ["Stal o podwyższonej twardości", "Wzmocnione spawy", "Indywidualne wymiary"],
  },
  {
    icon: TreePine,
    title: "Osprzęt do drewna",
    desc: "Chwytaki, widły i osprzęt leśny — produkcja pod konkretną maszynę i specyfikę pracy.",
    specs: ["Pod ładowacze czołowe", "Wzmocniona rama", "Odporność na uderzenia"],
  },
  {
    icon: Container,
    title: "Łyżki przemysłowe i rolnicze",
    desc: "Duże łyżki do maszyn rolniczych i przemysłowych — pełna produkcja własna pod wymiar.",
    specs: ["Pojemności pod projekt", "Zęby wymienne", "Lakierowanie ochronne"],
  },
];

function Osprzet() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Osprzęt rolniczy i przemysłowy</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 02 — Osprzęt</span>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl uppercase leading-[0.95]">
              Osprzęt rolniczy i przemysłowy
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Produkujemy wytrzymały osprzęt do maszyn rolniczych i przemysłowych przeznaczony do
              ciężkiej pracy w gospodarstwach, tartakach i przemyśle. Wzmocnione konstrukcje, trwałe
              spawy, produkcja według indywidualnych wymiarów.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#realizacje"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                Zobacz realizacje <ArrowRight size={16} />
              </a>
              <Link
                to="/wycena"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Wyślij zapytanie
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <img src={bucketImg} alt="Osprzęt DMBK" className="relative w-full object-cover border border-border" />
          </div>
        </div>
      </section>

      <section id="realizacje" className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Produkty</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Co produkujemy</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {products.map((p) => (
            <article key={p.title} className="group border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={bucketImg}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 right-4 size-11 grid place-items-center border border-border bg-background/70 backdrop-blur-sm text-primary">
                  <p.icon size={18} strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl uppercase tracking-wider">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2"><span className="text-primary">—</span>{s}</li>
                  ))}
                </ul>
                <Link
                  to="/wycena"
                  className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary group-hover:gap-3 transition-all"
                >
                  Zapytaj o ten produkt <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

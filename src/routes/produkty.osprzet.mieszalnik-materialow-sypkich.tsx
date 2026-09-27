import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import mixerImg from "@/assets/mieszalnik-materialow-sypkich.png";

export const Route = createFileRoute("/produkty/osprzet/mieszalnik-materialow-sypkich")({
  head: () => ({
    meta: [
      { title: "Mieszalnik do materiałów sypkich — DMBK" },
      {
        name: "description",
        content: "Mieszalnik DMBK do szybkiego i równomiernego przygotowywania mieszanek. Solidna konstrukcja stalowa z osłoną komory mieszania.",
      },
      { property: "og:title", content: "Mieszalnik do materiałów sypkich — DMBK" },
      { property: "og:image", content: mixerImg },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MieszalnikMaterialowSypkich,
});

const features = [
  "Wytrzymała, spawana konstrukcja stalowa.",
  "Wewnętrzny układ mieszający zapewniający równomierne połączenie materiału.",
  "Osłona zabezpieczająca komorę mieszania.",
  "Nóż do wygodnego rozcinania worków.",
  "Wysokie ściany ograniczające wysypywanie materiału.",
  "Mocowanie dostosowane do maszyny klienta.",
  "Konstrukcja przeznaczona do intensywnej pracy.",
  "Powłoka lakiernicza zabezpieczająca stal przed korozją.",
];

function MieszalnikMaterialowSypkich() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/osprzet" className="hover:text-primary">Osprzęt rolniczy i przemysłowy</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Mieszalnik do materiałów sypkich</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img src={mixerImg} alt="Mieszalnik do materiałów sypkich DMBK" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 02 — Osprzęt</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">Mieszalnik do materiałów sypkich</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Solidny mieszalnik przeznaczony do szybkiego i równomiernego łączenia materiałów sypkich
              oraz przygotowywania gotowych mieszanek bezpośrednio w miejscu pracy. Wytrzymała
              konstrukcja stalowa pozwala na intensywne użytkowanie w gospodarstwie, na budowie i
              podczas prac przemysłowych.
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
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Produkt</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Konstrukcja mieszalnika</h2>
        <figure className="mt-10 overflow-hidden border border-border bg-card">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={mixerImg} alt="Stalowy mieszalnik DMBK z osłoną komory" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <figcaption className="border-t border-border px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground">Stalowy mieszalnik DMBK z osłoną komory</figcaption>
        </figure>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl uppercase">Potrzebujesz mieszalnika dopasowanego do swojej maszyny?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">Napisz lub zadzwoń — ustalimy wymiary, mocowanie i przygotujemy wycenę.</p>
          </div>
          <Link to="/wycena" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
            Zapytaj o produkt <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

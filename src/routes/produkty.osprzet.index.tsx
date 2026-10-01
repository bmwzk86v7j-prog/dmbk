import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Wheat, Mountain, Waves, Shovel, PackageOpen, Cog } from "lucide-react";
import walImg from "@/assets/wal-pryzmowy-01.png";
import spychImg from "@/assets/spych-do-kiszonki-03.png";
import plugImg from "@/assets/plug-rownajacy-03.png";
import transportBoxImg from "@/assets/skrzynie-transportowe-03.jpg";
import screeningBucketImg from "@/assets/lyzka-azurowa-01.jpg";
import mixerImg from "@/assets/mieszalnik-materialow-sypkich.png";

export const Route = createFileRoute("/produkty/osprzet/")({
  head: () => ({
    meta: [
      { title: "Osprzęt rolniczy do ciągników i maszyn | DMBK" },
      { name: "description", content: "Producent osprzętu rolniczego DMBK: skrzynie transportowe, pługi równające, spychy do kiszonki, łyżki ażurowe, wały pryzmowe i mieszalniki. Dostawa w Polsce, Niemczech i Europie." },
      { property: "og:title", content: "Osprzęt rolniczy do ciągników i maszyn | DMBK" },
      { property: "og:description", content: "Solidny osprzęt rolniczy produkowany w Polsce. Wykonanie pod maszynę i dostawa w całej Europie." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: spychImg },
    ],
  }),
  component: Osprzet,
});

const products = [
  {
    icon: PackageOpen,
    title: "Skrzynie transportowe",
    desc: "Zamykane skrzynie DMBK do przewozu narzędzi, części, materiałów i wyposażenia potrzebnego w gospodarstwie.",
    specs: ["Mocowanie do TUZ", "Zamykana stalowa konstrukcja", "Oświetlenie i elementy odblaskowe"],
    img: transportBoxImg,
    to: "/produkty/osprzet/skrzynie-transportowe" as const,
  },
  {
    icon: Shovel,
    title: "Pług równający",
    desc: "Pług DMBK do wyrównywania ziemi, kruszywa, dróg gruntowych, placów i terenu gospodarstwa.",
    specs: ["Profilowany lemiesz", "Wymienna listwa robocza", "Mocowanie do ciągnika"],
    img: plugImg,
    to: "/produkty/osprzet/plug-rownajacy" as const,
  },
  {
    icon: Wheat,
    title: "Spych do kiszonki",
    desc: "Spych DMBK do sprawnego rozprowadzania i równomiernego układania zielonki na pryzmach oraz w silosach.",
    specs: ["Szeroka powierzchnia robocza", "Wzmocniona dolna krawędź", "Mocowanie dopasowane do maszyny"],
    img: spychImg,
    to: "/produkty/osprzet/spych-do-kiszonki" as const,
  },
  {
    icon: Mountain,
    title: "Łyżka ażurowa / przesiewowa",
    desc: "Łyżka DMBK do zbierania kamieni i oddzielania ich od ziemi, piasku oraz innych drobnych materiałów.",
    specs: ["Ażurowa konstrukcja", "Wzmocniona krawędź z zębami", "Mocowanie dopasowane do maszyny"],
    img: screeningBucketImg,
    to: "/produkty/osprzet/lyzka-azurowa" as const,
  },
  {
    icon: Waves,
    title: "Wał pryzmowy do ugniatania kiszonki",
    desc: "Wał pryzmowy DMBK do dogniatania kiszonki w pryzmach i silosach. Profilowane pierścienie robocze zagęszczają materiał podczas przejazdu ciągnikiem.",
    specs: ["Profilowane pierścienie dogniatające", "Spawana konstrukcja stalowa", "Mocowanie do ciągnika"],
    img: walImg,
    to: "/produkty/osprzet/wal-pryzmowy" as const,
  },
  {
    icon: Cog,
    title: "Mieszalnik do materiałów sypkich",
    desc: "Mieszalnik DMBK do szybkiego i równomiernego przygotowywania mieszanek bezpośrednio w miejscu pracy.",
    specs: ["Wewnętrzny układ mieszający", "Osłona komory mieszania", "Mocowanie pod maszynę klienta"],
    img: mixerImg,
    to: "/produkty/osprzet/mieszalnik-materialow-sypkich" as const,
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

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grain opacity-40" aria-hidden />
        <div className="container-x relative py-16 lg:py-24">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-10 bg-primary" /> / 02 — Osprzęt
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.92] text-balance">
              Osprzęt rolniczy <span className="text-primary">i przemysłowy</span>
            </h1>
          </div>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)] lg:gap-16">
            <div>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Produkujemy wytrzymały osprzęt do maszyn rolniczych i przemysłowych przeznaczony do
                ciężkiej pracy w gospodarstwach, tartakach i przemyśle. Wzmocnione konstrukcje, trwałe
                spawy i produkcja według indywidualnych wymiarów.
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

            <div className="grid grid-cols-2 gap-px border border-border bg-border text-xs uppercase tracking-widest sm:grid-cols-3 lg:grid-cols-1">
              <div className="bg-background p-4"><span className="text-primary">01</span><span className="ml-3">Produkcja na wymiar</span></div>
              <div className="bg-background p-4"><span className="text-primary">02</span><span className="ml-3">Solidna stal</span></div>
              <div className="col-span-2 bg-background p-4 sm:col-span-1"><span className="text-primary">03</span><span className="ml-3">Mocowanie pod maszynę</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="realizacje" className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Produkty</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Co produkujemy</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {products.map((p) => {
            const body = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
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
                  <span
                    className={`mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary group-hover:gap-3 transition-all`}
                  >
                    Zobacz produkt <ArrowRight size={14} />
                  </span>
                </div>
              </>
            );
            const articleClass =
              "group h-full border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors";
            return (
              <Link key={p.title} to={p.to} className={`block ${articleClass}`}>
                {body}
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}

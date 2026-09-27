import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Check, ChevronRight, Plug, Toolbox } from "lucide-react";
import { useState } from "react";
import ballast600 from "@/assets/balast-600-700-01.png";
import ballast600Detail from "@/assets/balast-600-700-02.png";
import ballast800 from "@/assets/balast-800-900-01.png";
import ballast800Detail2 from "@/assets/balast-800-900-02.png";
import ballast800Detail3 from "@/assets/balast-800-900-03.png";
import ballast800WithBox from "@/assets/balast-800-ze-skrzynka.jpg";
import ballastLarge from "@/assets/balast-1000-1600-01.jpg";
import ballastLarge2 from "@/assets/balast-1000-1600-02.png";
import ballastLarge3 from "@/assets/balast-1000-1600-03.png";
import ballastLarge4 from "@/assets/balast-1000-1600-04.png";
import ballastLarge5 from "@/assets/balast-1000-1600-05.png";
import ballast1800 from "@/assets/balast-1800-01.png";
import ballast1800Detail2 from "@/assets/balast-1800-02.png";
import ballast1800Detail3 from "@/assets/balast-1800-03.png";
import ballast1800Detail4 from "@/assets/balast-1800-04.png";
import ballast1800Detail5 from "@/assets/balast-1800-05.png";
import ballast1800Detail6 from "@/assets/balast-1800-06.png";

const GROUPS = {
  "600-700": {
    label: "600–700 kg",
    masses: [600, 700],
    images: [ballast600, ballast600Detail],
    boxText: "Skrzynka nie jest dostępna w tej grupie.",
  },
  "800-900": {
    label: "800–900 kg",
    masses: [800, 900],
    images: [ballast800, ballast800Detail2, ballast800Detail3],
    boxText: "Standardowa obudowa 800–900 kg jest dostępna bez skrzynki.",
  },
  "1000-1600": {
    label: "1000–1600 kg",
    masses: [1000, 1200, 1400, 1600],
    images: [ballastLarge, ballastLarge2, ballastLarge3, ballastLarge4, ballastLarge5],
    boxText: "Dostępne wykonanie ze skrzynką lub bez skrzynki.",
  },
  "1800": {
    label: "1800 kg",
    masses: [1800],
    images: [ballast1800, ballast1800Detail2, ballast1800Detail3, ballast1800Detail4, ballast1800Detail5, ballast1800Detail6],
    boxText: "Dostępne wykonanie ze skrzynką lub bez skrzynki.",
  },
} as const;

type GroupSlug = keyof typeof GROUPS;

export const Route = createFileRoute("/produkty/balasty/$weight")({
  beforeLoad: ({ params }) => {
    if (!(params.weight in GROUPS)) throw notFound();
  },
  head: ({ params }) => {
    const group = GROUPS[params.weight as GroupSlug];
    return { meta: [{ title: `Balasty ${group.label} | DMBK` }] };
  },
  component: BalastGroupPage,
});

function BalastGroupPage() {
  const { weight } = Route.useParams();
  const slug = weight as GroupSlug;
  const group = GROUPS[slug];
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = group.images[selectedImage] ?? group.images[0];

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/balasty" className="hover:text-primary">Balasty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">{group.label}</span>
        </div>
      </section>

      <section className="container-x grid gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div>
          <div className="aspect-[16/11] overflow-hidden border border-border bg-black">
            <img src={activeImage} alt={`Balast DMBK ${group.label}`} className="h-full w-full object-contain" />
          </div>
          {group.images.length > 1 && (
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[16/10] overflow-hidden border bg-black transition-colors ${selectedImage === index ? "border-primary" : "border-border hover:border-primary/60"}`}
                  aria-label={`Pokaż ujęcie ${index + 1}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Balasty do ciągników</span>
          <h1 className="mt-3 font-display text-4xl uppercase leading-tight lg:text-5xl">Balasty {group.label}</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Balasty DMBK dostępne w kilku wariantach masy i wyposażenia. Szczegóły wykonania ustalamy podczas wyceny.
          </p>

          <div className="mt-9 border-y border-border py-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Dostępne masy</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.masses.map((mass) => (
                <div key={mass} className="border border-primary/50 bg-primary/5 px-5 py-3 font-display text-2xl text-primary">{mass} kg</div>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Info icon={<Check size={18} />} title="Oświetlenie LED">
              Dostępne jako wyposażenie. Dokładny zakres zestawu potwierdzamy przy wycenie.
            </Info>
            <Info icon={<Plug size={18} />} title="Podłączenie do ciągnika">
              Możliwe bezpośrednie podłączenie. Dokładny typ wtyczki lub szybkozłącza wymaga ustalenia.
            </Info>
            <Info icon={<Toolbox size={18} />} title="Skrzynka">
              {group.boxText}
            </Info>
          </div>

          {slug === "800-900" && (
            <div className="mt-8 overflow-hidden border border-primary/50 bg-primary/5">
              <img src={ballast800WithBox} alt="Balast 800 kg ze skrzynką w większej obudowie" className="aspect-[16/10] w-full bg-black object-contain" />
              <div className="p-5">
                <div className="font-display text-2xl uppercase">800 kg ze skrzynką — większa obudowa</div>
                <p className="mt-2 text-sm text-muted-foreground">Wersja ze skrzynką jest wykonywana w większej obudowie. Nie dotyczy standardowej obudowy 800–900 kg ani wariantu 900 kg.</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/wycena" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Zapytaj o wycenę <ArrowRight size={16} /></Link>
            <Link to="/produkty/balasty" className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary">Wróć do grup</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-3 border border-border bg-card p-4">
      <div className="flex h-10 w-10 items-center justify-center border border-primary/40 text-primary">{icon}</div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-wider">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

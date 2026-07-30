import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import ballastImg from "@/assets/product-ballast.jpg";

const WEIGHTS = [300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800] as const;

type Shape = "prosty" | "przeginany";
type Box = "bez" | "ze";

export const Route = createFileRoute("/produkty/balasty/$weight")({
  beforeLoad: ({ params }) => {
    const w = Number(params.weight);
    if (!WEIGHTS.includes(w as (typeof WEIGHTS)[number])) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const title = `Balast ${params.weight} kg — balasty do ciągników | DMBK`;
    const description = `Balast ${params.weight} kg do ciągnika. Konfigurator: wersja prosta lub przeginana, opcjonalna skrzynka narzędziowa.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BalastProduct,
});

const gallery = [ballastImg, ballastImg, ballastImg, ballastImg];

function BalastProduct() {
  const { weight } = Route.useParams();
  const w = Number(weight);

  const bendAvailable = w >= 600 && w <= 1800;
  const boxAvailable = w >= 1000 && w <= 1800;

  const [shape, setShape] = useState<Shape>("prosty");
  const [box, setBox] = useState<Box>("bez");

  const specs: [string, string][] = useMemo(
    () => [
      ["Waga", `${w} kg`],
      ["Montaż", "TUZ kat. II / III"],
      ["Geometria", shape === "prosty" ? "Prosta" : "Przeginana / profilowana"],
      ["Skrzynka", box === "ze" ? "Zintegrowana skrzynka narzędziowa" : "Brak"],
      ["Lakierowanie", "Proszkowe, RAL na życzenie"],
      ["Opcje", "LED, personalizacja, logo"],
      ["Materiał", "Stal konstrukcyjna"],
    ],
    [w, shape, box],
  );

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/balasty" className="hover:text-primary">Balasty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Balast {w} kg</span>
        </div>
      </section>

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-start">
        <div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl" aria-hidden />
            <img src={ballastImg} alt={`Balast ${w} kg`} className="relative w-full object-cover border border-border" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {gallery.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden border border-border bg-card">
                <img src={g} alt="" className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Balasty do ciągników</span>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-tight">
            Balast {w} <span className="text-primary">kg</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Obciążnik do ciągników. Skonfiguruj wersję i opcje dodatkowe.
            Wszystkie balasty wykonujemy ze stali konstrukcyjnej, malowane proszkowo.
          </p>

          {/* Konfigurator */}
          <div className="mt-8 space-y-6">
            <ConfigGroup
              label="Wersja"
              hint={!bendAvailable ? "Wariant przeginany dostępny dla 600–1800 kg" : undefined}
            >
              <Choice active={shape === "prosty"} onClick={() => setShape("prosty")}>
                Prosty
              </Choice>
              <Choice
                active={shape === "przeginany"}
                disabled={!bendAvailable}
                onClick={() => bendAvailable && setShape("przeginany")}
              >
                Przeginany
              </Choice>
            </ConfigGroup>

            <ConfigGroup
              label="Skrzynka narzędziowa"
              hint={!boxAvailable ? "Opcja ze skrzynką dostępna dla 1000–1800 kg" : undefined}
            >
              <Choice active={box === "bez"} onClick={() => setBox("bez")}>
                Bez skrzynki
              </Choice>
              <Choice
                active={box === "ze"}
                disabled={!boxAvailable}
                onClick={() => boxAvailable && setBox("ze")}
              >
                Ze skrzynką
              </Choice>
            </ConfigGroup>
          </div>

          {/* Specyfikacja */}
          <div className="mt-8 border border-border">
            {specs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[160px_1fr] gap-4 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
              >
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground self-center">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/wycena"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
            >
              Zapytaj o wycenę <ArrowRight size={16} />
            </Link>
            <Link
              to="/produkty/balasty"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Wróć do listy
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ConfigGroup({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">{label}</div>
      <div className="grid grid-cols-2 gap-2">{children}</div>
      {hint && <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground/70">{hint}</div>}
    </div>
  );
}

function Choice({
  active,
  disabled,
  onClick,
  children,
}: {
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "relative border px-4 py-3 text-sm uppercase tracking-wider text-left transition-colors",
        disabled
          ? "border-border/60 bg-card/40 text-muted-foreground/40 cursor-not-allowed"
          : active
            ? "border-primary bg-primary/10 text-primary"
            : "border-border bg-card hover:border-primary/60 hover:text-foreground",
      ].join(" ")}
    >
      <span className="flex items-center justify-between gap-2">
        {children}
        {active && !disabled && <Check size={14} />}
      </span>
    </button>
  );
}

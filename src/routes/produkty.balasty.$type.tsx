import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

const WEIGHTS = [300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800] as const;
const TYPES = { przednie: "Balasty przednie", tylne: "Balasty tylne" } as const;
type TypeKey = keyof typeof TYPES;

export const Route = createFileRoute("/produkty/balasty/$type")({
  beforeLoad: ({ params }) => {
    if (!(params.type in TYPES)) throw notFound();
  },
  head: ({ params }) => {
    const label = TYPES[params.type as TypeKey] ?? "Balasty";
    return {
      meta: [
        { title: `${label} — modele 300–1800 kg | DMBK` },
        { name: "description", content: `${label} DMBK — dostępne modele od 300 do 1800 kg. Konfiguracja: prosty / przeginany, ze skrzynką lub bez.` },
      ],
    };
  },
  component: BalastyTypeLayout,
});

function BalastyTypeLayout() {
  return <Outlet />;
}

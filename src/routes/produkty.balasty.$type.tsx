import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

const TYPES = { przednie: "Balasty przednie", tylne: "Balasty tylne" } as const;

export const Route = createFileRoute("/produkty/balasty/$type")({
  beforeLoad: ({ params }) => {
    if (!(params.type in TYPES)) throw notFound();
  },
  component: BalastyTypeLayout,
});

function BalastyTypeLayout() {
  return <Outlet />;
}

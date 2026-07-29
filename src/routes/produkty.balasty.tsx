import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/produkty/balasty")({
  component: BalastyLayout,
});

function BalastyLayout() {
  return <Outlet />;
}

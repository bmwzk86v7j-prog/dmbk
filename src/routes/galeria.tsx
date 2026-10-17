import { createFileRoute, redirect } from "@tanstack/react-router";

// The gallery is temporarily disabled; old links lead to the products page.
export const Route = createFileRoute("/galeria")({
  beforeLoad: () => {
    throw redirect({ to: "/produkty", statusCode: 302 });
  },
});
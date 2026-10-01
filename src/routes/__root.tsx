import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { I18nProvider } from "@/i18n/I18nProvider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DMBK | Balasty do ciągników i osprzęt rolniczy" },
      { name: "application-name", content: "DMBK" },
      { name: "description", content: "DMBK Polska — producent balastów, obciążników i osprzętu rolniczego do ciągników oraz maszyn. Polska produkcja i dostawa w całej Europie." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "DMBK" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:title", content: "DMBK | Balasty do ciągników i osprzęt rolniczy" },
      { property: "og:description", content: "Polski producent balastów, obciążników i osprzętu rolniczego. Transport w Polsce, Niemczech i całej Europie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DMBK | Balasty do ciągników i osprzęt rolniczy" },
      { name: "twitter:description", content: "Polski producent balastów, obciążników i osprzętu rolniczego z dostawą w całej Europie." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/db8ac1ea-fb0f-4e1f-8e25-ce5846151b12/id-preview-d2a0ece2--e1e7cf6c-0b1e-4478-92ee-bf9e98a183de.lovable.app-1779380666530.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/db8ac1ea-fb0f-4e1f-8e25-ce5846151b12/id-preview-d2a0ece2--e1e7cf6c-0b1e-4478-92ee-bf9e98a183de.lovable.app-1779380666530.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "DMBK",
              url: "https://dmbk.pl",
              email: "DMB-k@wp.pl",
              telephone: "+48 536 530 283",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strażacka 10",
                addressLocality: "Solarnia",
                postalCode: "42-700",
                addressCountry: "PL",
              },
              areaServed: ["PL", "DE", "EU"],
              knowsAbout: [
                "balasty do ciągników",
                "obciążniki do ciągników",
                "osprzęt rolniczy",
                "łyżki ażurowe",
                "spychy do kiszonki",
                "wały pryzmowe",
                "skrzynie transportowe do ciągników",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://dmbk.pl/#website",
              url: "https://dmbk.pl/",
              name: "DMBK",
              alternateName: ["DMBK Polska", "DMBK Solarnia"],
              publisher: {
                "@type": "Organization",
                name: "DMBK",
                url: "https://dmbk.pl/",
              },
              inLanguage: ["pl-PL", "de-DE", "en-GB"],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}

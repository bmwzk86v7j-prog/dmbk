import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const langs = ["PL", "EN", "DE"] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const nav = [
    { to: "/", label: t("nav_home") },
    { to: "/o-firmie", label: t("nav_about") },
    { to: "/produkty", label: t("nav_products") },
    { to: "/galeria", label: t("nav_gallery") },
    { to: "/wycena", label: t("nav_quote") },
    { to: "/kontakt", label: t("nav_contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-widest">
          <span className="inline-block h-3 w-3 bg-primary" aria-hidden />
          DMBK
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium uppercase tracking-wider">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1 text-xs font-medium">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 py-1 transition-colors ${
                lang === l ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-4 gap-3 text-sm uppercase tracking-wider">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs ${lang === l ? "text-primary" : "text-muted-foreground"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

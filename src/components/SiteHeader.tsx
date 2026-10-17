import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import dmbkLogo from "@/assets/dmbk-logo-header-gray.png";

const langs = ["PL", "EN", "DE"] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const nav = [
    { to: "/", label: t("nav_home") },
    { to: "/o-firmie", label: t("nav_about") },
    { to: "/produkty", label: t("nav_products") },
    { to: "/wycena", label: t("nav_quote") },
    { to: "/kontakt", label: t("nav_contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="DMBK — strona główna">
          <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden />
          <img
            src={dmbkLogo}
            alt="DMBK"
            className="block h-9 w-auto max-w-[8rem] object-contain"
          />
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

        <button type="button" aria-label="+48 536 530 283" aria-expanded={phoneOpen} aria-controls="mobile-contact" className="mobile-phone md:hidden" onClick={() => { setPhoneOpen((v) => !v); setOpen(false); }}><Phone size={18} /></button>
        <button
          className="mobile-menu-toggle md:hidden p-2 text-foreground"
          onClick={() => { setOpen((v) => !v); setPhoneOpen(false); }}
          aria-label="Menu" aria-expanded={open} aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {phoneOpen && (
        <div id="mobile-contact" className="md:hidden border-t border-border bg-background p-5 shadow-xl" onKeyDown={(event) => { if (event.key === "Escape") setPhoneOpen(false); }}>
          <div className="flex items-center justify-between gap-4">
            <span className="text-lg font-semibold">+48 536 530 283</span>
            <button type="button" onClick={() => setPhoneOpen(false)} aria-label={lang === "PL" ? "Zamknij" : lang === "DE" ? "Schließen" : "Close"} className="p-3"><X size={20} /></button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <a href="tel:+48536530283" className="flex min-h-12 items-center justify-center gap-2 bg-primary px-3 text-primary-foreground font-semibold"><Phone size={16} />{lang === "PL" ? "Zadzwoń" : lang === "DE" ? "Anrufen" : "Call"}</a>
            <Link to="/kontakt" onClick={() => setPhoneOpen(false)} className="flex min-h-12 items-center justify-center border border-border px-3">{t("nav_contact")}</Link>
          </div>
        </div>
      )}

      {open && (
        <div id="mobile-navigation" className="md:hidden border-t border-border bg-background">
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

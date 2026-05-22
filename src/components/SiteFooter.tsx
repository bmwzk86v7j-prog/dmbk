import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 bg-background mt-24">
      <div className="container-x py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-widest">
            <span className="inline-block h-3 w-3 bg-primary" aria-hidden />
            DMBK
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            {t("footer_tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{t("footer_nav")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/produkty" className="hover:text-primary">{t("nav_products")}</Link></li>
            <li><Link to="/galeria" className="hover:text-primary">{t("nav_gallery")}</Link></li>
            <li><Link to="/wycena" className="hover:text-primary">{t("nav_quote")}</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">{t("nav_contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{t("footer_contact")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Solarnia Strażacka 10</li>
            <li><a href="tel:+48536530283" className="hover:text-primary">+48 536 530 283</a></li>
            <li><a href="mailto:DMB-k@wp.pl" className="hover:text-primary">DMB-k@wp.pl</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} DMBK. {t("footer_rights")}</span>
          <span>{t("footer_made")}</span>
        </div>
      </div>
    </footer>
  );
}

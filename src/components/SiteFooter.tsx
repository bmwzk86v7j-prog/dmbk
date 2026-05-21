import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background mt-24">
      <div className="container-x py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-widest">
            <span className="inline-block h-3 w-3 bg-primary" aria-hidden />
            DMBK
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Konstrukcje stalowe i profesjonalna produkcja osprzętu. Balasty, łyżki, projekty specjalne.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Nawigacja</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/produkty" className="hover:text-primary">Produkty</Link></li>
            <li><Link to="/galeria" className="hover:text-primary">Galeria</Link></li>
            <li><Link to="/wycena" className="hover:text-primary">Wycena online</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Kontakt</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Solarnia, Polska</li>
            <li><a href="tel:+48537664170" className="hover:text-primary">+48 537 664 170</a></li>
            <li>kontakt@dmbk.pl</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} DMBK. Wszelkie prawa zastrzeżone.</span>
          <span>Made with steel & precision.</span>
        </div>
      </div>
    </footer>
  );
}

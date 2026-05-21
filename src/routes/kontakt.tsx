import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — DMBK" },
      { name: "description", content: "Kontakt z DMBK — Solarnia, +48 537 664 170." },
      { property: "og:title", content: "Kontakt — DMBK" },
      { property: "og:description", content: "Skontaktuj się z nami w sprawie wyceny i realizacji." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Kontakt</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase">Porozmawiajmy</h1>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <InfoRow icon={MapPin} label="Adres" value="Solarnia, Polska" />
            <InfoRow icon={Phone} label="Telefon" value="+48 537 664 170" href="tel:+48537664170" />
            <InfoRow icon={Mail} label="E-mail" value="kontakt@dmbk.pl" href="mailto:kontakt@dmbk.pl" />

            <div className="pt-6 border-t border-border">
              <h3 className="font-display uppercase tracking-wider text-lg">Godziny pracy</h3>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                <li className="flex justify-between max-w-xs"><span>Pon — Pt</span><span>07:00 — 17:00</span></li>
                <li className="flex justify-between max-w-xs"><span>Sobota</span><span>08:00 — 13:00</span></li>
                <li className="flex justify-between max-w-xs"><span>Niedziela</span><span>Zamknięte</span></li>
              </ul>
            </div>
          </div>

          <div className="border border-border overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <iframe
              title="Mapa DMBK Solarnia"
              src="https://www.google.com/maps?q=Solarnia,+Polska&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoRow({
  icon: Icon, label, value, href,
}: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const body = (
    <div className="flex items-start gap-4 group">
      <span className="flex h-12 w-12 items-center justify-center bg-card border border-border group-hover:border-primary transition-colors">
        <Icon size={18} className="text-primary" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-lg font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{body}</a> : body;
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — DMBK" },
      { name: "description", content: "Kontakt z DMBK — Solarnia Strażacka 10, +48 536 530 283." },
      { property: "og:title", content: "Kontakt — DMBK" },
      { property: "og:description", content: "Skontaktuj się z nami w sprawie wyceny i realizacji." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">{t("contact_kicker")}</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase">{t("contact_title")}</h1>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <InfoRow icon={MapPin} label={t("contact_address")} value="Solarnia Strażacka 10" />
            <InfoRow icon={Phone} label={t("contact_phone")} value="+48 536 530 283" href="tel:+48536530283" />
            <InfoRow icon={Mail} label={t("contact_email")} value="DMB-k@wp.pl" href="mailto:DMB-k@wp.pl" />

            <div className="pt-6 border-t border-border">
              <h3 className="font-display uppercase tracking-wider text-lg">{t("contact_hours")}</h3>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                <li className="flex justify-between max-w-xs"><span>{t("contact_mon_fri")}</span><span>07:00 — 16:00</span></li>
                <li className="flex justify-between max-w-xs"><span>{t("contact_sat")}</span><span>{t("contact_closed")}</span></li>
                <li className="flex justify-between max-w-xs"><span>{t("contact_sun")}</span><span>{t("contact_closed")}</span></li>
              </ul>
            </div>
          </div>

          <div className="border border-border overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <iframe
              title="Mapa DMBK"
              src="https://www.google.com/maps?q=Solarnia+Stra%C5%BCacka+10,+Polska&output=embed"
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

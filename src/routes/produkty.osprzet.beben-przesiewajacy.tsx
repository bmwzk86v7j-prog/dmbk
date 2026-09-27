import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import drumImg from "@/assets/beben-przesiewajacy.jpg";

export const Route = createFileRoute("/produkty/osprzet/beben-przesiewajacy")({
  head: () => ({
    meta: [
      { title: "Bęben przesiewający — DMBK" },
      {
        name: "description",
        content: "Bęben przesiewający DMBK do ziemi, kompostu, kruszywa i materiałów sypkich. Wzmocniona konstrukcja stalowa wykonywana według potrzeb klienta.",
      },
      { property: "og:title", content: "Bęben przesiewający — DMBK" },
      { property: "og:image", content: drumImg },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BebenPrzesiewajacy,
});

const features = [
  "Do przesiewania ziemi, kompostu, kruszywa i materiałów sypkich.",
  "Wytrzymała siatka stalowa o równomiernych oczkach.",
  "Wzmocniona konstrukcja z obręczami i żebrami usztywniającymi.",
  "Wewnętrzne elementy wspomagające przemieszczanie materiału.",
  "Spawana konstrukcja stalowa przeznaczona do intensywnej pracy.",
  "Powłoka lakiernicza zabezpieczająca przed korozją.",
  "Możliwość wykonania w różnych wymiarach i z innym rozmiarem oczek siatki.",
  "Produkcja według wymagań i zastosowania klienta.",
];

function BebenPrzesiewajacy() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-x py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/produkty" className="hover:text-primary">Produkty</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <Link to="/produkty/osprzet" className="hover:text-primary">Osprzęt rolniczy i przemysłowy</Link>
          <ChevronRight size={12} className="inline mx-2" />
          <span className="text-foreground">Bęben przesiewający</span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img src={drumImg} alt="Bęben przesiewający DMBK" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">/ 02 — Osprzęt</span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl uppercase leading-[0.95]">Bęben przesiewający</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Solidny bęben przeznaczony do mechanicznego przesiewania i rozdzielania materiałów
              według wielkości. Konstrukcja z wytrzymałej siatki stalowej umożliwia oddzielanie ziemi,
              kompostu, kruszywa oraz innych materiałów sypkich od większych elementów i zanieczyszczeń.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-primary/40 text-primary">
                    <Check size={12} strokeWidth={2} />
                  </span>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/wycena" className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
              Zapytaj o produkt <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Produkt</span>
        <h2 className="mt-3 font-display text-3xl lg:text-4xl uppercase">Konstrukcja bębna przesiewającego</h2>
        <figure className="mt-10 overflow-hidden border border-border bg-card">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={drumImg} alt="Stalowy bęben przesiewający DMBK" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <figcaption className="border-t border-border px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground">Stalowy bęben przesiewający DMBK</figcaption>
        </figure>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl uppercase">Potrzebujesz bębna o konkretnych wymiarach?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">Napisz lub zadzwoń — ustalimy średnicę, długość, rozmiar oczek siatki i przygotujemy wycenę.</p>
          </div>
          <Link to="/wycena" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform">
            Zapytaj o produkt <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

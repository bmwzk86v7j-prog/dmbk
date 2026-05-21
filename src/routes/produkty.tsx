import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import ballastImg from "@/assets/product-ballast.jpg";
import bucketImg from "@/assets/product-bucket.jpg";
import constructionImg from "@/assets/product-construction.jpg";
import specialImg from "@/assets/product-special.jpg";

export const Route = createFileRoute("/produkty")({
  head: () => ({
    meta: [
      { title: "Produkty — DMBK" },
      { name: "description", content: "Katalog produktów DMBK: balasty do traktorów, łyżki do koparek, konstrukcje stalowe, projekty specjalne." },
      { property: "og:title", content: "Produkty DMBK" },
      { property: "og:description", content: "Balasty, łyżki, konstrukcje stalowe, projekty specjalne." },
      { property: "og:image", content: ballastImg },
    ],
  }),
  component: Products,
});

const products = [
  {
    title: "Balasty do traktorów",
    img: ballastImg,
    desc: "Ciężkie obciążniki przednie poprawiające stabilność i przyczepność maszyn rolniczych.",
    params: ["Waga: 200–1500 kg", "Mocowanie pod TUZ", "Lakier proszkowy"],
  },
  {
    title: "Łyżki do koparek",
    img: bucketImg,
    desc: "Trwałe łyżki podsiębierne i skarpowe wykonane z hardoxa lub stali konstrukcyjnej.",
    params: ["Szerokość: 30–200 cm", "Zęby Esco / standard", "Wzmocnienia indywidualne"],
  },
  {
    title: "Konstrukcje stalowe",
    img: constructionImg,
    desc: "Ramy, wsporniki, hale, podesty — pełna produkcja od projektu po malowanie.",
    params: ["Stal S235 / S355", "MIG/MAG", "Cięcie, gięcie, spawanie"],
  },
  {
    title: "Projekty specjalne",
    img: specialImg,
    desc: "Nietypowe zlecenia, prototypy, indywidualne osprzęty pod wymiar klienta.",
    params: ["Realizacja pod rysunek", "Wsparcie konstrukcyjne", "Krótkie serie"],
  },
];

function Products() {
  return (
    <SiteLayout>
      <section className="container-x py-20 lg:py-24">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">/ Katalog</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl uppercase max-w-3xl">Produkty</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Pełna produkcja własna w czterech głównych kategoriach. Każdy element wykonujemy z naciskiem na
          jakość spawów i trwałość konstrukcji.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <article key={p.title} className="group border border-border bg-card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-display text-2xl uppercase tracking-wider">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.params.map((pp) => (
                    <li key={pp} className="flex gap-2">
                      <span className="text-primary">—</span> {pp}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    to="/wycena"
                    className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:-translate-y-0.5 transition-transform"
                  >
                    Zapytaj o wycenę <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

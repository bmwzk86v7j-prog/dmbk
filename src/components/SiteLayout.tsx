import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageTranslator } from "@/i18n/PageTranslator";
import { ImageLightbox } from "./ImageLightbox";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PageTranslator />
      <SiteHeader />
      <ImageLightbox>
        <main className="flex-1 image-zoom-area">{children}</main>
      </ImageLightbox>
      <SiteFooter />
    </div>
  );
}

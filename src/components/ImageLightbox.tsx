import { useEffect, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { Minus, Plus, X } from "lucide-react";

type OpenImage = {
  src: string;
  alt: string;
};

export function ImageLightbox({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<OpenImage | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setImage(null);
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(3, value + 0.25));
      if (event.key === "-") setZoom((value) => Math.max(1, value - 0.25));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image]);

  const openFromClick = (event: ReactMouseEvent<HTMLElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;
    if (!target.alt.trim() || target.dataset.noZoom !== undefined) return;

    event.preventDefault();
    event.stopPropagation();
    setZoom(1);
    setImage({ src: target.currentSrc || target.src, alt: target.alt });
  };

  return (
    <>
      <div className="contents" onClickCapture={openFromClick}>{children}</div>
      {image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Powiększone zdjęcie: ${image.alt}`}
          onClick={() => setImage(null)}
        >
          <div className="absolute right-3 top-3 z-20 flex items-center gap-2 sm:right-6 sm:top-6">
            <button
              type="button"
              className="grid size-11 place-items-center border border-white/25 bg-black/70 text-white transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
              onClick={(event) => {
                event.stopPropagation();
                setZoom((value) => Math.max(1, value - 0.25));
              }}
              disabled={zoom <= 1}
              aria-label="Oddal zdjęcie"
            >
              <Minus size={20} />
            </button>
            <span className="grid h-11 min-w-16 place-items-center border border-white/25 bg-black/70 px-3 text-xs font-semibold text-white">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              className="grid size-11 place-items-center border border-white/25 bg-black/70 text-white transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
              onClick={(event) => {
                event.stopPropagation();
                setZoom((value) => Math.min(3, value + 0.25));
              }}
              disabled={zoom >= 3}
              aria-label="Przybliż zdjęcie"
            >
              <Plus size={20} />
            </button>
            <button
              type="button"
              className="ml-1 grid size-11 place-items-center border border-white/25 bg-black/70 text-white transition-colors hover:border-primary hover:text-primary"
              onClick={(event) => {
                event.stopPropagation();
                setImage(null);
              }}
              aria-label="Zamknij podgląd"
            >
              <X size={22} />
            </button>
          </div>

          <div
            className="h-full w-full overflow-auto overscroll-contain"
            onClick={(event) => event.stopPropagation()}
            onWheel={(event) => {
              event.preventDefault();
              setZoom((value) => Math.min(3, Math.max(1, value + (event.deltaY < 0 ? 0.2 : -0.2))));
            }}
          >
            <div className="flex min-h-full min-w-full items-center justify-center p-3 sm:p-10">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[calc(100vh-7rem)] max-w-[calc(100vw-2rem)] select-none object-contain transition-transform duration-200 sm:max-w-[calc(100vw-5rem)]"
                style={{ transform: `scale(${zoom})` }}
                draggable={false}
                data-no-zoom
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

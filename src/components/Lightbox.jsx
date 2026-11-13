import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";

export default function Lightbox({ items, index, onClose, onChange }) {
  const { t } = useLanguage();

  const step = useCallback(
    (dir) => {
      onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, step]);

  const current = items[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[70] flex flex-col bg-foreground/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-5 text-primary-foreground">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] opacity-70">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("common.close")}
          className="flex h-10 w-10 items-center justify-center border border-primary-foreground/25 transition-colors hover:border-accent hover:text-accent"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label={t("common.prev")}
          className="absolute start-3 z-10 flex h-11 w-11 items-center justify-center border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-accent hover:text-accent sm:start-8"
        >
          <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
        </button>

        <figure className="max-h-full w-full max-w-4xl overflow-hidden">
          <Image
            src={current.src}
            alt={current.alt}
            fittingType="fit"
            className="max-h-[76vh] w-full object-contain"
          />
          <figcaption className="mt-4 text-center font-body text-[11px] uppercase tracking-[0.22em] text-primary-foreground/70">
            {current.alt}
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label={t("common.next")}
          className="absolute end-3 z-10 flex h-11 w-11 items-center justify-center border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-accent hover:text-accent sm:end-8"
        >
          <ChevronRight className="h-5 w-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}
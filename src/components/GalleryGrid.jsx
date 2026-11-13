import { useState } from "react";
import { Image } from "@/components/ui/image";
import { Maximize2 } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { useLanguage } from "@/lib/i18n";
import { GALLERY } from "@/lib/site-data";

const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
];

export default function GalleryGrid({ items = GALLERY, className = "" }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className={`grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-4 ${className}`}>
        {items.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`${t("gallery.open")} — ${item.alt}`}
            className={`group relative overflow-hidden bg-foreground/10 text-left ${SPANS[i % SPANS.length]}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fittingType="fill"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/25" />
            <span className="absolute bottom-3 end-3 flex h-9 w-9 translate-y-2 items-center justify-center border border-primary-foreground/60 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" />
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <Lightbox items={items} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </>
  );
}
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { GALLERY } from "@/lib/site-data";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export default function GalleryTeaser() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} intro={t("gallery.intro")} />
          <Link to="/gallery" className="inline-flex shrink-0 items-center gap-3 font-body text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent">
            {t("common.allPhotos")}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <GalleryGrid items={GALLERY.slice(0, 6)} />
        </Reveal>
      </div>
    </section>
  );
}
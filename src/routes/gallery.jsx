import { usePageMeta } from "@/lib/usePageMeta";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export default function GalleryPage() {
  usePageMeta(
    "Photo gallery — Hôtel Marjane Agadir",
    "Real photos of Hôtel Marjane Agadir: guest rooms, reception, café, private balconies and bathrooms."
  );
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.title")}
        intro={t("gallery.intro")}
        image={images.cafe}
        alt={t("hero.strip3")}
      />

      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-editorial">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
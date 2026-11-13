import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo gallery — Hôtel Marjane Agadir" },
      {
        name: "description",
        content:
          "A photo tour of Hôtel Marjane Agadir: patios, rooms and suites, the pool, the hammam, the terrace table and Agadir light.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.title")}
        intro={t("gallery.intro")}
        image={images.terrace}
        alt={t("gallery.title")}
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
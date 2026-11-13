import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import OffersTeaser from "@/components/sections/OffersTeaser";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & packages — Hôtel Marjane Agadir" },
      {
        name: "description",
        content:
          "Atlantic escape, spa retreat and long-stay packages at Hôtel Marjane Agadir: ocean-view rooms, hammam and Moroccan breakfast.",
      },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("offers.eyebrow")}
        title={t("offers.title")}
        intro={t("offers.intro")}
        image={images.rooftop}
        alt={t("offers.o3.name")}
      />
      <OffersTeaser showHeading={false} />
    </main>
  );
}
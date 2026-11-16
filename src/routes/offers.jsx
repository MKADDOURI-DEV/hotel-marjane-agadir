import { usePageMeta } from "@/lib/usePageMeta";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import OffersTeaser from "@/components/sections/OffersTeaser";

export default function OffersPage() {
  usePageMeta(
    "Offers & packages — Hôtel Marjane Agadir",
    "Weekend and long-stay packages at Hôtel Marjane Agadir: single, double and triple rooms with Moroccan breakfast."
  );
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("offers.eyebrow")}
        title={t("offers.title")}
        intro={t("offers.intro")}
        image={images.balcony}
        alt={t("photo.balcony")}
      />
      <OffersTeaser showHeading={false} />
    </main>
  );
}
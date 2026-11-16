import { usePageMeta } from "@/lib/usePageMeta";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  usePageMeta(
    "Hotel services — Hôtel Marjane Agadir",
    "24-hour concierge, Moroccan restaurant and café, and fibre Wi-Fi throughout Hôtel Marjane Agadir."
  );
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        intro={t("services.intro")}
        image={images.lobby}
        alt={t("hero.strip2")}
      />

      <ServicesGrid showHeading={false} background="bg-background" />
    </main>
  );
}
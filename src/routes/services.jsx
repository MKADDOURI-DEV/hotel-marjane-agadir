import { usePageMeta } from "@/lib/usePageMeta";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPage() {
  usePageMeta(
    "Hotel services — Hôtel Marjane Agadir",
    "24-hour concierge, Moroccan restaurant and terrace breakfast, pool, traditional hammam spa, fibre Wi-Fi and airport transfers in Agadir."
  );
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        intro={t("services.intro")}
        image={images.pool}
        alt={t("services.s3.name")}
      />

      <ServicesGrid showHeading={false} background="bg-background" />

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="overflow-hidden bg-foreground/10">
            <Image
              src={images.hammam}
              alt={t("services.s4.name")}
              fittingType="fill"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow={t("services.s4.name")} title={t("services.s4.desc")} />
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/70">{t("services.extra")}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden bg-foreground/10">
                <Image
                  src={images.breakfast}
                  alt={t("services.s2.name")}
                  fittingType="fill"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-foreground/10">
                <Image
                  src={images.rooftop}
                  alt={t("services.s3.name")}
                  fittingType="fill"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
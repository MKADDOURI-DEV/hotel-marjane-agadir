import { usePageMeta } from "@/lib/usePageMeta";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  usePageMeta(
    "The hotel — Hôtel Marjane Agadir",
    "A Moroccan boutique hotel in Agadir: palm-shaded patio, 32 rooms and suites, hammam and Moroccan table, ten minutes from the beach."
  );
  const { t } = useLanguage();

  const stats = [
    { value: t("about.stat1v"), label: t("about.stat1l") },
    { value: t("about.stat2v"), label: t("about.stat2l") },
    { value: t("about.stat3v"), label: t("about.stat3l") },
  ];

  return (
    <main>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        intro={t("about.p1")}
        image={images.lobby}
        alt={t("about.title")}
      />

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container-editorial grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow={t("nav.about")} title={t("about.title")} />
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">{t("about.p1")}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{t("about.p2")}</p>
            <p className="mt-8 border-s-2 border-accent ps-5 font-heading text-2xl font-light leading-snug text-foreground">
              {t("about.quote")}
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-heading text-4xl font-light text-foreground">{stat.value}</dt>
                  <dd className="mt-1 font-body text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="overflow-hidden arch-top bg-foreground/10">
              <Image
                src={images.terrace}
                alt={t("hero.strip3")}
                fittingType="fill"
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
            </div>
            <div className="overflow-hidden bg-foreground/10">
              <Image
                src={images.breakfast}
                alt={t("services.s2.name")}
                fittingType="fill"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="legal" className="border-t border-border bg-card py-16">
        <div className="container-editorial max-w-3xl">
          <h2 className="eyebrow">{t("about.legalTitle")}</h2>
          <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{t("about.legalText")}</p>
        </div>
      </section>
    </main>
  );
}
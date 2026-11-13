import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";

export default function PageHero({ eyebrow, title, intro, image = images.facade, alt }) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="container-editorial grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="rule-gold" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-2xl font-heading text-[clamp(2.3rem,5vw,4.2rem)] font-light leading-[1.08] tracking-[-0.02em] text-foreground">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/70">{intro}</p>}
          <p className="mt-8 font-body text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            {t("brand.city")}
          </p>
        </div>

        <div className="overflow-hidden arch-top bg-foreground/10">
          <Image
            src={image}
            alt={alt || title}
            fittingType="fill"
            className="aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
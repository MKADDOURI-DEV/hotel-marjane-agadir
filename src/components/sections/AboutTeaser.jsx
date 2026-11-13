import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function AboutTeaser() {
  const { t } = useLanguage();

  const stats = [
    { value: t("about.stat1v"), label: t("about.stat1l") },
    { value: t("about.stat2v"), label: t("about.stat2l") },
    { value: t("about.stat3v"), label: t("about.stat3l") },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden arch-top bg-foreground/10">
            <Image
              src={images.lobby}
              alt={t("about.title")}
              fittingType="fill"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 end-4 hidden max-w-[220px] border border-border bg-card px-6 py-5 shadow-[0_20px_50px_-30px_rgba(45,36,30,0.5)] sm:block">
            <p className="font-heading text-lg leading-snug text-foreground">{t("about.quote")}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
          <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">{t("about.p1")}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{t("about.p2")}</p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-4xl font-light text-foreground">{stat.value}</dt>
                <dd className="mt-1 font-body text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <Link to="/about" className="mt-9 inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent">
            {t("common.more")}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
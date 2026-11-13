import { ConciergeBell, UtensilsCrossed, Waves, Sparkles, Wifi, CarFront } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const ICONS = [ConciergeBell, UtensilsCrossed, Waves, Sparkles, Wifi, CarFront];
const KEYS = ["s1", "s2", "s3", "s4", "s5", "s6"];

export default function ServicesGrid({ showHeading = true, background = "bg-background" }) {
  const { t } = useLanguage();

  return (
    <section className={`${background} py-24 sm:py-32`}>
      <div className="container-editorial">
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow={t("services.eyebrow")}
              title={t("services.title")}
              intro={t("services.intro")}
              align="center"
            />
          </Reveal>
        )}

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={key} delay={i * 70} className="bg-card">
                <div className="flex h-full flex-col gap-4 p-8 transition-colors duration-500 hover:bg-secondary/50 sm:p-10">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
                  <h3 className="font-heading text-2xl font-light text-foreground">
                    {t(`services.${key}.name`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`services.${key}.desc`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t("services.extra")}
        </p>
      </div>
    </section>
  );
}
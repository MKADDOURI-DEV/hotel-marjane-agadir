import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { OFFERS } from "@/lib/site-data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function OffersTeaser({ showHeading = true }) {
  const { t } = useLanguage();

  return (
    <section className="bg-secondary/50 py-24 sm:py-32">
      <div className="container-editorial">
        {showHeading && (
          <Reveal>
            <SectionHeading eyebrow={t("offers.eyebrow")} title={t("offers.title")} intro={t("offers.intro")} align="center" />
          </Reveal>
        )}

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 90}>
              <article className="group flex h-full flex-col border border-border bg-card">
                <div className="relative overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={t(`offers.o${i + 1}.name`)}
                    fittingType="fill"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute start-4 top-4 bg-accent px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-accent-foreground">
                    {offer.discount}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="font-body text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                    {t("offers.badge")}
                  </span>
                  <h3 className="mt-2 font-heading text-[26px] font-light text-foreground">
                    {t(`offers.o${i + 1}.name`)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`offers.o${i + 1}.desc`)}
                  </p>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                    <p>
                      <span className="block font-body text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        {offer.nights} {t("common.nights")} · {t("common.from")}
                      </span>
                      <span className="font-heading text-2xl text-foreground">{offer.price} MAD</span>
                    </p>
                    <Link
                      to="/contact"
                      aria-label={`${t("offers.cta")} — ${t(`offers.o${i + 1}.name`)}`}
                      className="flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {t("offers.terms")}
        </p>
      </div>
    </section>
  );
}
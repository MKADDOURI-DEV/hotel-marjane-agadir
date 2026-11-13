import { MapPin, Clock, CarFront, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact } from "@/lib/site-data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function LocationSection({ compact = false }) {
  const { t } = useLanguage();
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="border-t border-border bg-card py-24 sm:py-32">
      <div className="container-editorial grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={t("location.eyebrow")} title={t("location.title")} intro={compact ? undefined : t("location.text")} />
          <dl className="mt-9 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="eyebrow">{t("location.addressLabel")}</dt>
                <dd className="mt-1 text-sm text-foreground/80">
                  {contact.street}, {contact.city}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="eyebrow">{t("location.hoursLabel")}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{t("location.hours")}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <CarFront className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="eyebrow">{t("location.airport")}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{t("location.text")}</dd>
              </div>
            </div>
          </dl>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-9 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent"
          >
            {t("location.directions")} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <Reveal delay={120} className="overflow-hidden border border-border">
          <iframe
            title="Hôtel Marjane Agadir — map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full grayscale-[25%] transition-all duration-700 hover:grayscale-0 sm:h-[440px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
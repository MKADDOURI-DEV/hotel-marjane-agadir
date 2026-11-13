import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact, images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/sections/LocationSection";
import Reveal from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & reservations — Hôtel Marjane Agadir" },
      {
        name: "description",
        content:
          "Contact Hôtel Marjane Agadir: Boulevard du 20 Août, Agadir. Phone, WhatsApp and email for reservations and information.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();

  const details = [
    { icon: MapPin, label: t("location.addressLabel"), value: `${contact.street}, ${contact.city}` },
    { icon: Phone, label: t("common.call"), value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: t("common.email"), value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: t("location.hoursLabel"), value: t("location.hours") },
  ];

  return (
    <main>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        intro={t("contact.intro")}
        image={images.breakfast}
        alt={t("contact.title")}
      />

      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="eyebrow">{t("contact.direct")}</h2>
            <ul className="mt-6 space-y-7">
              {details.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="eyebrow">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm text-foreground transition-colors hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-foreground/80">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex items-center gap-2 border border-border px-4 py-3 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-accent" /> {t("contact.reply")}
            </p>
          </Reveal>
        </div>
      </section>

      <LocationSection compact />
    </main>
  );
}
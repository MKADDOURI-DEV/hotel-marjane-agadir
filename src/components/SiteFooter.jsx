import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { NAV_ITEMS, contact, whatsappLink } from "@/lib/site-data";

export default function SiteFooter() {
  const { t } = useLanguage();
  const year = 2026;

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-body text-[8px] uppercase tracking-[0.42em] text-muted-foreground">Hôtel</span>
            <span className="font-heading text-[28px] leading-none tracking-[0.15em] text-foreground">MARJANE</span>
            <span className="mt-1 font-body text-[8px] uppercase tracking-[0.38em] text-muted-foreground">Agadir</span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">{t("footer.explore")}</h2>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.filter((i) => i.to !== "/").map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-foreground/80 transition-colors hover:text-accent">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">{t("footer.contactTitle")}</h2>
          <ul className="mt-5 space-y-4 text-sm text-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {contact.street}
                <br />
                {contact.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={contact.phoneHref} className="transition-colors hover:text-accent">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-accent">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">{t("footer.booking")}</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t("location.hours")}</p>
          <a
            href={whatsappLink("Bonjour Hôtel Marjane, je souhaite réserver un séjour.")}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost mt-5 w-full"
          >
            {t("common.whatsapp")}
          </a>
          <Link to="/about#legal" className="mt-4 inline-block text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">
            {t("footer.legal")}
          </Link>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-editorial flex flex-col items-center justify-between gap-3 py-6 text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
          <p>© {year} Hôtel Marjane Agadir. {t("footer.rights")}</p>
          <p>{t("brand.city")}</p>
        </div>
      </div>
    </footer>
  );
}
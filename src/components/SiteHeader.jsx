import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { NAV_ITEMS, LANGS, contact } from "@/lib/site-data";

export default function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "glass-sand border-border py-3"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="container-editorial flex items-center justify-between gap-6">
        <Link to="/" aria-label="Hôtel Marjane Agadir — home" className="group flex flex-col leading-none">
          <span className="font-body text-[8px] uppercase tracking-[0.42em] text-muted-foreground">
            Hôtel
          </span>
          <span className="font-heading text-[26px] leading-none tracking-[0.15em] text-foreground transition-colors group-hover:text-accent">
            MARJANE
          </span>
          <span className="mt-1 font-body text-[8px] uppercase tracking-[0.38em] text-muted-foreground">
            Agadir
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link text-foreground" : "nav-link")}
            >
              {t(item.key)}
              {pathname === item.to && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 md:flex" aria-label={t("common.language")}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-label={l.name}
                aria-pressed={lang === l.code}
                className={`px-2 py-1 font-body text-[10px] uppercase tracking-[0.18em] transition-colors ${
                  lang === l.code ? "text-foreground underline decoration-accent decoration-2 underline-offset-4" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link to="/contact" className="btn-gold hidden !px-5 !py-3 sm:inline-flex">
            {t("common.book")}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("common.close") : t("common.menu")}
            className="inline-flex h-10 w-10 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>

      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-background pt-24 lg:hidden">
          <div className="container-editorial flex flex-col py-8">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border py-5 font-heading text-3xl text-foreground"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {t(item.key)}
              </Link>
            ))}

            <div className="mt-8 flex items-center gap-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`border px-4 py-2 font-body text-[10px] uppercase tracking-[0.2em] ${
                    lang === l.code ? "border-foreground bg-foreground text-primary-foreground" : "border-foreground/25 text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <a href={contact.phoneHref} className="mt-8 inline-flex items-center gap-3 text-sm text-foreground">
              <Phone className="h-4 w-4 text-accent" /> {contact.phone}
            </a>
            <Link to="/contact" className="btn-solid mt-6">
              {t("common.bookNow")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
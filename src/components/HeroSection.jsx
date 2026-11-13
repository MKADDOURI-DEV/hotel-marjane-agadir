import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/i18n";
import { images } from "@/lib/site-data";

const STRIP = [
  { src: images.suite, altKey: "hero.strip1" },
  { src: images.pool, altKey: "hero.strip2" },
  { src: images.terrace, altKey: "hero.strip3" },
];

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [ready, setReady] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Split the headline into letters for the gold ripple (Latin scripts only —
  // Arabic must keep its connected letterforms intact).
  const title = t("hero.title");
  const letters = title.split("");

  return (
    <section ref={ref} aria-label={t("hero.eyebrow")} className="relative overflow-hidden bg-background pb-0 pt-28 sm:pt-32">
      <style>{`
        .mj-hero-anim .mj-rise { opacity: 0; animation: mjRise .8s cubic-bezier(.2,.7,.2,1) forwards; }
        .mj-hero-anim .mj-rise-1 { animation-delay: .05s; }
        .mj-hero-anim .mj-rise-2 { animation-delay: .18s; }
        .mj-hero-anim .mj-rise-3 { animation-delay: .30s; }
        .mj-hero-anim .mj-photo { opacity: 0; animation: mjRisePhoto .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .mj-hero-anim .mj-photo-1 { animation-delay: .38s; }
        .mj-hero-anim .mj-photo-2 { animation-delay: .50s; }
        .mj-hero-anim .mj-photo-3 { animation-delay: .62s; }
        @keyframes mjRise { from { opacity: 0; transform: translateY(1.4rem); } to { opacity: 1; transform: none; } }
        @keyframes mjRisePhoto { from { opacity: 0; transform: translateY(2.4rem); } to { opacity: 1; transform: none; } }
        @keyframes mjLetter { 0%, 22%, 100% { color: hsl(var(--foreground)); } 10% { color: hsl(var(--accent)); } }
        .mj-letter { animation: mjLetter 5s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mj-hero-anim .mj-rise, .mj-hero-anim .mj-photo { opacity: 1; animation: none; }
          .mj-letter { animation: none; color: hsl(var(--foreground)); }
        }
      `}</style>

      <div className={`container-editorial ${ready ? "mj-hero-anim" : ""}`}>
        <div className="flex flex-col items-center text-center">
          <span className="mj-rise mj-rise-1 eyebrow inline-flex items-center gap-3">
            <span className="rule-gold" />
            {t("hero.eyebrow")}
            <span className="rule-gold" />
          </span>

          <h1 className="mj-rise mj-rise-1 mt-6 max-w-4xl font-heading text-[clamp(2.4rem,6vw,4.9rem)] font-light leading-[1.08] tracking-[-0.02em] text-foreground">
            {lang === "ar"
              ? title
              : letters.map((ch, i) =>
                  ch === " " ? (
                    " "
                  ) : (
                    <span key={i} className="mj-letter inline" style={{ animationDelay: `${i * 0.08}s` }}>
                      {ch}
                    </span>
                  )
                )}
          </h1>

          <p className="mj-rise mj-rise-2 mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/75 sm:text-base">
            {t("hero.sub")}
          </p>

          <Link to="/rooms" className="mj-rise mj-rise-3 mt-9 group inline-flex items-stretch overflow-hidden rounded-[3px] border border-foreground bg-accent text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-primary-foreground">
            <span className="px-6 py-3 font-body text-[11px] uppercase tracking-[0.24em]">{t("hero.cta")}</span>
            <span className="w-px self-stretch bg-foreground/70" aria-hidden="true" />
            <span className="flex w-11 items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 17.4 17.4" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                <path d="M11.35 1.52 14.1 4.68c1.87 2.15 1.87 5.63 0 7.78l-2.75 3.16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M15.5 8.63H1.07" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-10 grid h-[min(52vw,420px)] grid-cols-3 gap-2.5 overflow-hidden sm:mt-12 sm:gap-4">
          {STRIP.map((item, i) => (
            <div
              key={item.src}
              className={`min-w-0 ${i === 1 ? "translate-y-[clamp(0px,4vw,52px)]" : ""}`}
            >
              <figure className={`mj-photo mj-photo-${i + 1} m-0 h-[calc(100%+120px)] overflow-hidden rounded-t-[14px] bg-foreground/10`}>
                <Image
                  src={item.src}
                  alt={t(item.altKey)}
                  fittingType="fill"
                  className="h-full w-full object-cover object-top"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
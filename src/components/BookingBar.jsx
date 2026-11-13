import { useEffect, useState } from "react";
import { CalendarDays, Users, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-data";

export default function BookingBar() {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [rooms, setRooms] = useState("1");
  const [today, setToday] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  const nights =
    checkIn && checkOut
      ? Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000))
      : 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkIn || !checkOut || nights < 1) {
      setStatus("invalid");
      return;
    }
    setStatus("pending");
  };

  const message = `Bonjour Hôtel Marjane — arrivée ${checkIn || "…"}, départ ${checkOut || "…"}, ${adults} adulte(s), ${children} enfant(s), ${rooms} chambre(s).`;

  return (
    <section id="booking" aria-label={t("booking.title")} className="relative z-20 -mt-6 sm:-mt-10">
      <div className="container-editorial">
        <form
          onSubmit={handleSubmit}
          className="border border-border bg-card px-6 py-7 shadow-[0_24px_60px_-30px_rgba(45,36,30,0.35)] sm:px-9 sm:py-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-light text-foreground">{t("booking.title")}</h2>
              <p className="mt-1 text-[13px] text-muted-foreground">{t("booking.sub")}</p>
            </div>
            {nights > 0 && (
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent-foreground">
                <Check className="h-3.5 w-3.5 text-accent" /> {nights} {t("booking.nights")}
              </p>
            )}
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
            <div>
              <label htmlFor="check-in" className="field-label">
                <CalendarDays className="me-1.5 inline h-3 w-3 text-accent" />
                {t("booking.checkIn")}
              </label>
              <input
                id="check-in"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="field-input"
              />
            </div>
            <div>
              <label htmlFor="check-out" className="field-label">
                <CalendarDays className="me-1.5 inline h-3 w-3 text-accent" />
                {t("booking.checkOut")}
              </label>
              <input
                id="check-out"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="field-input"
              />
            </div>
            <div>
              <label htmlFor="adults" className="field-label">
                <Users className="me-1.5 inline h-3 w-3 text-accent" />
                {t("booking.adults")}
              </label>
              <select id="adults" value={adults} onChange={(e) => setAdults(e.target.value)} className="field-input">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="children" className="field-label">{t("booking.children")}</label>
              <select id="children" value={children} onChange={(e) => setChildren(e.target.value)} className="field-input">
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="rooms" className="field-label">{t("booking.rooms")}</label>
              <select id="rooms" value={rooms} onChange={(e) => setRooms(e.target.value)} className="field-input">
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" className="btn-solid">
              {t("booking.submit")} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </button>
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer noopener" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">
              {t("booking.whatsapp")}
            </a>
          </div>

          {status && (
            <p role="status" className="mt-5 border-s-2 border-accent bg-secondary/60 px-4 py-3 text-[13px] leading-relaxed text-foreground/80">
              {status === "invalid" ? t("booking.invalid") : t("booking.note")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
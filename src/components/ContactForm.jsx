import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact, whatsappLink } from "@/lib/site-data";

// INTEGRATION POINT -----------------------------------------------------------
// The form validates locally and never pretends to send. To make it live,
// replace the body of handleSubmit with a request to a real service, e.g.
//   await fetch("https://formspree.io/f/<your-id>", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, phone, message }),
//   });
// then show a success state. Until then the visitor is told nothing was sent,
// and is offered WhatsApp / e-mail as the working channels.
// ----------------------------------------------------------------------------

const EMPTY = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (values.name.trim().length < 2) next.name = t("contact.error.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) next.email = t("contact.error.email");
    if (values.message.trim().length < 10) next.message = t("contact.error.message");
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-border bg-card p-7 sm:p-10">
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="field-label">{t("contact.name")}</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            className="field-input"
          />
          {errors.name && <p id="err-name" className="mt-2 text-[12px] text-destructive">{errors.name}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="field-label">{t("contact.email")}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className="field-input"
          />
          {errors.email && <p id="err-email" className="mt-2 text-[12px] text-destructive">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="field-label">{t("contact.phone")}</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={update("phone")} className="field-input" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">{t("contact.message")}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={update("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
            className="field-input resize-none"
          />
          {errors.message && <p id="err-message" className="mt-2 text-[12px] text-destructive">{errors.message}</p>}
        </div>
      </div>

      <button type="submit" className="btn-solid mt-8">{t("contact.submit")}</button>

      {submitted && (
        <div role="status" className="mt-6 flex gap-3 border-s-2 border-accent bg-secondary/60 px-4 py-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <p className="text-[13px] leading-relaxed text-foreground/80">{t("contact.notice")}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={whatsappLink("Bonjour Hôtel Marjane, j'ai une question.")}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground underline underline-offset-4 hover:text-accent"
        >
          <Check className="h-3.5 w-3.5 text-accent" /> {t("common.whatsapp")}
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground underline underline-offset-4 hover:text-accent"
        >
          <Check className="h-3.5 w-3.5 text-accent" /> {t("common.email")}
        </a>
      </div>
    </form>
  );
}
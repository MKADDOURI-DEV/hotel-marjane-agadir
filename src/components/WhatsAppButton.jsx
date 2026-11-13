import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-data";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={whatsappLink("Bonjour Hôtel Marjane, j'aimerais des informations sur votre hôtel.")}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={t("common.whatsapp")}
      className="group fixed bottom-5 end-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F6F4A] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="pointer-events-none absolute end-full me-3 hidden whitespace-nowrap rounded-sm bg-foreground px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground group-hover:block">
        {t("common.whatsapp")}
      </span>
    </a>
  );
}
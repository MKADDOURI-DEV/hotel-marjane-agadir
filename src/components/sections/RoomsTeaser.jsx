import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { ROOMS } from "@/lib/site-data";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";

export default function RoomsTeaser() {
  const { t } = useLanguage();

  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={t("rooms.eyebrow")} title={t("rooms.title")} intro={t("rooms.intro")} />
          <Link to="/rooms" className="inline-flex shrink-0 items-center gap-3 font-body text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent">
            {t("common.viewAll")}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ROOMS.slice(0, 3).map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
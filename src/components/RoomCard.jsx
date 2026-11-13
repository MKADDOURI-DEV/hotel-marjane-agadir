import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { ArrowUpRight, Maximize2, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function RoomCard({ room, index = 0, detailed = false }) {
  const { t } = useLanguage();

  return (
    <Reveal delay={index * 90}>
      <article className="group flex h-full flex-col">
        <Link to="/rooms" className="relative block overflow-hidden bg-foreground/10" aria-label={t(`room.${room.id}.name`)}>
          <Image
            src={room.image}
            alt={t(`room.${room.id}.name`)}
            fittingType="fill"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-foreground/70 to-transparent px-4 pb-3 pt-10 text-primary-foreground">
            <span className="font-body text-[10px] uppercase tracking-[0.24em]">
              {room.size} · {room.guests} {t("common.guests")}
            </span>
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
        </Link>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-[26px] font-light leading-tight text-foreground">
              {t(`room.${room.id}.name`)}
            </h3>
            <p className="whitespace-nowrap text-end">
              <span className="block font-body text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("common.from")}
              </span>
              <span className="font-heading text-xl text-foreground">{room.price}</span>
              <span className="font-body text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {" "}MAD {t("common.perNight")}
              </span>
            </p>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`room.${room.id}.desc`)}</p>

          {detailed && (
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
              {room.amenities.map((key) => (
                <li key={key} className="font-body text-[10px] uppercase tracking-[0.16em] text-foreground/60">
                  {t(key)}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex items-center gap-4">
            <Link to="/contact" className="btn-ghost !px-5 !py-2.5 !text-[10px]">
              {t("common.book")}
            </Link>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <Maximize2 className="h-3 w-3" /> {room.size}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <Users className="h-3 w-3" /> {room.guests}
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
import { usePageMeta } from "@/lib/usePageMeta";
import { useLanguage } from "@/lib/i18n";
import { ROOMS, images } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import BookingBar from "@/components/BookingBar";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const AMENITIES = [
  "room.amenity.bath",
  "room.amenity.safe",
  "room.amenity.tv",
  "room.amenity.desk",
  "room.amenity.minibar",
  "room.amenity.wifi",
];

export default function RoomsPage() {
  usePageMeta(
    "Rooms & suites — Hôtel Marjane Agadir",
    "Classic rooms, ocean-view prestige rooms, junior suites and family suites — linen bedding, artisan woodwork and Atlantic light in Agadir."
  );
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrow={t("rooms.eyebrow")}
        title={t("rooms.title")}
        intro={t("rooms.intro")}
        image={images.ocean}
        alt={t("room.ocean.name")}
      />

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container-editorial grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} detailed />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="container-editorial">
          <Reveal>
            <SectionHeading eyebrow={t("services.title")} title={t("rooms.amenitiesTitle")} align="center" />
            <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {AMENITIES.map((key) => (
                <li key={key} className="border-b border-border pb-3 font-body text-[11px] uppercase tracking-[0.16em] text-foreground/70">
                  {t(key)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="pb-16">
        <BookingBar />
      </div>
    </main>
  );
}
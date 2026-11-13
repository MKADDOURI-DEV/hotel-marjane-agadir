import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import AboutTeaser from "@/components/sections/AboutTeaser";
import RoomsTeaser from "@/components/sections/RoomsTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";
import OffersTeaser from "@/components/sections/OffersTeaser";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import LocationSection from "@/components/sections/LocationSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hôtel Marjane Agadir — Boutique hotel by the Atlantic" },
      {
        name: "description",
        content:
          "A boutique hotel in the heart of Agadir: rooms and suites, pool, hammam and a Moroccan table, ten minutes from the beach.",
      },
      { property: "og:title", content: "Hôtel Marjane Agadir" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <HeroSection />
      <BookingBar />
      <AboutTeaser />
      <RoomsTeaser />
      <ServicesGrid />
      <OffersTeaser />
      <GalleryTeaser />
      <LocationSection />
    </main>
  );
}
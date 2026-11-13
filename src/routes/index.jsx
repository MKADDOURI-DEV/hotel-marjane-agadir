import { usePageMeta } from "@/lib/usePageMeta";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import AboutTeaser from "@/components/sections/AboutTeaser";
import RoomsTeaser from "@/components/sections/RoomsTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";
import OffersTeaser from "@/components/sections/OffersTeaser";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import LocationSection from "@/components/sections/LocationSection";

export default function HomePage() {
  usePageMeta(
    "Hôtel Marjane Agadir — Boutique hotel by the Atlantic",
    "A boutique hotel in the heart of Agadir: rooms and suites, pool, hammam and a Moroccan table, ten minutes from the beach."
  );

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
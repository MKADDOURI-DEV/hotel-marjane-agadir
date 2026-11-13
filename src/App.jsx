import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "@/lib/AuthContext";
import { createQueryClient } from "@/lib/query-client";
import { LanguageProvider } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/routes/index";
import AboutPage from "@/routes/about";
import RoomsPage from "@/routes/rooms";
import ServicesPage from "@/routes/services";
import OffersPage from "@/routes/offers";
import GalleryPage from "@/routes/gallery";
import ContactPage from "@/routes/contact";

const queryClient = createQueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <ScrollToTop />
          <SiteHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SiteFooter />
          <WhatsAppButton />
          <Toaster />
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
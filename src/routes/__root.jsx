import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/AuthContext";
import { LanguageProvider } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Base44Scripts } from "base44:document";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hôtel Marjane Agadir — Boutique hotel by the Atlantic" },
      {
        name: "description",
        content:
          "Hôtel Marjane Agadir: a boutique hotel in the heart of Agadir, ten minutes from the beach. Rooms and suites, pool, hammam, Moroccan restaurant.",
      },
      { property: "og:title", content: "Hôtel Marjane Agadir" },
      {
        property: "og:description",
        content: "Quiet luxury on the Atlantic — rooms, suites, spa and Moroccan table in Agadir.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://media.base44.com/images/public/6af6fd02760f3e5992735916/ecce3e492_generated_2b0bb276.png",
      },
      { name: "theme-color", content: "#F9F6F2" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <WhatsAppButton />
        <Toaster />
      </LanguageProvider>
    </AuthProvider>
  );
}

function RootDocument({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body data-react-root="true">
        {children}
        <Base44Scripts />
        <Scripts />
      </body>
    </html>
  );
}
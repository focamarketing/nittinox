import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBand from "@/components/TrustBand";
import CategoriesSection from "@/components/CategoriesSection";
import BestSellersSection from "@/components/BestSellersSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import LaunchesSection from "@/components/LaunchesSection";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingChatBot from "@/components/FloatingChatBot";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header phone={site.whatsapp.phone} waMessage={site.hero.waMessage} />
      <HeroSection />
      <TrustBand />
      <CategoriesSection />
      <BestSellersSection />
      <InstitutionalSection />
      <LaunchesSection />
      <ContactFormSection />
      <WhatsAppBanner />
      <Footer />
      <FloatingChatBot />
      <FloatingWhatsApp />
    </>
  );
}

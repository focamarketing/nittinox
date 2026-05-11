import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const waUrl = buildWhatsAppUrl(site.whatsapp.phone, site.hero.waMessage);
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full btn-wa flex items-center justify-center shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)]"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={26} variant="detailed" />
    </a>
  );
}

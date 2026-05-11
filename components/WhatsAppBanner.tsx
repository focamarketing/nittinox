import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppBanner() {
  const { ctaBanner, whatsapp } = site;
  const waUrl = buildWhatsAppUrl(whatsapp.phone, ctaBanner.waMessage);

  return (
    <section className="relative overflow-hidden" style={{ background: "#25D366" }}>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      ></div>

      <div className="relative max-w-shell mx-auto px-6 lg:px-10 py-[120px] lg:py-[160px] text-center">
        <div className="eyebrow text-white/85 mb-5">{ctaBanner.eyebrow}</div>
        <h2 className="font-display font-extrabold text-white text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.98] max-w-[1000px] mx-auto">
          {ctaBanner.headline1}
          <br />
          {ctaBanner.headline2}
        </h2>
        <p className="text-white/90 text-[18px] lg:text-[20px] leading-relaxed max-w-[620px] mx-auto mt-7">
          {ctaBanner.copy}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 h-[68px] px-9 rounded-full font-semibold text-[17px] bg-white text-wa-hover hover:bg-white/95 transition shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
        >
          <WhatsAppIcon size={22} variant="simple" />
          {ctaBanner.ctaLabel}
        </a>
        <div className="mt-6 text-white/85 text-[13px] tracking-[0.12em] uppercase">
          {ctaBanner.footnote}
        </div>
      </div>
    </section>
  );
}

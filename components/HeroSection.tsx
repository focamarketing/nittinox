import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function HeroSection() {
  const { hero, whatsapp } = site;
  const waUrl = buildWhatsAppUrl(whatsapp.phone, hero.waMessage);

  return (
    <section
      id="top"
      className="relative h-screen min-h-[760px] w-full overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 hero-overlay hero-grain"></div>

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

      <div className="relative z-10 h-full max-w-shell mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28 lg:pb-32">
        <div className="max-w-[920px]">
          <div className="eyebrow text-white/85 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-white/60"></span>
            <span>{hero.eyebrow}</span>
          </div>
          <h1 className="font-display font-extrabold text-white leading-[0.98] text-[44px] sm:text-[60px] lg:text-[80px]">
            {hero.headline1}
            <br />
            {hero.headline2}
            <br />
            <span className="text-white/85">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-7 text-white/85 text-[17px] lg:text-[19px] leading-relaxed max-w-[640px]">
            {hero.copy}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex items-center gap-3 h-[60px] px-7 rounded-full font-semibold text-[16px]"
            >
              <WhatsAppIcon size={22} variant="simple" />
              {hero.ctaPrimary}
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center gap-2 h-[60px] px-6 rounded-full font-semibold text-[15px] text-white border border-white/30 hover:bg-white/10 transition"
            >
              {hero.ctaSecondary}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
          <span className="text-[11px] tracking-[0.25em] uppercase">scroll</span>
          <div className="w-[22px] h-[36px] rounded-full border border-white/40 flex items-start justify-center pt-1.5">
            <span className="block w-[3px] h-[6px] rounded-full bg-white scroll-dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

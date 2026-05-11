import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function InstitutionalSection() {
  const { institutional, whatsapp } = site;
  const waUrl = buildWhatsAppUrl(whatsapp.phone, institutional.ctaWaMessage);

  return (
    <section className="relative overflow-hidden">
      <div className="ph-dark relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(4,144,209,0.85) 0%, rgba(2,55,80,0.7) 100%)",
          }}
        ></div>
        <div className="relative max-w-shell mx-auto px-6 lg:px-10 py-[120px] lg:py-[180px] grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="eyebrow text-white/80 mb-5">{institutional.eyebrow}</div>
            <h2 className="font-display font-extrabold text-white text-[40px] lg:text-[68px] leading-[1.02]">
              {institutional.headline1}
              <br />
              {institutional.headline2}
            </h2>
            <p className="text-white/85 text-[17px] lg:text-[19px] leading-relaxed max-w-[640px] mt-7">
              {institutional.copy}
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 max-w-[520px]">
              {institutional.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-extrabold text-white text-[36px] lg:text-[44px]">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-[13px] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa mt-10 inline-flex items-center gap-3 h-[58px] px-7 rounded-full font-semibold text-[15.5px]"
            >
              <WhatsAppIcon size={20} variant="simple" />
              {institutional.ctaLabel}
            </a>
          </div>

          <div className="lg:col-span-5 self-end">
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-7">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60 mb-4">
                {institutional.testimonial.eyebrow}
              </div>
              <p className="text-white text-[18px] leading-relaxed">
                &ldquo;{institutional.testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center font-display font-bold text-white">
                  {institutional.testimonial.initials}
                </div>
                <div className="text-white/80 text-[13.5px]">
                  <div className="font-semibold text-white">
                    {institutional.testimonial.name}
                  </div>
                  <div className="text-white/60">{institutional.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

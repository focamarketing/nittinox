import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function LaunchesSection() {
  const seeAllUrl = buildWhatsAppUrl(
    site.whatsapp.phone,
    site.launchesAllWaMessage
  );
  const launchHref = `https://wa.me/${site.whatsapp.phone}`;

  return (
    <section id="lancamentos" className="bg-white">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-[120px] lg:py-[160px]">
        <RevealOnScroll className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-[640px]">
            <div className="eyebrow text-cyan-brand mb-4">Lançamentos · 2026</div>
            <h2 className="font-display font-extrabold text-[40px] lg:text-[56px] leading-[1.02]">
              Novidades que chegaram
              <br />
              direto para o seu setup.
            </h2>
          </div>
          <a
            href={seeAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-brand font-semibold text-[15px] inline-flex items-center gap-2 ul-link"
          >
            Ver todos os lançamentos{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.launches.map((launch) => (
            <article
              key={launch.name}
              className="rounded-2xl border border-line lift overflow-hidden bg-white"
            >
              <div className="relative ph-stripe aspect-[5/4] flex items-center justify-center">
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-cyan-brand text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase">
                  Novo
                </span>
                <span className="font-mono text-[11px] text-ink-soft/70">
                  [ launch · img.png ]
                </span>
              </div>
              <div className="p-6">
                <div className="text-ink-soft text-[12px] uppercase tracking-[0.12em]">
                  {launch.category}
                </div>
                <h3 className="font-display font-bold text-[19px] mt-1 leading-snug">
                  {launch.name}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-flag font-display font-extrabold text-[20px]">
                    {launch.price}
                  </span>
                  <a
                    href={launchHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-brand font-semibold text-[14px] ul-link"
                  >
                    Ver no WhatsApp →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

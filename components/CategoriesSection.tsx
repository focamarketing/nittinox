import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function CategoriesSection() {
  return (
    <section id="categorias" className="bg-white">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-[120px] lg:py-[160px]">
        <RevealOnScroll className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-[640px]">
            <div className="eyebrow text-cyan-brand mb-4">Catálogo · Categorias</div>
            <h2 className="font-display font-extrabold text-[40px] lg:text-[56px] leading-[1.02]">
              Instrumentais para cada
              <br />
              etapa do procedimento.
            </h2>
          </div>
          <p className="text-ink-soft text-[16px] max-w-[420px] leading-relaxed">
            Selecione uma categoria e fale direto com nosso time no WhatsApp para
            receber disponibilidade, condições e orçamento personalizado.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {site.categories.map((cat) => (
            <a
              key={cat.slug}
              href={buildWhatsAppUrl(site.whatsapp.phone, cat.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-card lift group rounded-2xl bg-white overflow-hidden"
            >
              <div className="ph-stripe aspect-[4/3] overflow-hidden flex items-end justify-between p-5">
                <div className="cat-img w-full h-full flex items-center justify-center">
                  <span className="font-mono text-[11px] text-ink-soft/70">
                    [ product · {cat.slug}.png ]
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-[18px]">{cat.name}</div>
                  <div className="text-ink-soft text-[13px] mt-0.5">{cat.subtitle}</div>
                </div>
                <span className="text-cyan-brand group-hover:translate-x-1 transition-transform">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

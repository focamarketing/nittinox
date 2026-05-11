"use client";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import RevealOnScroll from "@/components/RevealOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function ContactFormSection() {
  const waUrl = buildWhatsAppUrl(site.whatsapp.phone, "Olá! Gostaria de me cadastrar e receber o catálogo Nittinox.");

  return (
    <section id="cadastro" className="bg-alt">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-[120px] lg:py-[160px]">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Coluna esquerda */}
          <RevealOnScroll>
            <div className="eyebrow text-cyan-brand mb-4">Cadastro · Nittinox</div>
            <h2 className="font-display font-extrabold text-[36px] lg:text-[52px] leading-[1.04]">
              Faça seu cadastro e <br />
              <span className="text-cyan-brand">receba nosso catálogo</span>
            </h2>
            <p className="text-ink-soft text-[16px] leading-relaxed mt-5 max-w-[480px]">
              Preencha o formulário ao lado e nossa equipe entrará em contato com o catálogo completo de instrumentais e materiais odontológicos, além de condições especiais para profissionais.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-cyan-soft flex items-center justify-center flex-shrink-0 text-cyan-brand">
                  <WhatsAppIcon size={18} variant="simple" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft mb-0.5">WhatsApp</div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[15px] hover:text-cyan-brand transition-colors"
                  >
                    {site.footer.contact.whatsappLabel}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-cyan-soft flex items-center justify-center flex-shrink-0 text-cyan-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 7 9-7" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft mb-0.5">E-mail</div>
                  <a
                    href={`mailto:${site.footer.contact.email}`}
                    className="font-semibold text-[15px] hover:text-cyan-brand transition-colors"
                  >
                    {site.footer.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-cyan-soft flex items-center justify-center flex-shrink-0 text-cyan-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft mb-0.5">Localização</div>
                  <span className="font-semibold text-[15px]">
                    {site.footer.contact.addressLine2}
                  </span>
                </div>
              </li>
            </ul>
          </RevealOnScroll>

          {/* Coluna direita — card do formulário */}
          <RevealOnScroll>
            <div className="bg-white rounded-2xl border border-line shadow-sm p-8 lg:p-10">
              <form onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-ink">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="h-11 px-4 rounded-xl border border-line text-[14px] text-ink placeholder:text-ink-soft outline-none focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/15 transition"
                    />
                  </div>

                  {/* CPF */}
                  <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-ink">CPF</label>
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      className="h-11 px-4 rounded-xl border border-line text-[14px] text-ink placeholder:text-ink-soft outline-none focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/15 transition"
                    />
                  </div>

                  {/* Telefone */}
                  <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-ink">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="h-11 px-4 rounded-xl border border-line text-[14px] text-ink placeholder:text-ink-soft outline-none focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/15 transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-ink">E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="h-11 px-4 rounded-xl border border-line text-[14px] text-ink placeholder:text-ink-soft outline-none focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/15 transition"
                    />
                  </div>

                  {/* CRO */}
                  <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-ink flex items-center gap-2">
                      CRO
                      <span className="text-[11px] font-normal text-ink-soft tracking-wide">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="CRO/UF 00000"
                      className="h-11 px-4 rounded-xl border border-line text-[14px] text-ink placeholder:text-ink-soft outline-none focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/15 transition"
                    />
                  </div>

                  {/* Descrição */}
                  <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-ink flex items-center gap-2">
                      Mensagem
                      <span className="text-[11px] font-normal text-ink-soft tracking-wide">(Opcional)</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Conte-nos sobre seu consultório ou o que você procura..."
                      className="px-4 py-3 rounded-xl border border-line text-[14px] text-ink placeholder:text-ink-soft outline-none focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/15 transition resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full h-[52px] rounded-xl font-semibold text-[15px] text-white flex items-center justify-center gap-2 transition hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #0490D1 0%, #0276AE 100%)" }}
                >
                  Enviar cadastro
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                  </svg>
                </button>

                <p className="mt-4 text-center text-[12px] text-ink-soft">
                  Retornamos em até 24 horas úteis.
                </p>
              </form>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}

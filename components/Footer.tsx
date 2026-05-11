import Image from "next/image";
import { site } from "@/lib/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (label === "Facebook") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-2 2-2h2V2h-3c-3 0-5 1.7-5 5v3H6v4h3v8z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.7-1.7C18.2 5 12 5 12 5s-6.2 0-7.9.5A2.5 2.5 0 0 0 2.4 7.2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.5 1.7 1.7C5.8 19 12 19 12 19s6.2 0 7.9-.5a2.5 2.5 0 0 0 1.7-1.7c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15V9l5 3-5 3z" />
    </svg>
  );
}

export default function Footer() {
  const { footer, whatsapp } = site;
  const waHref = `https://wa.me/${whatsapp.phone}`;
  const mailHref = `mailto:${footer.contact.email}`;

  return (
    <footer id="contato" className="bg-white border-t border-line">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-20 lg:py-24 grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="col-span-2 lg:col-span-4">
          <a href="#top" className="inline-flex items-center" aria-label="Nittinox">
            <Image
              src="/nittinox-logo.webp"
              alt="Nittinox — Produtos Odontológicos"
              width={190}
              height={58}
              className="h-12 w-auto"
            />
          </a>
          <p className="text-ink-soft text-[14.5px] leading-relaxed mt-5 max-w-[340px]">
            {footer.tagline}
          </p>

          <div className="mt-7">
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-3">
              Pagamento
            </div>
            <div className="flex flex-wrap gap-2">
              {footer.payments.map((p) => (
                <span
                  key={p}
                  className="px-2.5 h-7 inline-flex items-center text-[11px] font-mono border border-line rounded-md text-ink-soft"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-3">
              Envio
            </div>
            <div className="flex flex-wrap gap-2">
              {footer.shipping.map((s) => (
                <span
                  key={s}
                  className="px-2.5 h-7 inline-flex items-center text-[11px] font-mono border border-line rounded-md text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="font-display font-bold text-[14px] mb-5">Categorias</div>
          <ul className="flex flex-col gap-3 text-[14px] text-ink-soft">
            {footer.categoryLinks.map((label) => (
              <li key={label}>
                <a className="hover:text-ink ul-link" href="#categorias">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-display font-bold text-[14px] mb-5">Atendimento</div>
          <ul className="flex flex-col gap-3 text-[14px] text-ink-soft">
            {footer.supportLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-ink ul-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="font-display font-bold text-[14px] mb-5">Contato</div>
          <ul className="flex flex-col gap-3 text-[14px] text-ink-soft">
            <li className="flex items-start gap-3">
              <span className="w-5 mt-0.5 text-cyan-brand">
                <WhatsAppIcon size={18} variant="detailed" />
              </span>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                {footer.contact.whatsappLabel}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 mt-0.5 text-cyan-brand">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 5l3-2 3 4-2 2a14 14 0 0 0 8 8l2-2 4 3-2 3a3 3 0 0 1-3 1A20 20 0 0 1 2 8a3 3 0 0 1 1-3z" />
                </svg>
              </span>
              <span>{footer.contact.phoneLabel}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 mt-0.5 text-cyan-brand">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 7 9-7" />
                </svg>
              </span>
              <a href={mailHref} className="hover:text-ink">
                {footer.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 mt-0.5 text-cyan-brand">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <span>
                {footer.contact.addressLine1}
                <br />
                {footer.contact.addressLine2}
              </span>
            </li>
          </ul>

          <div className="mt-7">
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-3">
              Redes
            </div>
            <div className="flex items-center gap-2">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-cyan-brand hover:text-cyan-brand transition"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-shell mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-ink-soft text-[12.5px]">
          <div>{footer.legal}</div>
          <div>
            Desenvolvido por{" "}
            <a
              href="https://focamarketing.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-brand font-semibold hover:text-cyan-deep transition-colors"
            >
              Foca Marketing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

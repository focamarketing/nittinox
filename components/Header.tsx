"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type Props = {
  phone: string;
  waMessage: string;
};

export default function Header({ phone, waMessage }: Props) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onScroll = () => {
      if (window.scrollY > 8) el.classList.add("header-scrolled");
      else el.classList.remove("header-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waUrl = buildWhatsAppUrl(phone, waMessage);

  return (
    <header
      ref={headerRef}
      id="hdr"
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300 bg-white border-b border-line"
    >
      <div className="max-w-shell mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Nittinox">
          <Image
            src="/nittinox-logo.webp"
            alt="Nittinox — Produtos Odontológicos"
            width={170}
            height={52}
            className="h-9 w-auto"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[14.5px] font-medium text-ink/85">
          <a href="#categorias" className="ul-link">
            Categorias
          </a>
          <a href="#lancamentos" className="ul-link">
            Lançamentos
          </a>
          <a href="#mais-vendidos" className="ul-link">
            Mais Vendidos
          </a>
          <a href="#contato" className="ul-link">
            Contato
          </a>
        </nav>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa inline-flex items-center gap-2 px-4 lg:px-5 h-11 rounded-full font-semibold text-[14.5px]"
        >
          <WhatsAppIcon size={18} variant="detailed" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

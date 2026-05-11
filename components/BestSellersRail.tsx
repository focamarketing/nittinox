"use client";

import { useRef } from "react";
import type { BestSeller } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import RevealOnScroll from "@/components/RevealOnScroll";

type Props = {
  bestSellers: BestSeller[];
  phone: string;
  headerSlot: React.ReactNode;
};

export default function BestSellersRail({ bestSellers, phone, headerSlot }: Props) {
  const railRef = useRef<HTMLDivElement>(null);

  const step = () => {
    const rail = railRef.current;
    if (!rail) return 0;
    return Math.min(rail.clientWidth * 0.85, 700);
  };

  const prev = () => railRef.current?.scrollBy({ left: -step(), behavior: "smooth" });
  const next = () => railRef.current?.scrollBy({ left: step(), behavior: "smooth" });

  return (
    <>
      <RevealOnScroll className="flex items-end justify-between flex-wrap gap-6 mb-14">
        {headerSlot}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="w-12 h-12 rounded-full border border-line bg-white flex items-center justify-center hover:border-cyan-brand hover:text-cyan-brand transition"
            aria-label="Anterior"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="w-12 h-12 rounded-full border border-line bg-white flex items-center justify-center hover:border-cyan-brand hover:text-cyan-brand transition"
            aria-label="Próximo"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </RevealOnScroll>

      <div
        ref={railRef}
        className="hscroll flex gap-5 overflow-x-auto pb-6 -mx-6 lg:-mx-10 px-6 lg:px-10"
      >
        {bestSellers.map((item) => (
          <article
            key={item.name}
            className="hsnap shrink-0 w-[300px] sm:w-[330px] bg-white rounded-2xl border border-line lift overflow-hidden"
          >
            <div className="ph-stripe aspect-square flex items-center justify-center">
              <span className="font-mono text-[11px] text-ink-soft/70">
                [ photo · 1200×1200 ]
              </span>
            </div>
            <div className="p-5">
              <div className="text-ink-soft text-[12px] uppercase tracking-[0.12em]">
                {item.category}
              </div>
              <h3 className="font-display font-bold text-[17px] mt-1 leading-snug">
                {item.name}
              </h3>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-flag font-display font-extrabold text-[22px]">
                  {item.price}
                </span>
                {item.priceFrom && (
                  <span className="text-ink-soft text-[12px] line-through">
                    {item.priceFrom}
                  </span>
                )}
              </div>
              <a
                href={buildWhatsAppUrl(phone, item.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa mt-4 w-full inline-flex items-center justify-center gap-2 h-11 rounded-full text-[14px] font-semibold"
              >
                <WhatsAppIcon size={16} variant="simple" />
                Pedir no WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

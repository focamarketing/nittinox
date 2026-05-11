"use client";
import { useState } from "react";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const waBase = buildWhatsAppUrl(site.whatsapp.phone, "Olá! Preciso de ajuda com produtos Nittinox.");

  const handleSend = () => {
    if (!message.trim()) return;
    const url = buildWhatsAppUrl(site.whatsapp.phone, message.trim());
    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {/* Janela de chat */}
      {open && (
        <div className="w-[320px] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-[#0b1d3a] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0490D1]/20 border border-[#0490D1]/60 flex items-center justify-center flex-shrink-0">
              <span className="text-[#0490D1] text-[13px] font-bold leading-none">N</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[13px] font-semibold leading-tight">Nittinox</div>
              <div className="text-[#0490D1] text-[11px]">Atendimento online</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Fechar chat"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mensagens */}
          <div className="p-4 bg-[#eef2f7] min-h-[320px] flex flex-col gap-3">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-[13.5px] text-ink shadow-sm max-w-[90%] leading-relaxed">
              Olá! 👋 Sou o assistente da <strong>Nittinox</strong>. Como posso te ajudar hoje?
            </div>
          </div>

          {/* Rodapé */}
          <div className="bg-white border-t border-line flex flex-col gap-2 p-3">
            <a
              href={waBase}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] text-cyan-brand hover:underline flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              Falar com atendente humano
            </a>
            <div className="flex items-center gap-2 border border-line rounded-xl px-3 py-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 text-[13px] outline-none bg-transparent text-ink placeholder:text-ink-soft"
              />
              <button
                onClick={handleSend}
                aria-label="Enviar"
                className="text-cyan-brand hover:text-cyan-deep transition-colors flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pílula + botão */}
      <div className="flex items-center gap-3">
        {!open && (
          <div className="bg-[#0b1d3a] text-white text-[13px] font-medium px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
            Precisa de ajuda?
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Atendimento Nittinox"
          className="w-14 h-14 rounded-full shadow-[0_8px_32px_-8px_rgba(0,0,0,0.45)] bg-[#0b1d3a] flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0490D1" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <span
              className="text-[#0490D1] text-[28px] font-bold leading-none select-none"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              N
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

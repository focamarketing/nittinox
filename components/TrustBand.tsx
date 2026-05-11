import { site } from "@/lib/site";
import type { TrustIcon } from "@/lib/site";

function Icon({ name }: { name: TrustIcon }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3z" />
          <path d="M14 10h4l3 3v3h-7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18M7 15h4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      );
  }
}

export default function TrustBand() {
  return (
    <section className="border-y border-line bg-white">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-10 lg:py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
        {site.trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl border border-line flex items-center justify-center text-cyan-brand">
              <Icon name={item.icon} />
            </div>
            <div>
              <div className="font-semibold text-[15px]">{item.title}</div>
              <div className="text-ink-soft text-[14px] mt-0.5">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

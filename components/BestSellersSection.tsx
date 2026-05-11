import { site } from "@/lib/site";
import BestSellersRail from "@/components/BestSellersRail";

export default function BestSellersSection() {
  const headerSlot = (
    <div>
      <div className="eyebrow text-cyan-brand mb-4">Mais vendidos · Top 6</div>
      <h2 className="font-display font-extrabold text-[40px] lg:text-[56px] leading-[1.02]">
        Os preferidos dos
        <br />
        nossos clientes.
      </h2>
    </div>
  );

  return (
    <section id="mais-vendidos" className="bg-alt">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-[120px] lg:py-[160px]">
        <BestSellersRail
          bestSellers={site.bestSellers}
          phone={site.whatsapp.phone}
          headerSlot={headerSlot}
        />
      </div>
    </section>
  );
}

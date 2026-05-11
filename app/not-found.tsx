import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow text-cyan-brand mb-4">Erro 404</div>
        <h1 className="font-display font-extrabold text-[40px] lg:text-[56px] leading-[1.02]">
          Página não encontrada.
        </h1>
        <p className="text-ink-soft text-[16px] mt-5 leading-relaxed">
          A página que você procurou não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="btn-wa mt-8 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-semibold text-[14.5px]"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}

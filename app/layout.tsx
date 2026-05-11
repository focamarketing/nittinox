import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nittinox.com.br"),
  title: "Nittinox — Materiais odontológicos com qualidade que faz a diferença",
  description:
    "Distribuidor oficial de instrumentais e materiais odontológicos desde 2014. Atendimento direto pelo WhatsApp e envio para todo o Brasil.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nittinox — Materiais odontológicos",
    description:
      "Mais de 10 anos abastecendo consultórios e laboratórios em todo o Brasil.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="bg-white text-ink">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takeovers | Seu Atendente Inteligente no WhatsApp",
  description: "Takeovers responde, agenda e organiza sua rotina no WhatsApp 24h por dia.",
  keywords: ["IA", "WhatsApp", "Automação", "Atendimento Virtual", "Agendamento", "Assistente Virtual", "Takeovers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

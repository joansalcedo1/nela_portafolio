import type { Metadata } from "next";

import { Itim, Caveat } from 'next/font/google';
import "./globals.css";




// Configuración de Itim (requiere definir el peso porque no es variable)
const itim = Itim({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-itim',
  display: 'swap',
});

// Configuración de Caveat (es una fuente variable, no necesitas definir peso a menos que quieras restringirlo)
const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nela | Dirección de Arte",
  description: "Portafolio de Daniela Rubio Hurtado, estudiante de cine especializada en dirección y asistencia de arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${itim.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-base text-ink font-sans flex flex-col selection:bg-accent-primary selection:text-ink">
        {children}
      </body>
    </html>
  );
}

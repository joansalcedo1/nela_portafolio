"use client";

import { contactInfo } from "@/lib/data";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink text-bg-base py-12 font-sans relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Firma */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-mono text-xl font-bold">Nela</span>
          <span className="text-sm opacity-80 mt-1">Daniela Rubio Hurtado</span>
        </div>

        {/* CTAs / Redes */}
        <div className="flex items-center gap-6">
          <a
            href={`https://instagram.com/${contactInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent-primary transition-colors group"
            aria-label="Instagram"
          >
            <InstagramIcon className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent-primary transition-colors group"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-bg-base/20 text-center text-sm opacity-60">
        &copy; {new Date().getFullYear()} Nela. Todos los derechos reservados.
      </div>
    </footer>
  );
}

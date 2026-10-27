"use client";

import Image from "next/image";
import { FigmaCanvas } from "./FigmaCanvas";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg-base">
      <div className="flex min-h-32 items-center justify-center bg-terracotta px-5 py-8 text-center font-caveat text-2xl font-bold text-white min-[1280px]:hidden">
        NELAARTE ©2026
      </div>
      <div className="hidden min-[1280px]:block">
      <FigmaCanvas width={1440} height={512}>
        <div className="absolute inset-0 bg-terracotta" />
        <Image
          src="/imagenes/figma/footer/banner.png"
          alt=""
          width={710}
          height={455}
          className="absolute object-cover"
          style={{ left: 0, top: 67, width: 710, height: 455 }}
        />
        <Image
          src="/imagenes/figma/footer/banner.png"
          alt=""
          width={710}
          height={455}
          className="absolute object-cover"
          style={{ left: 730, top: 66, width: 710, height: 455, transform: "scaleX(-1)" }}
        />
        {/*<p
          className="absolute text-center font-caveat text-[36px] leading-normal text-paper"
          style={{ left: 529, top: 121, width: 375 }}
        >
          ¡Conectemos ve!
        </p>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="absolute"
          style={{ left: 602, top: 184, width: 105, height: 101 }}
        >
          <Image
            src="/imagenes/figma/footer/image72.png"
            alt=""
            width={105}
            height={101}
            className="h-full w-full object-cover"
          />
        </a>
        <a
          href={`https://instagram.com/${contactInfo.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="absolute"
          style={{ left: 721, top: 199, width: 67, height: 71 }}
        >
          <Image
            src="/imagenes/figma/footer/image73.png"
            alt=""
            width={67}
            height={71}
            className="h-full w-full object-cover"
          />
        </a>*/}
        <p
          className="absolute text-center font-caveat text-[30px] font-bold leading-normal text-white"
          style={{ left: 665, top: 200, width: 73 }}
        >
          NELAARTE<br />©2026
        </p>
      </FigmaCanvas>
      </div>
    </footer>
  );
}

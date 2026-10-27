"use client";

import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";
import { contactInfo } from "@/lib/data";
import { InstagramIcon, WhatsAppIcon } from "../ui/icons";

const img = (name: string) => `/imagenes/figma/hero-${name}.png`;

export function Hero() {
  return (
    <section id="sobre-mi" className="bg-bg-base relative">
      <div className="mx-auto max-w-[430px] px-3 pb-8 pt-20 min-[1280px]:hidden">
        <div className="relative mx-auto aspect-[0.73/1] w-full">
          <Image
            src={img("carta-fondo")}
            alt=""
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 24px), 430px"
            className="pointer-events-none object-fill"
          />
          <div className="absolute inset-x-[17%] bottom-[12%] top-[11%] flex flex-col items-center text-center text-forest-muted">
            <div className="relative h-[30%] w-full shrink-0 overflow-hidden rounded-lg shadow-md">
              <Image
                src={img("imageHer2")}
                alt="Nela, artista visual"
                fill
                sizes="(max-width: 640px) 66vw, 284px"
                className="object-cover object-[center_38%]"
              />
            </div>
            <div className="mt-2 leading-none">
              <p className="font-caveat text-[clamp(15px,4.5vw,20px)]">¡Hola! Soy</p>
              <h1 className="font-caveat text-[clamp(36px,10vw,48px)] font-bold">Nela</h1>
              <p className="font-caveat text-[clamp(16px,4.5vw,21px)] font-bold">Artista visual</p>
            </div>
            <dl className="mt-1 flex w-full flex-col rounded-lg bg-bg-base/80 px-1 py-1 font-itim text-[clamp(10px,2.9vw,13px)] leading-tight">
              <div className="flex justify-center gap-1"><dt className="font-bold">Ubicada en:</dt><dd>{contactInfo.availability}</dd></div>
              <div className="flex justify-center gap-1"><dt className="font-bold">Estudios:</dt><dd>Cine · Género</dd></div>
              <div className="flex justify-center gap-1"><dt className="font-bold">Trayectoria:</dt><dd>+{contactInfo.experienceYears} años</dd></div>
            </dl>
            <p className="mt-1 w-[130%] font-caveat text-[clamp(12px,3.5vw,16px)] font-bold leading-tight text-terracotta">
              Dirección de arte · Diseño de producción · Styling
            </p>
            <div className="mt-auto flex items-center justify-center gap-3 pb-1">
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Nela"
                className="flex size-9 items-center justify-center rounded-full bg-terracotta text-paper transition-transform hover:scale-110"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Nela por WhatsApp"
                className="flex size-9 items-center justify-center rounded-full bg-terracotta text-paper transition-transform hover:scale-110"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden min-[1280px]:block">
      <FigmaCanvas width={1920} height={1365}>
        {/* Foto real + marco decorativo */}
        <div id="marco_decorativo" className="absolute rounded-lg overflow-hidden" style={{ left: 1012, top: 253, width: 733, height: 988 }}>
          <Image src={img("carta-fondo")} alt="Nela en set de rodaje" fill className="object-cover" sizes="733px" />
        </div>
        <div className="absolute pointer-events-none  " style={{ left: 1152, top: 385, width: 450, height: 400 }}>
          <Image src={img("imageHer2")} alt="" fill className="object-cover rounded-4xl" sizes="450px" />
        </div>

        {/* Datos de bio, sobre la foto */}
        <p className="absolute font-caveat font-normal text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1172, top: 791 }}>Ubicada en:</p>
        <p className="absolute font-caveat font-bold text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1315, top: 791 }}>{contactInfo.availability}</p>
        <p className="absolute font-caveat font-normal text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1169, top: 845 }}>Estudios:</p>
        <p className="absolute font-caveat font-bold text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1172, top: 888 }}>Profesional en Cine</p>
        <p className="absolute font-caveat font-bold text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1169, top: 939 }}>Esp. estudios de genero</p>
        <p className="absolute font-caveat font-bold text-[32px] text-forest-muted text-center" style={{ left: 1149, top: 991, width: 463 }}>at: universidad autonoma de occidente</p>
        <p className="absolute font-caveat font-normal text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1165, top: 1045 }}>Trayectoria:</p>
        <p className="absolute font-caveat font-bold text-[32px] text-forest-muted whitespace-nowrap" style={{ left: 1307, top: 1045 }}>+{contactInfo.experienceYears} años en el negocio</p>

        {/* Título */}
        <p className="absolute font-caveat font-normal text-forest-muted whitespace-nowrap" style={{ left: 163, top: 292, fontSize: 107 }}>¡Hola! mi nombre es</p>
        <p className="absolute font-caveat font-bold text-forest-muted whitespace-nowrap" style={{ left: 324, top: 419, fontSize: 160 }}>Nela</p>
        <p className="absolute font-caveat font-bold text-forest-muted whitespace-nowrap" style={{ left: 368, top: 643, fontSize: 40 }}>Artista visual</p>
        <p className="absolute font-caveat font-bold text-forest-muted whitespace-nowrap" style={{ left: 345, top: 956, fontSize: 48 }}>Roles actuales</p>

        {/* Decoraciones estrella/mariposa/flor alrededor del título */}
        <Image src={img("estrella")} alt="" width={148} height={144} className="absolute pointer-events-none select-none" style={{ left: 748, top: 411 }} />
        <Image src={img("estrella")} alt="" width={148} height={144} className="absolute pointer-events-none select-none" style={{ left: 157, top: 419 }} />
        <Image src={img("estrella")} alt="" width={52} height={52} className="absolute pointer-events-none select-none" style={{ left: 135, top: 304, transform: "rotate(-36.31deg)" }} />
        <Image src={img("estrella")} alt="" width={52} height={52} className="absolute pointer-events-none select-none" style={{ left: 189, top: 264, transform: "rotate(-9.65deg)" }} />
        <Image src={img("estrella")} alt="" width={52} height={52} className="absolute pointer-events-none select-none" style={{ left: 240, top: 257, transform: "rotate(-9.65deg)" }} />
        <Image src={img("image16")} alt="" width={163} height={160} className="absolute pointer-events-none select-none" style={{ left: 621, top: 199 }} />
        <Image src={img("image17")} alt="" width={69} height={68} className="absolute pointer-events-none select-none" style={{ left: 864, top: 253 }} />
        <Image src={img("image21")} alt="" width={93} height={109} className="absolute pointer-events-none select-none" style={{ left: 767, top: 681 }} />
        <Image src={img("image22")} alt="" width={189} height={129} className="absolute pointer-events-none select-none" style={{ left: 285, top: 733 }} />
        <Image src={img("image23")} alt="" width={195} height={144} className="absolute pointer-events-none select-none" style={{ left: 541, top: 668 }} />
        <Image src={img("image25")} alt="" width={83} height={83} className="absolute pointer-events-none select-none" style={{ left: 191, top: 627 }} />
        <Image src={img("image28")} alt="" width={160} height={168} className="absolute pointer-events-none select-none" style={{ left: 607, top: 496, transform: "rotate(20.48deg)" }} />

        {/* Banner "Roles actuales" */}
        <div className="absolute overflow-hidden rounded" style={{ left: 62, top: 1068, width: 729, height: 169 }}>
          <Image src="/imagenes/papel_btn.png" alt="" fill className="object-cover" sizes="599px" />
        </div>
        <p className="absolute font-caveat font-bold text-[32px] text-terracotta whitespace-nowrap" style={{ left: 171, top: 1132 }}>Dirección de arte</p>
        <p className="absolute font-caveat font-bold text-[32px] text-terracotta whitespace-nowrap" style={{ left: 365, top: 1132 }}>| Diseño de producción |</p>
        <p className="absolute font-caveat font-bold text-[32px] text-terracotta whitespace-nowrap" style={{ left: 636, top: 1133 }}>Styling</p>
        <Image src={img("image26")} alt="" width={149} height={160} className="absolute pointer-events-none select-none" style={{ left: 136, top: 956 }} />
        <Image src={img("image31")} alt="" width={331} height={397} className="absolute pointer-events-none select-none" style={{ left: 591, top: 901 }} />
      </FigmaCanvas>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";
import { contactInfo } from "@/lib/data";

const img = (name: string) => `/imagenes/figma/hero-${name}.png`;

export function Hero() {
  return (
    <section id="sobre-mi" className="bg-bg-base relative">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-5 pb-10 pt-20 min-[1280px]:hidden">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
          <Image src={img("carta-fondo")} alt="Nela en set de rodaje" fill className="object-cover" sizes="(max-width: 640px) 100vw, 576px" priority />
          <Image src={img("imageHer2")} alt="" fill className="pointer-events-none object-contain p-8" sizes="(max-width: 640px) 100vw, 576px" />
        </div>
        <div className="text-center">
          <p className="font-caveat text-3xl text-forest-muted">¡Hola! mi nombre es</p>
          <h1 className="font-caveat text-7xl font-bold leading-none text-forest-muted">Nela</h1>
          <p className="mt-2 font-caveat text-3xl font-bold text-forest-muted">Artista visual</p>
        </div>
        <dl className="grid grid-cols-2 gap-3 rounded-xl bg-cream-card p-4 font-itim text-forest-muted">
          <dt>Ubicada en:</dt><dd className="font-bold">{contactInfo.availability}</dd>
          <dt>Estudios:</dt><dd className="font-bold">Profesional en Cine</dd>
          <dt>Especialidad:</dt><dd className="font-bold">Estudios de género</dd>
          <dt>Trayectoria:</dt><dd className="font-bold">+{contactInfo.experienceYears} años</dd>
        </dl>
        <div className="rounded-xl bg-[url('/imagenes/papel_btn.png')] bg-cover px-4 py-5 text-center font-caveat text-2xl font-bold text-terracotta">
          <p className="mb-2">Roles actuales</p>
          <p>Dirección de arte · Diseño de producción · Styling</p>
        </div>
      </div>
      <div className="hidden min-[1280px]:block">
      <FigmaCanvas width={1920} height={1365}>
        {/* Foto real + marco decorativo */}
        <div className="absolute rounded-lg overflow-hidden" style={{ left: 1012, top: 253, width: 733, height: 988 }}>
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

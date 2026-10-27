"use client";

import { useState,FormEvent } from "react";
import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";
import { InstagramIcon, WhatsAppIcon } from "../ui/icons";
import { contactInfo } from "@/lib/data";
const img = (name: string) => `/imagenes/figma/cta-${name}.png`;
const img2 = (name: string) => `/imagenes/figma/cta/${name}.png`;


export function ContactBlock() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // El "/ajax/" es crítico para evitar la redirección por defecto de FormSubmit
    const endpoint = 'https://formsubmit.co/ajax/daniela.hurtadoa07@gmail.com';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };


  return (
    <section id="contacto" className="bg-[#fcf8f4] relative overflow-hidden">
      <div className="mx-auto max-w-6xl space-y-6 px-5 py-12 min-[1280px]:hidden">
        <div className="rounded-xl bg-cream-card p-6 text-center text-forest-muted shadow-md">
          <p className="font-caveat text-3xl leading-tight">¿Te gustaría trabajar conmigo?</p>
          <p className="mt-3 font-caveat text-3xl leading-tight">Déjame un mensaje contándome la visión de tu idea</p>
        </div>
        <div className="rounded-xl bg-terracotta p-5 text-center text-paper shadow-md">
          <p className="mb-4 font-caveat text-3xl">¡Conectémonos!</p>
          <div className="flex justify-center gap-4">
            <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-14 items-center justify-center rounded-full bg-paper text-terracotta">
              <InstagramIcon className="size-7" />
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-14 items-center justify-center rounded-full bg-paper text-terracotta">
              <WhatsAppIcon className="size-7" />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            value={nombre}
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre *"
            className="min-h-14 w-full border-b-4 border-terracotta bg-cream-card px-4 font-itim text-terracotta outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          />
          <input
            type="email"
            required
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            className="min-h-14 w-full border-b-4 border-terracotta bg-cream-card px-4 font-itim text-terracotta outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          />
          <textarea
            required
            value={mensaje}
            name="mensaje"
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Tu idea va aquí (mensaje)"
            rows={5}
            className="w-full resize-y border-b-4 border-terracotta bg-cream-card px-4 py-3 font-itim text-terracotta outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="min-h-14 w-full rounded-lg bg-terracotta px-4 font-caveat text-xl font-bold text-paper transition-colors hover:bg-terracotta-hover disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : "¡Hagamos que esa visión cobre vida!"}
          </button>
          {status === "success" && <p role="status" className="font-itim text-forest-muted">¡Mensaje enviado! Gracias por escribirme.</p>}
          {status === "error" && <p role="alert" className="font-itim text-terracotta">No se pudo enviar el mensaje. Inténtalo de nuevo.</p>}
        </form>
      </div>
      <div className="hidden min-[1280px]:block">
      <FigmaCanvas width={1920} height={1365}>
        {/* Tarjeta introductoria */}
        <div
          className="absolute flex flex-col gap-[64px] items-center justify-center text-center bg-cream-card text-forest-muted p-[21px]"
          style={{ left: 215, top: 345, width: 668, height: 285, boxShadow: "0px 4px 2px rgba(0,0,0,0.25)" }}
        >
          <p className="font-caveat text-[48px] leading-tight">¿Te gustaría trabajar conmigo?</p>
          <p className="font-caveat text-[48px] leading-tight">Dejame un mensaje contandome la visión de tu idea</p>
        </div>
        <div className="absolute overflow-hidden pointer-events-none" style={{ left: 568, top: 265, width: 67, height: 76 }}>
          <Image src={img("pushpin")} alt="" width={307} height={304} className="absolute max-w-none" style={{ left: "-43.12%", top: "-150.4%", width: "458.72%", height: "400%" }} />
        </div>
        <div className="absolute overflow-hidden pointer-events-none" style={{ left: 564, top: 716, width: 67, height: 76 }}>
          <Image src={img("pushpin")} alt="" width={307} height={304} className="absolute max-w-none" style={{ left: "-148.07%", top: "-42.48%", width: "458.72%", height: "400%" }} />
        </div>

        {/* Panel Conectemonos */}
        <div
          className="absolute flex flex-col gap-[32px] items-center justify-center bg-terracotta rounded-lg px-[32px] py-[21px]"
          style={{ left: 288, top: 772, width: 537, height: 197, boxShadow: "0px 4px 2px rgba(0,0,0,0.25)" }}
        >
          <p className="font-caveat text-[48px] text-paper text-center">¡Conectemonos!</p>
          <div className="flex items-center justify-center gap-[21px]">
            <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center rounded-full bg-paper text-terracotta hover:scale-110 transition-transform" style={{ width: 64, height: 64 }}>
              <InstagramIcon className="size-8" />
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center rounded-full bg-paper text-terracotta hover:scale-110 transition-transform" style={{ width: 64, height: 64 }}>
              <WhatsAppIcon className="size-8" />
            </a>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={nombre}
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre *"
            className="absolute bg-cream-card border-b-4 border-terracotta font-itim text-[21px] text-terracotta text-center placeholder:text-terracotta/70 px-[21px] outline-none"
            style={{ left: 1035, top: 351, width: 660, height: 76 }}
          />
          <input
            type="email"
            required
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            className="absolute bg-cream-card border-b-4 border-terracotta font-itim text-[21px] text-terracotta text-center placeholder:text-terracotta/70 px-[21px] outline-none"
            style={{ left: 1035, top: 491, width: 660, height: 76 }}
          />
          <textarea
            required
            value={mensaje}
            name="mensaje"
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Tu idea va aquí (mensaje)"
            className="absolute bg-cream-card border-b-4 border-terracotta font-itim text-[21px] text-terracotta text-center placeholder:text-terracotta/70 px-[21px] pt-[21px] outline-none resize-none"
            style={{ left: 1035, top: 631, width: 660, height: 180 }}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="absolute bg-terracotta font-caveat font-bold text-paper hover:bg-terracotta-hover transition-colors"
            style={{ left: 1035, top: 885, width: 660, height: 84, fontSize: 32 }}
          >
            {status === 'submitting' ? 'Enviando...' : '¡Hagamos que esa visión cobra vida!'}
          </button>
          {status === "success" && <p className="absolute left-[1035px] top-[981px] w-[660px] font-itim text-[18px] text-forest-muted" role="status">¡Mensaje enviado! Gracias por escribirme.</p>}
          {status === "error" && <p className="absolute left-[1035px] top-[981px] w-[660px] font-itim text-[18px] text-terracotta" role="alert">No se pudo enviar el mensaje. Inténtalo de nuevo.</p>}
        </form>

        {/* Cintas washi (recorte tipo sprite del mismo asset) */}
        {[
          { left: 1647, top: 380, size: 85, rotate: -50.56 },
          { left: 1640, top: 536, size: 85, rotate: -50.56 },
          { left: 997, top: 600, size: 85, rotate: -50.56 },
        ].map((t, i) => (
          <div key={`washi-a-${i}`} className="absolute overflow-hidden pointer-events-none" style={{ left: t.left, top: t.top, width: t.size, height: t.size * 1.09, transform: `rotate(${t.rotate}deg)` }}>
            <Image src={img("washi-tape")} alt="" width={267} height={231} className="absolute max-w-none" style={{ left: "-180.57%", top: "-314.33%", width: "311.39%", height: "894.83%" }} />
          </div>
        ))}
        {[
          { left: 984, top: 304, rotate: -50.66 },
          { left: 980, top: 444, rotate: -50.66 },
          { left: 1629, top: 753, rotate: 129.34 },
        ].map((t, i) => (
          <div key={`washi-b-${i}`} className="absolute overflow-hidden pointer-events-none" style={{ left: t.left, top: t.top, width: 103, height: 113, transform: `rotate(${t.rotate}deg)` }}>
            <Image src={img("washi-tape")} alt="" width={247} height={220} className="absolute max-w-none" style={{ left: "-112%", top: "-37.93%", width: "240.5%", height: "894.83%" }} />
          </div>
        ))}

        {/* Collage decorativo */}
        <Image src={img("image38")} alt="" width={165} height={192} className="absolute pointer-events-none select-none" style={{ left: 271, top: 669 }} />
        <Image src={img("image47")} alt="" width={157} height={169} className="absolute pointer-events-none select-none" style={{ left: 1532, top: 211 }} />
        <Image src={img("image48")} alt="" width={164} height={175} className="absolute pointer-events-none select-none" style={{ left: 816, top: 549 }} />
        <Image src={img("image49")} alt="" width={169} height={117} className="absolute pointer-events-none select-none" style={{ left: 259, top: 1021 }} />
        <Image src={img("image50")} alt="" width={232} height={472} className="absolute pointer-events-none select-none" style={{ left: 1373, top: 960, transform: "rotate(75.45deg)" }} />
        <Image src={img2("estrella")} alt="" width={103} height={100} className="absolute pointer-events-none select-none" style={{ left: 708, top: 980 }} />
        <Image src={img2("estrella")} alt="" width={103} height={100} className="absolute pointer-events-none select-none" style={{ left: 833, top: 857 }} />
        <Image src={img2("estrella")} alt="" width={103} height={100} className="absolute pointer-events-none select-none" style={{ left: 816, top: 961 }} />
        <Image src={img("image40")} alt="" width={217} height={89} className="absolute pointer-events-none select-none" style={{ left: 1180, top: 548 }} />
      </FigmaCanvas>
      </div>
    </section>
  );
}

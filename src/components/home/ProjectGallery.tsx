"use client";

import { useState } from "react";
import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const projects = [
  { title: "Seguimos siendo", body: "Mi experiencia principal durante este periodo ha sido “Seguimos siendo”, una serie desarrollada en colaboración con la Universidad Autónoma de Occidente entre julio y la primera semana de agosto de 2026." , type: "Serie", date: "Agosto 2026" },
  { title: "Amor en los tiempos del fental", body: "Mi experiencia principal durante este periodo ha sido “Seguimos siendo”, una serie desarrollada en colaboración con la Universidad Autónoma de Occidente entre julio y la primera semana de agosto de 2026.", type: "cortometraje de ficción", date: "Marzo 2026"  },
  { title: "Cosas raras", body: "Una exploración visual construida desde la dirección de arte, los personajes y los espacios de la historia.", type: "cortometraje de ficción", date: "Julio 2025" },
  { title: "Espiritu", body: "Montaje y ambientación para una producción audiovisual de atmósfera vibrante.", type: "Montaje de fiesta", date: "Julio 2025"},
  { title: "Senthia", body: "Montaje y ambientación para una producción audiovisual de atmósfera vibrante.", type: "Montaje de video comercial", date: "septiembre 2026" },
];

const projectImage = (name: string) => `/imagenes/figma/proyectos/${name}`;

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(1);
  const project = projects[selectedProject];

  return (
    <section id="proyectos" className="relative overflow-hidden bg-bg-base">
      <FigmaCanvas width={1440} height={1024}>
        <h2 className="absolute left-[110px] top-[201px] font-itim text-[60px] leading-none text-forest-muted">
          Proyectos
        </h2>
        <p className="absolute left-[105px] top-[278px] font-caveat text-[80px] leading-none text-forest-muted">
          Destacados
        </p>

        {projects.map((item, index) => (
          <button
            key={`${item.title}-${index}`}
            type="button"
            onClick={() => setSelectedProject(index)}
            aria-pressed={selectedProject === index}
            className={`absolute left-[66px] flex h-[54px] w-[426px] items-center gap-[14px] px-[26px] font-caveat text-[25px] text-terracotta transition-opacity ${selectedProject === index ? "opacity-100" : "opacity-60"}`}
            style={{ top: 485 + index * 69 }}
          >
            <Image src={projectImage("papel-lista.png")} alt="" fill className="h-full w-full object-cover object-center" />
            <span className="relative z-10 font-itim text-[18px]">{String(index + 1).padStart(2, "0")}.</span>
            <span className="relative z-10 whitespace-nowrap">“{item.title}”</span>
          </button>
        ))}

        <article className="absolute left-[547px] top-[178px] h-[749px] w-[797px] bg-cream-card shadow-[0_8px_6px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-[-1px] h-[360px] w-[531px] bg-[#d9d9d9]">
            <span className="absolute inset-0 flex items-center justify-center font-caveat text-[42px] text-black">Imagen de apoyo</span>
          </div>
          <div className="absolute right-0 top-[-1px] h-[180px] w-[266px] bg-[#929292]">
            <span className="absolute inset-0 flex items-center justify-center text-center font-caveat text-[42px] text-black">Imagen de<br />apoyo</span>
          </div>
          <div className="absolute right-0 top-[179px] h-[180px] w-[266px] bg-[#707070]">
            <span className="absolute inset-0 flex items-center justify-center text-center font-caveat text-[42px] text-white">Imagen de<br />apoyo</span>
          </div>

          <h3 className="absolute left-[46px] top-[397px] w-[520px] font-caveat text-[50px] leading-tight text-forest-muted">
            {project.title}
          </h3>
          <p className="absolute left-[46px] top-[479px] w-[510px] font-itim text-[16px] leading-normal text-forest-muted">
            En este proyecto asumí el rol de directora de arte, trabajando en la construcción visual de los personajes y de los espacios destinados a las entrevistas.
          </p>
          <p className="absolute left-[46px] top-[563px] w-[504px] font-itim text-[16px] leading-normal text-forest-muted">
            {project.body}
          </p>
          <a
            href="https://www.youtube.com/watch?v=WwQkLnLmrBw&time_continue=0&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Freadymag.website%2F&embeds_referring_origin=https%3A%2F%2Freadymag.website"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[46px] top-[674px] flex h-[36px] w-[473px] items-center justify-center rounded-lg bg-terracotta font-caveat text-[20px] font-bold text-paper"
          >
            VER CLIP
          </a>
          <Image src={projectImage("sello.png")} alt="Sello de dirección de arte" width={131} height={139} className="absolute left-[609px] top-[410px]" />
          <p className="absolute left-[632px] top-[563px] w-[90px] text-center font-itim text-[10px] leading-normal text-terracotta">
            {project.type}<br />{project.date}
          </p>
          <Image src={projectImage("image64.png")} alt="" width={63} height={123} className="absolute left-[512px] top-[604px]" />
          <Image src={projectImage("image65.png")} alt="" width={106} height={87} className="absolute left-[37px] top-[631px]" />
        </article>
      </FigmaCanvas>
    </section>
  );
}

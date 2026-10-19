"use client";

import { useState } from "react";
import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const projectPhotography = (name: string) => `/projects/${name}.webp`;
const projectSeal = (name: string) => `/projects/${name}.png`;

const projects = [
  { title: "Seguimos siendo", body: "Mi experiencia principal durante este periodo ha sido “Seguimos siendo”, una serie desarrollada en colaboración con la Universidad Autónoma de Occidente entre julio y la primera semana de agosto de 2026." , type: "Serie", date: "Agosto 2026", img1: projectPhotography("seguimos-siendo/1"), img2: projectPhotography("seguimos-siendo/2"), img3: projectPhotography("seguimos-siendo/3"), seal: projectSeal("direccion") },
  { title: "Amor en los tiempos del fental", body: "En este proyecto estuve a cargo de la dirección de arte, desarrollando la propuesta estética y visual de la historia. Trabajé en el diseño de producción, vestuario y maquillaje, desde la construcción de las ideas en preproducción hasta su ejecución durante el rodaje.", type: "cortometraje de ficción", date: "Marzo 2026", img1: projectPhotography("atf/1"), img2: projectPhotography("atf/2"), img3: projectPhotography("atf/3"), seal: projectSeal("direccion") },
  { title: "Cosas raras", body: "Como productora de arte, me encargué de la administración del presupuesto del departamento durante el rodaje, la compra de utilería y materiales necesarios para las escenas, y la organización e inventario de los elementos de arte.",  type: "cortometraje de ficción", date: "Julio 2025", img1: projectPhotography("cosas-raras/1"), img2: projectPhotography("cosas-raras/2"), img3: projectPhotography("cosas-raras/3"), seal: projectSeal("asistente") },
  { title: "Espiritu", body: "Participé como asistente de arte en el montaje de esta fiesta electrónica, colaborando en la creación de elementos escenográficos que transformarían el espacio. Entre ellos, desarrollamos muros y un túnel mediante trabajos de ornamentación, buscando construir una experiencia visual para los asistentes.", type: "Montaje de fiesta", date: "Julio 2025", img1: projectPhotography("espiritu/1"), img2: projectPhotography("espiritu/2"), img3: projectPhotography("espiritu/3"), seal: projectSeal("asistente") },
  { title: "Senthia", body: "En este comercial trabajé como asistente de arte en la ambientación y construcción de diferentes espacios, buscando que cada escenario transmitiera las sensaciones y la atmósfera que requería la propuesta creativa.", type: "Montaje de video comercial", date: "septiembre 2026", img1: projectPhotography("senthia/video.MOV"), img2: projectPhotography("senthia/2"), img3: projectPhotography("senthia/3"), seal: projectSeal("asistente") },
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
          <div className="absolute left-0 top-[-1px] h-[360px] w-[531px]">
            <Image src={project.img1} alt="" width={531} height={360} className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute right-0 top-[-1px] h-[180px] w-[266px] ">
             <Image src={project.img2} alt="" width={531} height={360} className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute right-0 top-[179px] h-[180px] w-[266px] ">
              <Image src={project.img3} alt="" width={531} height={360} className="h-full w-full object-cover object-center" />
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
          <Image src={project.seal} alt="Sello de dirección de arte" width={131} height={139} className="absolute left-[609px] top-[410px]" />
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

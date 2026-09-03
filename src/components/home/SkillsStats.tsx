"use client";

import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";
import { contactInfo, projects } from "@/lib/data";

const img = (name: string) => `/imagenes/figma/skills-${name}.png`;

const skills = [
  {
    title: "Adaptable",
    desc: "Soy una persona que se adapta facil; logro seguir el ritmo frenetico del set con fácilidad",
    style: { left: 72, top: 628, width: 480 },
  },
  {
    title: "Trabajo en equipo",
    desc: "Entiendo que el cine solo se logra mediante la colabaricón, lo que me convierte en una jugadora de equipo",
    style: { left: 55, top: 1025, width: 559 },
  },
  {
    title: "Calma",
    desc: "Funciono muy bien bajo presión; de hecho crep que ahí es donde fluye mejor la creatividad",
    style: { left: 1404, top: 655, width: 437 },
  },
  {
    title: "Visionaria",
    desc: "Estoy en busca de proyectos que me reten y pueda construir la atmosfora visual perfecta",
    style: { left: 1360, top: 989, width: 481 },
  },
];

export function SkillsStats() {
  const projectTypes = new Set(projects.map((p) => p.category)).size;

  const stats = [
    { value: `+${projects.length}`, label: "Proyectos realizados", left: 327, valueLeft: 424, labelLeft: 375 },
    { value: `+${contactInfo.experienceYears}`, label: "Años de experiencia", left: 820, valueLeft: 887, labelLeft: 899 },
    { value: `+${projectTypes}`, label: "Tipos de proyecto", left: 1279, valueLeft: 1361, labelLeft: 1373 },
  ];

  return (
    <section className="bg-bg-base relative overflow-hidden">
      <FigmaCanvas width={1920} height={1365}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className="absolute" style={{ left: s.left, top: 239, width: 295, height: 285 }}>
              <Image src={img("paper-card")} alt="" fill className="object-contain" sizes="295px" />
            </div>
            <p className="absolute font-caveat font-bold text-forest-muted whitespace-nowrap" style={{ left: s.valueLeft, top: 301, fontSize: 64 }}>{s.value}</p>
            <p className="absolute font-caveat font-bold text-forest-muted whitespace-nowrap" style={{ left: s.labelLeft, top: 405, fontSize: 32 }}>{s.label}</p>
          </div>
        ))}

        {skills.map((s) => (
          <div
            key={s.title}
            className="absolute flex items-center gap-4 p-4 bg-cream-card text-forest-muted"
            style={{ ...s.style, boxShadow: "0px 4px 2px rgba(0,0,0,0.25)" }}
          >
            <p className="font-caveat font-bold text-[32px] whitespace-nowrap shrink-0">{s.title}</p>
            <p className="font-itim text-[21px]" style={{ width: 305 }}>{s.desc}</p>
          </div>
        ))}

        <Image src={img("image16")} alt="" width={163} height={160} className="absolute pointer-events-none select-none" style={{ left: 1705, top: 865 }} />
        <Image src={img("image32")} alt="" width={233} height={185} className="absolute pointer-events-none select-none" style={{ left: 621, top: 431 }} />
        <Image src={img("image34")} alt="" width={336} height={339} className="absolute pointer-events-none select-none" style={{ left: 1044, top: 159 }} />
        <Image src={img("image35")} alt="" width={228} height={244} className="absolute pointer-events-none select-none" style={{ left: 149, top: 328 }} />
        <Image src={img("image36")} alt="" width={247} height={265} className="absolute pointer-events-none select-none" style={{ left: 411, top: 777 }} />
      </FigmaCanvas>
    </section>
  );
}

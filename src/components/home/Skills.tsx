"use client";

import { useState } from "react";
import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const skillImage = (name: string) => `/imagenes/figma/habilidades/${name}`;

const cards = [
  {
    id: "#01",
    title: "De la idea a la realidad",
    description: "Aprendí a transformar conceptos e ideas en propuestas visuales, entendiendo cómo cada elemento, desde la utilería hasta el vestuario y la ambientación, aporta a la construcción de una historia.",
    shape: "card_shape0.jpg",
    tone: "terracotta",
  },
  {
    id: "#02",
    title: "Organización y gestión de recursos",
    description: "Fortalecí mi capacidad para planear, organizar materiales y administrar presupuestos, buscando alternativas creativas que permitieran aprovechar los recursos sin perder la intención artística.",
    shape: "card_shape1.jpg",
    tone: "cream",
  },
  {
    id: "#03",
    title: "Adaptación y creatividad",
    description: "Entendí que no todo sale como se planea. Aprendí a responder a los imprevistos, encontrar soluciones y adaptar las propuestas a las necesidades de cada proyecto.",
    shape: "card_shape2.jpg",
    tone: "terracotta",
  },
  {
    id: "#04",
    title: "Trabajo en equipo",
    description: "Aprendí a comunicar mis ideas, escuchar otras perspectivas y trabajar de la mano con diferentes áreas de producción para construir propuestas que funcionaran tanto creativa como técnicamente.",
    shape: "card_shape3.jpg",
    tone: "cream",
  },
];

const cardPositions = [
  { left: 87, top: 338, height: 550 },
  { left: 401, top: 340, height: 548 },
  { left: 715, top: 342, height: 546 },
  { left: 1032, top: 340, height: 546 },
];

export function Skills() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="habilidades" className="relative overflow-hidden bg-bg-base">
      <FigmaCanvas width={1440} height={1024}>
        <h2 className="absolute left-[96px] top-[159px] whitespace-nowrap font-caveat text-[80px] font-normal leading-none text-forest-muted">
          Habilidades
        </h2>
        <p className="absolute left-[487px] top-[212px] h-[56px] w-[874px] font-itim text-[16px] leading-normal text-forest-muted">
          Durante mis prácticas en Auténtica descubrí que trabajar en arte va mucho más allá de tener buenas ideas. Aprendí a llevarlas a la realidad, a trabajar con los recursos disponibles y a adaptarme a los retos de cada producción. Fue una experiencia que me permitió desarrollar nuevas habilidades y entender mejor cómo funciona el trabajo creativo dentro de un equipo audiovisual.
        </p>

        {cards.map((card, index) => {
          const isActive = activeId === card.id;
          const isTerracotta = card.tone === "terracotta";
          const outerText = isTerracotta ? "text-terracotta" : " text-paper";
          const innerTone = isTerracotta ? "bg-cream-card text-forest-muted" : "bg-terracotta text-paper";

          return (
            <button
              key={card.id}
              type="button"
              aria-pressed={isActive}
              aria-expanded={isActive}
              aria-controls={`skill-description-${card.id.slice(1)}`}
              aria-label={`${card.id} ${card.title}${isActive ? ", mostrar cara frontal" : ", mostrar descripción"}`}
              onClick={() => setActiveId((currentId) => currentId === card.id ? null : card.id)}
              className="absolute w-[303px] cursor-pointer border-0 bg-transparent p-0 text-left [perspective:1000px] focus-visible:outline-none focus-visible:ring-4"
              style={{ left: cardPositions[index].left, top: cardPositions[index].top, height: cardPositions[index].height }}
            >
              <span
                className={`relative block h-full w-full rounded-[12px] transition-transform duration-700 [transform-style:preserve-3d] ${isActive ? "[transform:rotateY(180deg)]" : ""}`}
              >
                <span
                  aria-hidden={isActive}
                  className="absolute inset-0 overflow-hidden rounded-[12px] [backface-visibility:hidden]"
                >
                  <Image
                    src={skillImage(card.shape)}
                    alt=""
                    fill
                    sizes="303px"
                    className="object-fill"
                  />
                  <span className={`absolute left-[28px] top-[38px] font-caveat text-[25px] leading-none text-terracotta`}>
                    {card.id}
                  </span>
                  <span className={`absolute left-[24px] top-[70%] flex h-[18%] w-[255px] -translate-y-1/2 items-center justify-center text-center font-itim text-[20px] leading-normal text-terracotta`}>
                    {card.title}
                  </span>
                  <span className={`absolute bottom-[32px] right-[22px] font-caveat text-[25px] leading-none text-terracotta`}>
                    {card.id}
                  </span>
                </span>

                <span
                  aria-hidden={!isActive}
                  className="absolute inset-0 overflow-hidden rounded-[12px] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                >
                  <Image
                    src={skillImage(isTerracotta ? "card-shape.svg" : "card-shape-terracotta.svg")}
                    alt=""
                    fill
                    sizes="303px"
                    className="object-fill"
                  />
                  <span className={`absolute left-[28px] top-[38px] font-caveat text-[25px] leading-none ${outerText}`}>
                    {card.id}
                  </span>
                  <span
                    id={`skill-description-${card.id.slice(1)}`}
                    className={`absolute left-5 top-1/2 flex h-[242px] w-[263px] -translate-y-1/2 items-center justify-center rounded-[8px] px-4 py-5 text-center font-itim text-[16px] leading-snug shadow-[0_4px_8px_rgba(0,0,0,0.18)] ${innerTone}`}
                  >
                    {card.description}
                  </span>
                  <span className={`absolute bottom-[32px] right-[22px] font-caveat text-[25px] leading-none ${outerText}`}>
                    {card.id}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </FigmaCanvas>
    </section>
  );
}
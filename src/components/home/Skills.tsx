"use client";

import { useState } from "react";
import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const skillImage = (name: string) => `/imagenes/figma/habilidades/${name}`;

const cards = [
  {
    id: "#01",
    title: "Principal aprendizaje",
    description: "La dirección de arte necesita más que una buena idea: exige observación, preparación, gestión de recursos, comunicación y capacidad de adaptación en rodaje.",
    icon: "image74.png",
    tone: "cream",
  },
  {
    id: "#02",
    title: "Anticiparme a las necesidades de producción",
    description: "Coordinar vestuario, materiales y elementos de arte con anticipación me enseñó a prever alternativas cuando los recursos o las condiciones cambian.",
    icon: "image80.png",
    tone: "terracotta",
  },
  {
    id: "#03",
    title: "Responder a los cambios",
    description: "Resolver solicitudes en poco tiempo me enseñó a buscar materiales con rapidez y proponer alternativas sin perder de vista las necesidades visuales.",
    icon: "image13.png",
    tone: "cream",
  },
  {
    id: "#04",
    title: "Dinámica profesional de rodaje",
    description: "La práctica me enseñó a revisar cada detalle desde cámara: una propuesta debe funcionar tanto en el espacio como dentro del encuadre.",
    icon: "image77.png",
    tone: "terracotta",
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
          Durante mi proceso de práctica profesional en la productora audiovisual autentica, enfrenté retos significativos que me permitieron crecer como directora de arte. Estos desafíos abarcaron tanto el bla bla bla bla comobla bla bla bla y bla bla bla bla.
        </p>

        {cards.map((card, index) => {
          const isActive = activeId === card.id;
          const isTerracotta = card.tone === "terracotta";
          const outerTone = isTerracotta ? "bg-terracotta" : "bg-cream-card";
          const outerText = isTerracotta ? "text-paper" : "text-terracotta";
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
              className="absolute w-[303px] cursor-pointer border-0 bg-transparent p-0 text-left [perspective:1000px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest-muted"
              style={{ left: cardPositions[index].left, top: cardPositions[index].top, height: cardPositions[index].height }}
            >
              <span
                className={`relative block h-full w-full rounded-[12px] transition-transform duration-700 [transform-style:preserve-3d] ${isActive ? "[transform:rotateY(180deg)]" : ""}`}
              >
                <span
                  aria-hidden={isActive}
                  className={`absolute inset-0 rounded-[12px] [backface-visibility:hidden] ${outerTone}`}
                >
                  <span className={`absolute left-[28px] top-[38px] font-caveat text-[25px] leading-none ${outerText}`}>
                    {card.id}
                  </span>
                  <Image
                    src={skillImage(card.icon)}
                    alt=""
                    width={62}
                    height={60}
                    className="absolute right-[17px] top-[25px] h-[60px] w-[62px] object-contain"
                  />
                  <span className={`absolute left-[24px] top-1/2 flex h-[98px] w-[255px] -translate-y-1/2 items-center justify-center text-center font-itim text-[20px] leading-normal ${outerText}`}>
                    {card.title}
                  </span>
                  <Image
                    src={skillImage(card.icon)}
                    alt=""
                    width={62}
                    height={60}
                    className="absolute bottom-[12px] left-[17px] h-[60px] w-[62px] object-contain"
                  />
                  <span className={`absolute bottom-[32px] right-[22px] font-caveat text-[25px] leading-none ${outerText}`}>
                    {card.id}
                  </span>
                </span>

                <span
                  aria-hidden={!isActive}
                  className={`absolute inset-0 rounded-[12px] [backface-visibility:hidden] [transform:rotateY(180deg)] ${outerTone}`}
                >
                  <span className={`absolute left-[28px] top-[38px] font-caveat text-[25px] leading-none ${outerText}`}>
                    {card.id}
                  </span>
                  <Image
                    src={skillImage(card.icon)}
                    alt=""
                    width={62}
                    height={60}
                    className="absolute right-[17px] top-[25px] h-[60px] w-[62px] object-contain"
                  />
                  <span
                    id={`skill-description-${card.id.slice(1)}`}
                    className={`absolute left-5 top-1/2 flex h-[242px] w-[263px] -translate-y-1/2 items-center justify-center rounded-[8px] px-4 py-5 text-center font-itim text-[16px] leading-snug ${innerTone}`}
                  >
                    {card.description}
                  </span>
                  <Image
                    src={skillImage(card.icon)}
                    alt=""
                    width={62}
                    height={60}
                    className="absolute bottom-[12px] left-[17px] h-[60px] w-[62px] object-contain"
                  />
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
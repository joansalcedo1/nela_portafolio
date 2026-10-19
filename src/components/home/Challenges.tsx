"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const challengeImage = (name: string) => `/imagenes/figma/${name}`;

type Lesson = {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  left: number;
  tone: "cream" | "terracotta";
};

const lessons: Lesson[] = [
  {
    id: "#01",
    title: "Dinámica profesional de rodaje",
    text: "Uno de mis primeros retos fue adaptarme a una forma de trabajo diferente a la que conocía.\n\nMi experiencia previa venía principalmente de proyectos universitarios y montajes para eventos, por lo que durante la práctica tuve que desarrollar una mirada más atenta a lo que registra la cámara. Aprendí a usar el monitor como herramienta de trabajo y a revisar vestuario, escenografía, utilería y cada detalle del encuadre.",
    image: `/imagenes/figma/retos/foto-set.png`,
    imageAlt: "Equipo trabajando durante un rodaje",
    left: 87,
    tone: "cream",
  },
  {
    id: "#02",
    title: "Anticiparme a las necesidades de producción",
    text: "Aprendí a preparar con mayor anticipación cada jornada. Coordinar vestuario, materiales y elementos de arte me enseñó a contemplar distintas posibilidades antes de llegar al set.\n\nCuando la primera opción no estaba disponible o no funcionaba, empecé a trabajar con alternativas y prever cambios para organizar recursos y tomar decisiones con tiempo.",
    image: "/imagenes/figma/projects-photo-bichiyali.png",
    imageAlt: "Tablero de referencias y materiales de producción",
    left: 401,
    tone: "terracotta",
  },
  {
    id: "#03",
    title: "Responder a los cambios",
    text: "Durante las producciones surgían solicitudes y ajustes que debían resolverse en poco tiempo. Aprendí a buscar materiales, vestuario y elementos de arte con rapidez, y a encontrar alternativas cuando faltaban recursos.\n\nCon la experiencia empecé a pensar varios pasos adelante y evaluar opciones sin perder de vista las necesidades visuales de la producción.",
    image: "/imagenes/figma/practicas/foto-apoyo.png",
    imageAlt: "Equipo de rodaje trabajando en un set",
    left: 715,
    tone: "cream",
  },
  {
    id: "#04",
    title: "Principal aprendizaje",
    text: "La práctica me permitió entender que la dirección de arte no depende únicamente de una buena idea visual.\n\nTambién requiere observación, preparación, gestión de recursos, comunicación y capacidad para adaptarse a lo que ocurre durante un rodaje.",
    image: "/imagenes/figma/projects-photo-dynamo.png",
    imageAlt: "Espacio de producción preparado para un rodaje",
    left: 1032,
    tone: "terracotta",
  },
];

export function Challenges() {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeLesson = lessons[activeLessonIndex];

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % lessons.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + lessons.length) % lessons.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lessons.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveLessonIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="retos" className="relative overflow-hidden bg-bg-base">
      <FigmaCanvas width={1440} height={1024}>
        <h2 className="absolute left-[96px] top-[189px] whitespace-nowrap font-caveat text-[80px] font-normal leading-none text-forest-muted">
          Retos y aprendizajes
        </h2>
        <p className="absolute left-[671px] top-[221px] h-[69px] w-[671px] font-itim text-[16px] leading-normal text-forest-muted">
          Durante mi proceso de práctica profesional en la productora audiovisual autentica, enfrenté retos significativos que me permitieron crecer como directora de arte.
        </p>

        <article
          id="challenge-detail"
          role="tabpanel"
          aria-live="polite"
          aria-labelledby={`challenge-tab-${activeLesson.id.slice(1)}`}
          tabIndex={0}
          className={`absolute transition-colors duration-300 left-[87px] top-[359px] h-[275px] w-[945px] rounded-tl-xl px-[49px] py-[27px] shadow-[0_6px_19px_rgba(0,0,0,0.25)] ${activeLesson.tone === "terracotta" ? "bg-terracotta text-paper" : "bg-cream-card text-forest-muted"
            }`}
        >
          <h3 id="challenge-detail-title" className="font-caveat text-[28px] font-bold leading-tight">
            {activeLesson.title}
          </h3>
          <div className="mt-3 flex flex-col gap-3 font-itim text-[16px] leading-normal">
            {activeLesson.text.split("\n\n").map((paragraph, index) => (
              <p key={`${activeLesson.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>

        <div className={`absolute left-[1032px] top-[357px] h-[277px] w-[303px] rounded-tr-[20px] ${activeLesson.tone === "terracotta" ? "bg-terracotta" : "bg-cream-card"}`} />
        <Image
          src={activeLesson.image}
          alt={activeLesson.imageAlt}
          width={280}
          height={186}
          className="absolute left-[1032px] top-[400px] h-[186px] w-[280px] rounded-r-[10px] object-cover"
        />
        {/**IMAGENES CON POSICION ABSOLUTA */}
        <Image src={challengeImage("retos/colibri.png")} alt="" width={150} height={110} className="absolute left-[320px] bottom-[380px]" />
        <Image src={challengeImage("cta-image38.png")} alt="" width={110} height={110} className="absolute left-[620px] top-[290px]" />
        <Image src={challengeImage("hero-image16.png")} alt="" width={110} height={110} className="absolute right-[220px] top-[320px]" />
       
       
       
        <div role="tablist" aria-label="Retos y aprendizajes" className="pointer-events-none absolute inset-0">
          {lessons.map((lesson, index) => {
            const isActive = activeLessonIndex === index;
            const toneClasses = lesson.tone === "terracotta" ? "bg-terracotta text-paper" : "bg-cream-card text-terracotta";

            return (
              <button
                key={lesson.id}
                ref={(element) => { tabRefs.current[index] = element; }}
                id={`challenge-tab-${lesson.id.slice(1)}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="challenge-detail"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveLessonIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`pointer-events-auto cursor-pointer absolute w-[303px] border-0 text-left transition-[top,height,filter] duration-300 ease-out hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest-muted ${toneClasses} ${isActive ? "rounded-t-none rounded-b-xl" : "rounded-xl"
                  }`}
                style={{ left: lesson.left, top: isActive ? 634 : 652, height: isActive ? 232 : 214 }}
              >
                <span className="absolute left-[28px] top-[38px] font-caveat text-[25px] leading-none">{lesson.id}</span>
                <span className="absolute left-6 top-[86px] flex h-[65px] w-[255px] items-center justify-center text-center font-itim text-[20px] leading-normal">
                  {lesson.title}
                </span>
              </button>
            );
          })}
        </div>
      </FigmaCanvas>
    </section>
  );
}
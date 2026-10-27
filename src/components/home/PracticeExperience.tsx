"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const practiceImage = (name: string) => `/imagenes/figma/practicas/${name}`;
const heroImage = (name: string) => `/imagenes/figma/hero-${name}.png`;

const functions = {
  vestuario: { name: "Selección de vestuario", image: "vestuario.png", tone: "paper" },
  maquillaje: { name: "Maquillaje", image: "maquillaje.png", tone: "terracotta" },
  escenografia: { name: "Escenografía", image: "escenografia.png", tone: "paper" },
  ambientacion: { name: "Ambientación", image: "ambientacion.png", tone: "terracotta" },
  utileria: { name: "Utilería", image: "utileria.png", tone: "paper" },
};

type FunctionId = keyof typeof functions;

const experienceProjects = [
  {
    title: "Seguimos siendo",
    description:
      "La dinámica de trabajo de la productora se desarrolla de acuerdo con las necesidades de cada proyecto, por lo que mi participación se ha concentrado principalmente en las producciones en las que he sido requerida desde el área audiovisual. Mi experiencia principal durante este periodo ha sido “Seguimos siendo”, una serie desarrollada en colaboración con la Universidad Autónoma de Occidente entre julio y la primera semana de agosto de 2026. En este proyecto asumí el rol de directora de arte, trabajando en la construcción visual de los personajes y de los espacios destinados a las entrevistas. Se buscó que cada elemento respondiera a las necesidades visuales de las entrevistas y mantuviera coherencia dentro de la propuesta del proyecto.",
    functions: ["vestuario", "maquillaje", "escenografia", "ambientacion", "utileria"] satisfies FunctionId[],
    photos: [
      { src: practiceImage("foto-apoyo.png"), alt: "Equipo trabajando en una producción audiovisual" },
      { src: practiceImage("set_alternos.webp"), alt: "Preparación de un set para una producción" },
      { src: practiceImage("set_gloria.webp"), alt: "Referencias y materiales organizados para producción" },
      { src: practiceImage("set_ivan.webp"), alt: "Equipo trabajando en un set de producción" },
      { src: practiceImage("set_melo.webp"), alt: "Escenografía preparada para una producción audiovisual" },
      { src: practiceImage("foto_set.webp"), alt: "Espacio ambientado para una producción" },
    ],
  },
  {
    title: "Celsia",
    description:
      "En el proyecto audiovisual para Celsia, mi labor se centró en la ejecución de tres áreas clave de el departamento de arte: utilería, ambientación y vestuario. Me encargué de curar los elementos físicos, estructurar los espacios en función de la cámara y coordinar las prendas para que dialogaran de forma coherente con la narrativa visual. Esta experiencia perfeccionó mi criterio estético y fortaleció significativamente mi capacidad práctica para resolver requerimientos específicos en el set, garantizando el realismo y la continuidad en cada toma.",
    functions: ["escenografia", "ambientacion","vestuario"] satisfies FunctionId[],
    photos: [
      { src: practiceImage("Celsia1.webp"), alt: "Músicos durante una producción audiovisual" },
      { src: practiceImage("Celsia4.webp"), alt: "Set preparado para una producción audiovisual" },
      { src: practiceImage("Celsia5.webp"), alt: "Equipo trabajando en una producción audiovisual" },
      { src: practiceImage("Celsia6.webp"), alt: "Preparación de un set para una producción" },
    ],
  },
  {
    title: "Coprocenva",
    description:
      "En el proyecto audiovisual para Coprocenva, me enfoqué en la gestión de utilería, seleccionando y disponiendo estratégicamente cada objeto en el set para enriquecer la narrativa visual. Mi labor garantizó que los elementos físicos aportaran realismo y mantuvieran una estricta coherencia estética durante el rodaje, resolviendo los ajustes inmediatos frente a la cámara. Esta experiencia afinó mi precisión técnica y mi destreza para dar sentido a los espacios a través del uso minucioso de los detalles y los objetos.",
    functions: ["utileria"] satisfies FunctionId[],
    photos: [
      { src: practiceImage("coprocenva1.webp"), alt: "Escenografía preparada para una producción audiovisual" },
      { src: practiceImage("coprocenva2.webp"), alt: "Espacio ambientado para una producción" },
      { src: practiceImage("coprocenva3.webp"), alt: "Referencias y materiales organizados para producción" },
      { src: practiceImage("coprocenva4.webp"), alt: "Equipo trabajando en un set de producción" },
      { src: practiceImage("coprocenva5.webp"), alt: "Escena de una producción audiovisual" },
      { src: practiceImage("coprocenva6.webp"), alt: "Preparación de maquillaje durante una producción" },
    ],
  },
];

function ProjectCarousel({
  title,
  photos,
  top,
}: {
  title: string;
  photos: (typeof experienceProjects)[number]["photos"];
  top: number;
}) {
  const [activePage, setActivePage] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const selectedPhotoButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pageCount = Math.ceil(photos.length / 2);
  const visiblePhotos = photos.slice(activePage * 2, activePage * 2 + 2);

  const changeSelectedPhoto = useCallback((index: number) => {
    if (index < 0 || index >= photos.length) return;
    setSelectedPhotoIndex(index);
    setActivePage(Math.floor(index / 2));
  }, [photos.length]);

  useEffect(() => {
    if (selectedPhotoIndex === null) {
      selectedPhotoButtonRef.current?.focus();
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (event.key === "ArrowRight") {
        changeSelectedPhoto(selectedPhotoIndex + 1);
      } else if (event.key === "ArrowLeft") {
        changeSelectedPhoto(selectedPhotoIndex - 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [changeSelectedPhoto, selectedPhotoIndex]);

  const selectedPhoto = selectedPhotoIndex === null ? null : photos[selectedPhotoIndex];

  return (
    <>
      <div aria-live="polite">
        {visiblePhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Ampliar imagen: ${photo.alt}`}
            onClick={(event) => {
              selectedPhotoButtonRef.current = event.currentTarget;
              changeSelectedPhoto(activePage * 2 + index);
            }}
            className="absolute h-[150px] w-[335px] cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            style={{ left: 583 + index * 373, top }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={335}
              height={150}
              quality={90}
              sizes="335px"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      <nav
        aria-label={`Paginación de imágenes de ${title}`}
        className="absolute left-[583px] flex w-[708px] items-center justify-between font-itim text-[14px] text-forest-muted"
        style={{ top: top + 162 }}
      >
        <button
          type="button"
          onClick={() => setActivePage((page) => page - 1)}
          disabled={activePage === 0}
          className="rounded px-2 py-1 transition-colors hover:bg-cream-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta disabled:cursor-not-allowed disabled:opacity-40"
        >
          Anterior
        </button>
        <div
          role="group"
          aria-label={`Página ${activePage + 1} de ${pageCount}`}
          className="flex items-center gap-2"
        >
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la página ${index + 1}`}
              aria-current={activePage === index ? "page" : undefined}
              onClick={() => setActivePage(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                activePage === index ? "bg-terracotta" : "bg-forest-muted/30 hover:bg-forest-muted/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActivePage((page) => page + 1)}
          disabled={activePage === pageCount - 1}
          className="rounded px-2 py-1 transition-colors hover:bg-cream-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta disabled:cursor-not-allowed disabled:opacity-40"
        >
          Siguiente
        </button>
      </nav>
      {selectedPhoto && selectedPhotoIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${title}: ${selectedPhoto.alt}`}
            className="relative flex max-h-full max-w-full flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Cerrar imagen ampliada"
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute -right-2 -top-2 z-10 rounded-full bg-cream-card px-3 py-1 font-itim text-2xl text-forest-muted shadow-lg hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              ×
            </button>
            <div className="relative h-[min(78vh,900px)] w-[min(88vw,1200px)]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="88vw"
                quality={95}
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-6 font-itim text-paper">
              <button
                type="button"
                onClick={() => changeSelectedPhoto(selectedPhotoIndex - 1)}
                disabled={selectedPhotoIndex === 0}
                className="rounded px-3 py-2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Anterior
              </button>
              <span aria-live="polite">
                {selectedPhotoIndex + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={() => changeSelectedPhoto(selectedPhotoIndex + 1)}
                disabled={selectedPhotoIndex === photos.length - 1}
                className="rounded px-3 py-2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export function PracticeExperience() {
  return (
    <section id="experiencia" className="relative bg-bg-base overflow-x-clip">

      <FigmaCanvas width={1440} height={2300}>
        <h2 className="absolute left-[99px] top-[168px] whitespace-nowrap font-caveat text-[80px] font-normal leading-none text-forest-muted">
          Experiencia en la práctica
        </h2>
        
        <div className="absolute left-[99px] top-[287px] bottom-0 w-[437px]">
          <div
            className="sticky flex h-[216px] w-full flex-col gap-5 rounded-[13px] bg-cream-card px-6 py-[13px] shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
            style={{ top: "calc(140px / var(--figma-canvas-scale))" }}
          >
            <div className="relative h-[98px] w-full">
              <p className="absolute left-[3px] top-[14px] font-caveat text-[22px] leading-normal text-black">
                productora audiovisual
              </p>
              {/*<div className="absolute left-[187.5px] top-0 flex h-[98px] w-[177.5px] items-center justify-center bg-[#d9d9d9] font-caveat text-[42px] text-black">
                logo
              </div>*/}
              <p className="absolute left-[6px] top-[36px] font-caveat text-[42px] leading-none text-black">
                Autentica
              </p>
            </div>
            <p className="h-[26px] font-itim text-[16px] leading-normal text-forest-muted">
              Mayo - Octubre 2026
            </p>
            <p className="h-[26px] font-itim text-[16px] leading-normal text-forest-muted">
              Johnathan Álvarez, director de fotografía
            </p>
          </div>
        </div>

        {experienceProjects.map((project, index) => {
          const projectTop = 284 + index * 650;

          return (
            <div key={project.title}>
              <h3
                className="absolute left-[583px] w-[708px] font-caveat text-[36px] leading-tight text-forest-muted"
                style={{ top: projectTop }}
              >
                {project.title}
              </h3>
              <p
                className="absolute left-[583px] w-[708px] font-itim text-[16px] leading-normal text-forest-muted"
                style={{ top: projectTop + 48 }}
              >
                {project.description}
              </p>
              <ProjectCarousel
                title={project.title}
                photos={project.photos}
                top={projectTop + 250}
              />
              <h4
                className="absolute left-[583px] font-itim text-[16px] font-normal text-forest-muted"
                style={{ top: projectTop + 460 }}
              >
                Mis funciones
              </h4>
              {project.functions.map((functionId, functionIndex) => {
                const item = functions[functionId];

                return (
                  <div
                    key={functionId}
                    className={`hover:scale-105 hover:rotate-5 transition-all duration-150 absolute h-[133px] w-[133px] rounded-lg ${
                      item.tone === "terracotta" ? "bg-terracotta" : "bg-cream-card"
                    } shadow-[0_4px_2px_rgba(0,0,0,0.25)]`}
                    style={{ left: 583 + functionIndex * 157, top: projectTop + 490 }}
                  >
                    <Image
                      src={practiceImage(item.image)}
                      alt=""
                      width={86}
                      height={86}
                      className="absolute left-[25px] top-[12px] h-[86px] w-[86px] object-contain"
                    />
                    <p
                      className={`absolute inset-x-1 bottom-[8px] text-center font-itim text-[12px] leading-tight ${
                        item.tone === "terracotta" ? "text-paper" : "text-forest-muted"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
        <Image src={heroImage("image22")} alt="" width={142} height={97} className="absolute left-[899px] top-[164px]" />
        <Image src={heroImage("image26")} alt="" width={112} height={120} className="absolute left-0 top-[427px]" />
        <Image src={heroImage("estrella")} alt="" width={26} height={25} className="absolute left-[557px] top-[583px]" />
        <Image src={heroImage("estrella")} alt="" width={26} height={25} className="absolute left-[557px] top-[546px]" />
        <Image src={heroImage("estrella")} alt="" width={26} height={25} className="absolute left-[597px] top-[534px]" />
      </FigmaCanvas>
    </section>
  );
}
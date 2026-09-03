"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Category } from "@/lib/data";

const categories: Category[] = ["Todos", "Shooting", "Montaje", "Video Clip", "Cortometraje"];

const figmaPhotos: Record<string, string> = {
  controversy: "/imagenes/figma/projects-photo-controversy.png",
  dynamo: "/imagenes/figma/projects-photo-dynamo.png",
  "bichiyali-by-edu": "/imagenes/figma/projects-photo-bichiyali.png",
};

const categoryLabel: Record<Category, string> = {
  Todos: "Todos",
  Shooting: "shooring",
  Montaje: "Montaje",
  "Video Clip": "Videoclip",
  Cortometraje: "Proyección",
};

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "Todos" || p.category === activeCategory
  );

  return (
    <section id="proyectos" className="py-24 bg-[#fbf6f1] relative overflow-hidden">
      {/* Decoración de fondo */}
      <Image src="/imagenes/figma/projects-image42.png" alt="" width={266} height={229} className="absolute pointer-events-none select-none hidden lg:block opacity-90" style={{ left: "10%", top: "8%" }} />
      <Image src="/imagenes/figma/projects-frog.png" alt="" width={27} height={26} className="absolute pointer-events-none select-none hidden lg:block" style={{ right: "12%", top: "4%" }} />
      <Image src="/imagenes/figma/projects-image39.png" alt="" width={165} height={136} className="absolute pointer-events-none select-none hidden lg:block opacity-90" style={{ right: "8%", bottom: "10%" }} />

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-caveat text-4xl md:text-5xl font-bold text-forest mb-4"
          >
            Proyectos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-ink/70 max-w-2xl mx-auto"
          >
            Cada trabajo es una obra propia — con su rol, su año, y la atmósfera que ayudé a construir.
          </motion.p>
        </div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-caveat text-lg border transition-all ${
                activeCategory === cat
                  ? "bg-accent-primary border-accent-primary text-ink shadow-[2px_2px_0px_rgba(32,32,32,1)]"
                  : "bg-transparent border-ink/20 text-ink/70 hover:border-ink/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid de tarjetas estilo marco dorado */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const photo = figmaPhotos[project.slug];
              const displayTitle = project.title.replace(/^\.+|\.+$/g, "");

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative pb-16 pr-4"
                >
                  <Link href={`/proyectos/${project.slug}`} className="block">
                    {/* Marco dorado + foto */}
                    <div className="relative w-full aspect-[321/360]">
                      <Image
                        src="/imagenes/figma/projects-gold-frame.png"
                        alt=""
                        fill
                        className="object-fill pointer-events-none select-none"
                      />
                      <div
                        className="absolute overflow-hidden bg-ink/10"
                        style={{ left: "16%", top: "13.5%", width: "67.6%", height: "75%" }}
                      >
                        {photo ? (
                          <Image src={photo} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-ink/40 p-2 text-center bg-surface/20">
                            [ IMAGEN ]<br />{project.title}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Placa de info */}
                    <div className="absolute right-0 bottom-0 bg-white rounded-[15px] shadow-[0px_4px_18px_0px_rgba(0,0,0,0.25)] px-5 py-4 w-[70%] group-hover:shadow-lg transition-shadow">
                      <p className="font-itim text-sm text-forest-muted">{categoryLabel[project.category]}</p>
                      <p className="font-caveat font-bold text-xl text-forest-muted leading-snug">&quot;{displayTitle}&quot;</p>
                      <p className="font-itim text-sm text-forest-muted mb-2">{project.role}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-caveat font-bold text-xl text-forest-muted">{project.year}</span>
                        <span className="relative inline-flex items-center justify-center h-9 px-4">
                          <Image src="/imagenes/papel_btn.png" alt="" fill className="object-cover -z-10" />
                          <span className="relative font-caveat font-bold text-terracotta text-sm">¡Conoce más!</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

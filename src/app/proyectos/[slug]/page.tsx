import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { projects } from "@/lib/data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-bg-base pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <Link 
            href="/#proyectos" 
            className="inline-flex items-center gap-2 font-mono text-sm text-ink/70 hover:text-accent-primary transition-colors mb-12"
          >
            ← Volver a proyectos
          </Link>

          {/* Imagen Principal */}
          <div className="w-full aspect-video md:aspect-[21/9] bg-ink/5 border border-ink/10 relative overflow-hidden mb-12 shadow-[8px_8px_0px_rgba(32,32,32,0.12)]">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-ink/30">
              [ IMAGEN PRINCIPAL: {project.title} ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
            
            {/* Contenido Principal */}
            <div>
              <h1 className="font-mono text-4xl md:text-5xl font-bold text-ink mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-4 font-mono text-sm mb-12">
                <span className="bg-surface px-3 py-1 border border-ink/20">{project.category}</span>
                <span className="bg-ink/5 px-3 py-1 border border-ink/20">{project.role}</span>
                <span className="bg-ink/5 px-3 py-1 border border-ink/20">{project.year}</span>
              </div>

              <div className="font-sans text-lg text-ink/80 leading-relaxed mb-12">
                {project.shortDescription}
              </div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent-secondary"></div>
                  <h3 className="font-mono text-2xl font-bold text-ink mb-4">Reto principal</h3>
                  <p className="font-sans text-ink/80 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent-primary"></div>
                  <h3 className="font-mono text-2xl font-bold text-ink mb-4">Logro principal</h3>
                  <p className="font-sans text-ink/80 leading-relaxed">{project.achievement}</p>
                </div>
              </div>
            </div>

            {/* Galería Lateral / Siguiente */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="aspect-square bg-ink/5 border border-ink/10 relative shadow-sm">
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-ink/30 text-center p-4">
                      [ FOTO {i+1} ]
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-ink/10">
                <p className="font-mono text-sm text-ink/60 mb-4">Siguiente proyecto</p>
                <Link 
                  href={`/proyectos/${nextProject.slug}`}
                  className="group block"
                >
                  <div className="font-mono text-xl font-bold text-ink group-hover:text-accent-primary transition-colors">
                    {nextProject.title} →
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

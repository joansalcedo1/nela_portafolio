import Image from "next/image";
import { contactInfo } from "@/lib/data";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const heroImage = (name: string) => `/imagenes/figma/hero-${name}.png`;
const summaryImage = (name: string) => `/imagenes/figma/resumen/${name}`;

const courses = [
  {
    name: "Dirección de Arte Publicitario",
    place: "UAO",
    image: "curso-publicitario.png",
    left: 829,
    top: 718,
    width: 239,
  },
  {
    name: "Escenografía",
    place: "UAO",
    image: "curso-escenografia.png",
    left: 829,
    top: 824,
    width: 180,
  },
  {
    name: "Taller de Ornamentación",
    place: "Sarah Marín",
    image: "curso-ornamentacion.png",
    left: 1026,
    top: 824,
    width: 192,
  },
];

export function ProfessionalSummary() {
  return (
    <section id="resumen" className="relative overflow-hidden bg-bg-base">
      <FigmaCanvas width={1440} height={1024}>
        <h2 className="absolute left-[122px] top-[219px] whitespace-nowrap font-caveat text-[80px] font-normal leading-none text-forest-muted">
          Resumen profesional
        </h2>

        <p className="absolute left-[135px] top-[354px] w-[579px] font-itim text-[16px] leading-normal text-forest-muted">
          Desde la dirección y producción de arte trabajo en la construcción de universos visuales y en todo el proceso necesario para llevarlos a la realidad.
        </p>
        <p className="absolute left-[135px] top-[422px] w-[579px] font-itim text-[16px] leading-normal text-forest-muted">
          Soy estudiante de Cine y he trabajado como directora, productora y asistente de arte en distintos proyectos audiovisuales, participando desde la construcción de la propuesta visual hasta su ejecución.
        </p>
        <p className="absolute left-[135px] top-[531px] w-[579px] font-itim text-[16px] leading-normal text-forest-muted">
          Esta experiencia me ha llevado a combinar lo creativo con la gestión: coordinar equipos, organizar materiales y utilería, trabajar con proveedores, administrar recursos y adaptarme a las necesidades de cada producción.
        </p>
        <p className="absolute left-[139px] top-[644px] w-[517px] font-itim text-[16px] leading-normal text-forest-muted">
          Me interesa seguir creciendo dentro del departamento de arte y participar en proyectos donde pueda aportar desde la creación, la organización y el trabajo colectivo. Soy detallista, práctica y disfruto especialmente transformar una idea en algo tangible.
        </p>

        <a
          href={contactInfo.reelYoutubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver reel de portafolio en YouTube"
          className="transition-colors hover:bg-[#cecece]"
        >
        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WwQkLnLmrBw?si=JckKWMDeoD0Z-2XV" className="absolute left-[759px] top-[199px] flex h-[360px] w-[570px] items-center justify-center "
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <p className="absolute left-[895px] top-[562px] w-[315px] text-center font-itim text-[25px] leading-normal text-forest-muted">
          Mi reel portafolio
        </p>
        <h3 className="absolute left-[829px] top-[657px] font-caveat text-[24px] font-bold leading-none text-forest-muted">
          Cursos y/o electivas
        </h3>

        {courses.map((course) => (
          <div
            key={course.name}
            className="hover:scale-105 transition-transform duration-300 absolute flex h-[89px] items-center gap-[10px] rounded-lg bg-terracotta px-2 text-paper shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
            style={{ left: course.left, top: course.top, width: course.width }}
          >
            <Image src={summaryImage(course.image)} alt="" width={48} height={48} />
            <div className="font-itim leading-normal">
              <p className="text-[16px]">{course.name}</p>
              <p className="mt-1 text-[12px]">{course.place}</p>
            </div>
          </div>
        ))}

        <Image src={heroImage("image16")} alt="" width={122} height={120} className="absolute left-[1236px] top-[166px]" />
        <Image src={heroImage("image17")} alt="" width={52} height={51} className="absolute left-[648px] top-[190px]" />
        <Image src={heroImage("image21")} alt="" width={70} height={82} className="absolute left-[689px] top-[599px]" />
        <Image src={heroImage("image22")} alt="" width={142} height={97} className="absolute left-[715px] top-[394px]" />
        <Image src={heroImage("image23")} alt="" width={146} height={108} className="absolute left-[744px] top-[232px]" />
        <Image src={heroImage("image28")} alt="" width={156} height={160} className="absolute left-[1080px] top-[661px] rotate-[20.48deg]" />
        <Image src={heroImage("image26")} alt="" width={112} height={120} className="absolute left-[588px] top-[687px]" />
        <Image src={heroImage("image25")} alt="" width={62} height={62} className="absolute left-[599px] top-[842px]" />
      </FigmaCanvas>
    </section>
  );
}
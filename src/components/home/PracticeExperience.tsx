import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const practiceImage = (name: string) => `/imagenes/figma/practicas/${name}`;
const heroImage = (name: string) => `/imagenes/figma/hero-${name}.png`;

const functions = [
  { name: "Selección de vestuario", image: "vestuario.png", left: 583, tone: "paper" },
  { name: "Maquillaje", image: "maquillaje.png", left: 740, tone: "terracotta" },
  { name: "Escenografía", image: "escenografia.png", left: 897, tone: "paper" },
  { name: "Ambientación", image: "ambientacion.png", left: 1054, tone: "terracotta" },
  { name: "Utilería", image: "utileria.png", left: 1211, tone: "paper" },
];

export function PracticeExperience() {
  return (
    <section id="experiencia" className="relative bg-bg-base overflow-x-clip">

      <FigmaCanvas width={1440} height={1024}>
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
              <div className="absolute left-[187.5px] top-0 flex h-[98px] w-[177.5px] items-center justify-center bg-[#d9d9d9] font-caveat text-[42px] text-black">
                logo
              </div>
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

        <p className="absolute left-[583px] top-[284px] w-[708px] font-itim text-[16px] leading-normal text-forest-muted">
          La dinámica de trabajo de la productora se desarrolla de acuerdo con las necesidades de cada proyecto, por lo que mi participación se ha concentrado principalmente en las producciones en las que he sido requerida desde el área audiovisual.
        </p>
        <p className="absolute left-[583px] top-[365px] w-[397px] font-itim text-[16px] leading-normal text-forest-muted">
          Mi experiencia principal durante este periodo ha sido “Seguimos siendo”, una serie desarrollada en colaboración con la Universidad Autónoma de Occidente entre julio y la primera semana de agosto de 2026.
        </p>
        <p className="absolute left-[583px] top-[470px] w-[397px] font-itim text-[16px] leading-normal text-forest-muted">
          En este proyecto asumí el rol de directora de arte, trabajando en la construcción visual de los personajes y de los espacios destinados a las entrevistas.
        </p>

        <Image
          src={practiceImage("foto-apoyo.png")}
          alt="Rodaje de una producción audiovisual"
          width={399}
          height={224}
          className="absolute left-[591px] top-[568px] h-[224px] w-[399px] object-cover"
        />
        <h3 className="absolute left-[583px] top-[809px] font-itim text-[16px] font-normal text-forest-muted">
          Mis funciones
        </h3>

        {functions.map((item) => (
          <div
            key={item.name}
            className={`absolute top-[839px] h-[133px] w-[133px] rounded-lg ${item.tone === "terracotta" ? "bg-terracotta" : "bg-cream-card"
              } shadow-[0_4px_2px_rgba(0,0,0,0.25)]`}
            style={{ left: item.left }}
          >
            <Image
              src={practiceImage(item.image)}
              alt=""
              width={86}
              height={86}
              className="absolute left-[25px] top-[12px] h-[86px] w-[86px] object-contain"
            />
            <p className={`absolute inset-x-1 bottom-[8px] text-center font-itim text-[12px] leading-tight ${item.tone === "terracotta" ? "text-paper" : "text-forest-muted"}`}>
              {item.name}
            </p>
          </div>
        ))}

        <p className="absolute left-[583px] top-[1003px] w-[711px] font-itim text-[16px] leading-normal text-forest-muted">
          Todos y cada uno de los elementos se buscó que respondiera a las necesidades visuales de las entrevistas y mantuviera coherencia dentro de la propuesta del proyecto.
        </p>
        <Image src={heroImage("image22")} alt="" width={142} height={97} className="absolute left-[899px] top-[164px]" />
        <Image src={heroImage("image26")} alt="" width={112} height={120} className="absolute left-0 top-[427px]" />
        <Image src={practiceImage("flor-small.png")} alt="" width={26} height={25} className="absolute left-[557px] top-[583px]" />
        <Image src={practiceImage("flor-small.png")} alt="" width={26} height={25} className="absolute left-[557px] top-[546px]" />
        <Image src={practiceImage("flor-small.png")} alt="" width={26} height={25} className="absolute left-[597px] top-[534px]" />
      </FigmaCanvas>
    </section>
  );
}
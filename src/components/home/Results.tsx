import Image from "next/image";
import { FigmaCanvas } from "../ui/FigmaCanvas";

const resultsImage = (name: string) => `/imagenes/figma/resultados/${name}`;

const outcomes = [
  {
    title: "Optimización de Recursos",
    body: "Ejecución del 100% del presupuesto de arte asignado, optimizando compras, confección de props y reutilización de elementos sin sobrecostos.",
    left: 98,
    top: 346,
    width: 420,
    height: 167,
    tone: "paper",
  },
  {
    title: "Eficiencia en Tiempos de Entrega",
    body: "100% de efectividad operacional, garantizando la utilería, montaje y ambientación listos antes de cada llamado de rodaje sin retrasos en plan de producción.",
    left: 908,
    top: 329,
    width: 438,
    height: 127,
    tone: "terracotta",
  },
  {
    title: "Dirección Estética y Caracterización",
    body: "Definición integral del Look & Feel y paleta cromática para +10 personajes principales y secundarios, asegurando continuidad visual e identidad dramática.",
    left: 98,
    top: 545,
    width: 435,
    height: 156,
    tone: "terracotta",
  },
  {
    title: "Volumen y Escala de Producción",
    body: "Fui capaz de diseñar y ambientar más de 12 sets de grabación manteniendo coherencia narrativa en cada espacio.",
    left: 915,
    top: 505,
    width: 425,
    height: 138,
    tone: "paper",
  },
];

const statistics = [
  { value: "+700", label: "horas de rodaje", left: 372, paperLeft: 322, valueLeft: 420, valueWidth: 92, labelTop: 830, labelWidth: 178 },
  { value: "+50", label: "Props creados", left: 641, paperLeft: 601, valueLeft: 700, valueWidth: 69, labelTop: 837, labelWidth: 178 },
  { value: "+3", label: "Selecciones Oficiales", left: 920, paperLeft: 870, valueLeft: 980, valueWidth: 69, labelTop: 826, labelWidth: 178 },
];

export function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-bg-base">
      <div className="mx-auto max-w-6xl px-5 py-12 min-[1280px]:hidden">
        <h2 className="mb-4 font-caveat text-5xl leading-tight text-forest-muted">Resultados</h2>
        <p className="mb-6 font-itim leading-relaxed text-forest-muted">
          En Auténtica aprendí a equilibrar la exploración estética con el rigor técnico del audiovisual, desarrollando una gestión en set donde la productividad, la precisión operativa y el detalle son la prioridad.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <article key={`${outcome.title}-mobile`} className={`rounded-xl p-5 shadow-md ${outcome.tone === "terracotta" ? "bg-terracotta text-paper" : "bg-cream-card text-forest-muted"}`}>
              <h3 className="mb-2 font-caveat text-2xl font-bold">{outcome.title}</h3>
              <p className="font-itim leading-relaxed">{outcome.body}</p>
            </article>
          ))}
        </div>
        <Image src={resultsImage("image35.png")} alt="Ilustración de un sol con rostro" width={256} height={274} className="mx-auto my-6 h-48 w-56 object-contain" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {statistics.map((stat) => (
            <div key={`${stat.value}-mobile`} className="rounded-xl bg-cream-card px-4 py-5 text-center shadow-md">
              <p className="font-caveat text-4xl font-bold text-forest-muted">{stat.value}</p>
              <p className="font-caveat text-xl font-bold text-forest-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden min-[1280px]:block">
      <FigmaCanvas width={1440} height={1024}>
        <h2 className="absolute left-[98px] top-[170px] whitespace-nowrap font-caveat text-[80px] font-normal leading-none text-forest-muted">
          Resultados
        </h2>
        <p className="absolute left-[509px] top-[213px] w-[769px] font-itim text-[16px] leading-normal text-forest-muted">
          En Auténtica aprendí a equilibrar la exploración estética con el rigor técnico del audiovisual, desarrollando una gestión en set donde la productividad, la precisión operativa y el detalle son la prioridad.
        </p>

        {outcomes.map((outcome) => (
          <article
            key={outcome.title}
            className={`absolute flex items-center rounded-lg justify-center gap-4 p-4 shadow-[0_4px_2px_rgba(0,0,0,0.25)] ${outcome.tone === "terracotta" ? "bg-terracotta text-paper" : "bg-cream-card text-forest-muted"}`}
            style={{ left: outcome.left, top: outcome.top, width: outcome.width, height: outcome.height }}
          >
            <h3 className="w-[155px] shrink-0 font-caveat text-[24px] font-bold leading-tight">
              {outcome.title}
            </h3>
            <p className="w-[229px] font-itim text-[16px] leading-normal">{outcome.body}</p>
          </article>
        ))}

        <Image
          src={resultsImage("image35.png")}
          alt="Ilustración de un sol con rostro"
          width={256}
          height={274}
          className="absolute left-[541px] top-[344px] h-[300px] w-[356px] object-contain"
        />

        {statistics.map((stat) => (
          <div key={stat.value} className="absolute left-0 top-[704px] h-[229px] w-[1440px]">
            <Image
              src={resultsImage("papel-stat.png")}
              alt=""
              width={237}
              height={229}
              className="absolute h-[250px] w-[270px]"
              style={{ left: stat.paperLeft }}
            />
            <p
              className="absolute top-[50px] font-caveat text-[48px] font-bold leading-none text-forest-muted"
              style={{ left: stat.valueLeft, width: stat.valueWidth }}
            >
              {stat.value}
            </p>
            <p
              className="absolute font-caveat text-[24px] font-bold leading-normal text-center text-forest-muted"
              style={{ left: stat.left, top: stat.labelTop - 704, width: stat.labelWidth }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </FigmaCanvas>
      </div>
    </section>
  );
}
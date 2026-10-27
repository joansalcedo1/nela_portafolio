export const contactInfo = {
  whatsapp: "318801473", // Número para el enlace de WhatsApp
  whatsappDisplay: "+57 318 801473", // Número visual
  email: "contacto@nelaarte.com", // TODO: reemplazar por el correo real de Nela antes de publicar
  instagram: "nelaartee",
  reelYoutubeUrl: "https://www.youtube.com/embed/H218g8uK6LI?si=LV0A5fV38BS7GF-M",
  experienceYears: "3",
  availability: "Cali, Col",
};

export type Category = "Todos" | "Shooting" | "Montaje" | "Video Clip" | "Cortometraje";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  role: string;
  year: string;
  shortDescription: string;
  challenge: string;
  achievement: string;
  mainImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "controversy",
    title: ".CONTROVERSY.",
    category: "Shooting",
    role: "Art Assistant",
    year: "2025",
    shortDescription: "Estética urbana con dos modelos, vegetación y elementos colgantes que aportan textura y profundidad.",
    challenge: "El mayor desafío técnico fue integrar los elementos vegetales de forma orgánica dentro del entorno urbano sin que pareciera forzado o artificial, manteniendo un equilibrio visual con el vestuario y la actitud de los modelos.",
    achievement: "Logré construir una atmósfera que se siente genuina y cruda, donde la vegetación colgante añade una capa de misterio y textura que elevó el resultado final de la fotografía.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "2",
    slug: "sacra",
    title: ".SACRA.",
    category: "Shooting",
    role: "Art Assistant",
    year: "2024",
    shortDescription: "Atmósfera ritual: telas blancas, velas y bustos clásicos entre lo sagrado y lo escultórico.",
    challenge: "Manejar la luz y el volumen de las telas blancas para que interactuaran con las velas y bustos, logrando esa transición exacta entre lo sagrado y lo pagano, cuidando siempre la seguridad en el set.",
    achievement: "La composición final logró transmitir un aura etérea e inquietante, donde cada elemento suma a la narrativa ritualística de manera sutil pero contundente.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "3",
    slug: "dynamo",
    title: ".DYNAMO.",
    category: "Shooting",
    role: "Co Art Direction",
    year: "2024",
    shortDescription: "Baloncesto callejero y estética rústica, con una atmósfera cruda y auténtica.",
    challenge: "Transmitir la textura rústica del baloncesto callejero usando locaciones y utilería que aportaran peso visual, sin que compitiera con la acción y energía de los personajes.",
    achievement: "La ambientación aportó el nivel perfecto de crudeza, dándole a la pieza un tono muy realista y arraigado en la cultura urbana.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "4",
    slug: "brotherhood",
    title: ".BROTHERHOOD.",
    category: "Shooting",
    role: "Co Art Direction",
    year: "2025",
    shortDescription: "Shooting centrado en la conexión y la energía masculina, con tonos profundos y marcados.",
    challenge: "Construir una atmósfera visual que reflejara hermandad e intimidad a través de texturas pesadas y paletas sobrias.",
    achievement: "Se logró un nivel de cohesión visual que permitió a los modelos interactuar naturalmente, sintiendo la atmósfera real.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "5",
    slug: "espiritu",
    title: ".ESPIRITU.",
    category: "Montaje",
    role: "Art Assistant",
    year: "2026",
    shortDescription: "Montaje de fiesta. Atmósfera vibrante, energética y llena de luces cinéticas.",
    challenge: "El desafío logístico fue armar y coordinar todo el set up en tiempo récord antes del rodaje, asegurando que cada detalle en el fondo aportara al dinamismo.",
    achievement: "Me enorgullece cómo la ambientación realmente envolvió a los actores, facilitando una energía de fiesta creíble y eufórica.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "6",
    slug: "dos-santos",
    title: ".DOS SANTOS.",
    category: "Montaje",
    role: "Art Assistant Build",
    year: "2025",
    shortDescription: "Altar con telas naranjas, flores, velas y jarrones de barro.",
    challenge: "Equilibrar la saturación de los colores naranjas y las texturas orgánicas para que el altar se sintiera devocional y estéticamente rico sin llegar a saturar la cámara.",
    achievement: "La calidez del set resultó ser el punto focal emocional de la escena, logrando exactamente el tono que el director buscaba.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "7",
    slug: "stand-parchita-mindfull",
    title: "Stand .parchita. Mindfull",
    category: "Montaje",
    role: "Art Assistant Build",
    year: "2024",
    shortDescription: "Stand colorido para exhibir bolsos y accesorios de la marca .parchita. Mindfull.",
    challenge: "Diseñar un montaje que fuera tanto funcional para exhibición comercial como visualmente llamativo y fiel a la identidad lúdica de la marca.",
    achievement: "El stand no solo atrajo miradas, sino que optimizó el flujo de las personas interactuando con los productos.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "8",
    slug: "bichiyali-by-edu",
    title: ".BICHIYALI BY EDU.",
    category: "Video Clip",
    role: "Co Art Direction",
    year: "2025",
    shortDescription: "Dirección de arte vibrante y rítmica, acompañando la energía del videoclip.",
    challenge: "Mantener la coherencia estética durante los constantes cambios de ritmo y locaciones dentro del videoclip.",
    achievement: "Logramos una transición fluida entre espacios que mantuvo la atención del espectador en la narrativa del video.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "9",
    slug: "perrateo",
    title: ".PERRATEO.",
    category: "Video Clip",
    role: "Co Art Direction",
    year: "2024",
    shortDescription: "Ambiente nocturno, neón y urbano para un video clip con fuerte actitud.",
    challenge: "Crear una atmósfera inmersiva de vida nocturna usando recursos limitados y optimizando cada elemento en cámara.",
    achievement: "La vibra obtenida fue el comentario más elogiado; se siente como un mundo nocturno expansivo aunque el set era muy controlado.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: "10",
    slug: "la-jaula",
    title: ".LA JAULA.",
    category: "Cortometraje",
    role: "Co Art Direction",
    year: "2026",
    shortDescription: "Estética de naturaleza y selva; el personaje interactúa con ramas y matorrales.",
    challenge: "Recrear o potenciar la naturaleza salvaje de forma que no pareciera armada, garantizando que el personaje pudiera interactuar físicamente con ella sin desmontar el set.",
    achievement: "La perfecta integración del arte con la actuación; la naturaleza se sintió como un personaje más acorralando al protagonista.",
    mainImage: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  }
];

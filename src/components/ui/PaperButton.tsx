import Link from 'next/link';
import Image from 'next/image';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  // Permite recibir tanto texto simple como íconos (el SVG de WhatsApp que sale en tu error)
  children?: React.ReactNode; 
  className?: string;
  
}

export default function PaperButton({ href, onClick, children, className = "" }: ButtonProps) {
  // 1. Clases base que compartirán tanto el enlace como el botón
  const baseClasses = `relative inline-flex items-center justify-center px-10 py-5 group transition-transform duration-300 hover:scale-105 hover:-rotate-2 ${className}`;

  // 2. El contenido interno (La imagen del papel + el texto/ícono)
  const innerContent = (
    <>
      <div className="absolute inset-0 w-full h-full drop-shadow-md group-hover:drop-shadow-lg transition-all">
        <Image
          src="/imagenes/figma/nav/papel-btn.png"
          alt="Fondo de papel"
          width={500}
          height={500}
          className="object-cover w-full h-full pointer-events-none select-none"
        />
      </div>
      <span >
        {children}
      </span>
    </>
  );

  // 3. Renderizado Condicional: Si hay URL, es un Link puro (Soluciona ambos errores)
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  // 4. Si no hay URL, es un Botón puro
  return (
    <button onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}
import Link from "next/link";
import PaperButton from "./PaperButton";

export function Header() {
  const links = [
    { href: "#resumen", label: "Resumen perfil" },
    { href: "#experiencia", label: "Exp. practicas" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#resultados", label: "Resultados" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 h-14 w-full rounded-b-2xl bg-white px-3 py-2 shadow-sm min-[1280px]:h-24 min-[1280px]:px-5 min-[1280px]:py-3">
      <div className="flex h-full items-center justify-between gap-2 min-[1280px]:gap-3">
        <Link href="/" className="shrink-0 font-caveat text-[34px] font-bold leading-none text-forest min-[1280px]:text-[60px]">
          Nelaarte
        </Link>

        <nav className="hidden items-center justify-center gap-8 px-4 py-1 font-caveat text-[24px] font-bold text-forest min-[1280px]:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-terracotta">
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="relative min-[1280px]:hidden">
          <summary className="cursor-pointer list-none font-caveat text-[18px] font-bold text-forest" aria-label="Abrir menú de navegación">
            Menú
          </summary>
          <nav className="absolute right-0 top-10 flex min-w-52 flex-col gap-3 rounded-lg bg-white p-4 font-caveat text-2xl font-bold text-forest shadow-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-terracotta">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>

        <PaperButton href="#contacto" className="shrink-0 px-1 py-2 min-[1280px]:px-5">
          <span className="relative z-10 whitespace-nowrap font-caveat text-[16px] font-bold leading-none text-terracotta min-[1280px]:text-[32px]">
            !Construyamos!
          </span>
        </PaperButton>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import PaperButton from "./PaperButton";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-base/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between ">
        <Link href="/" className="font-caveat text-5xl font-bold tracking-tight  text-forest hover:text-terracotta transition-colors">
          Nelaarte
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-caveat  text-3xl font-medium">
          <Link href="#sobre-mi" className="text-forest hover:text-terracotta transition-colors">
            Sobre mi
          </Link>
          <Link href="#proyectos" className="text-forest hover:text-terracotta transition-colors">
            proyectos
          </Link>
          <Link href="#contacto" className="text-forest hover:text-terracotta transition-colors">
            Contacto
          </Link>
        </nav>

        <PaperButton
          href={`https://wa.me/${contactInfo.whatsapp}`}

        >
          <p className="relative z-10 flex items-center font-caveat text-2xl text-terracotta hover:text-terracotta-hover transition-colors font-bold">¡Construyamos!</p>
        </PaperButton>
      </div>
    </motion.header>
  );
}

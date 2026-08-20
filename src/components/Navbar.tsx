"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Struktur", href: "#struktur" },
  ];

  // Handler khusus navigasi untuk HP
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu mobile dulu

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 150); // Jeda singkat agar animasi penutupan menu tidak memblokir scroll
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#F5EFEB]/90 backdrop-blur-md border-b border-[#5C3A21]/10 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO ESKUL */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo Ekstrakulikuler Tata Boga"
              width={40}
              height={40}
              className="w-auto h-auto object-contain drop-shadow-sm"
              priority
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[#2B1810]">
            TATA <span className="text-[#8C532B]">BOGA</span>
          </span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#6B5244]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-[#5C3A21] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON DESKTOP */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#struktur"
            className="bg-[#5C3A21] text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:bg-[#8C532B] transition"
          >
            Lihat Pengurus
          </motion.a>
        </div>

        {/* TOMBOL HAMBURGER (HP ONLY) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-xl bg-[#EFE6DD] text-[#2B1810] hover:bg-[#5C3A21] hover:text-white transition-colors border border-[#5C3A21]/10"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENU MOBILE (POPOUT MENU HP) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#F5EFEB] border-b border-[#5C3A21]/10 px-6 py-6 mt-4 shadow-xl rounded-b-3xl"
          >
            <nav className="flex flex-col gap-4 text-center font-bold text-sm tracking-wider uppercase text-[#6B5244]">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="py-2 hover:text-[#5C3A21] transition border-b border-[#5C3A21]/5"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href="#struktur"
                  onClick={(e) => handleScroll(e, "#struktur")}
                  className="block w-full bg-[#5C3A21] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:bg-[#8C532B] transition"
                >
                  Lihat Pengurus
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

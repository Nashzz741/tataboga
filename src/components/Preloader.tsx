"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Laptop, X } from "lucide-react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sembunyikan preloader otomatis setelah 2.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#F5EFEB] flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-[#8C532B]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* --- LOGO TATA BOGA X IT CLUB (TANPA TEKS) --- */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-5 mb-8 relative z-10"
          >
            {/* Logo Kiri: Tata Boga */}
            <div className="w-14 h-14 bg-[#8C532B] rounded-2xl flex items-center justify-center text-white shadow-md border border-[#5C3A21]/20">
              {/* Jika menggunakan file logo gambar:
               */}
              <Image
                src="/logo.png"
                alt="Tata Boga"
                width={32}
                height={32}
                className="object-contain"
              />

            </div>

            {/* Simbol X */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#8C532B] font-bold"
            >
              <X className="w-6 h-6 opacity-70" />
            </motion.div>

            {/* Logo Kanan: IT Club */}
            <div className="w-14 h-14 bg-[#2B1810] rounded-2xl flex items-center justify-center text-white shadow-md border border-[#5C3A21]/20">
              {/* Jika menggunakan file logo gambar:
               */}
              <Image
                src="/logo3.png"
                alt="IT Club"
                width={32}
                height={32}
                className="object-contain"
              />
 
            </div>
          </motion.div>

          {/* --- RING LOADING ANIMASI --- */}
          <div className="relative flex items-center justify-center mb-6 relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-28 h-28 border-4 border-dashed border-[#8C532B] rounded-full"
            />

            <div className="absolute w-20 h-20 bg-[#EFE6DD] rounded-full flex items-center justify-center border-2 border-[#5C3A21]/20 shadow-md">
              <Utensils className="w-8 h-8 text-[#8C532B]" />
            </div>
          </div>

          {/* --- TEXT JUDUL --- */}
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-xl font-extrabold text-[#2B1810] tracking-wide mb-1 relative z-10"
          >
            Tata Boga Culinary
          </motion.h2>

          <p className="text-xs text-[#6B5244] font-medium tracking-wider uppercase mb-4 relative z-10">
            Collaborative Digital Experience
          </p>

          {/* --- PROGRESS BAR --- */}
          <div className="w-48 h-2 bg-[#5C3A21]/10 rounded-full overflow-hidden relative z-10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-[#8C532B] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

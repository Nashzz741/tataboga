"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { ChefHat, Sparkles, Star, UtensilsCrossed, Heart } from "lucide-react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 md:px-12 pt-28 pb-16 z-10 overflow-hidden"
      style={{ backgroundImage: `url('/images.jpg')` }}
    >
      {/* Overlay Ambient Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0" />

      {/* Floating Animated Ambient Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-[#8C532B]/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#5C3A21]/40 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Container Utam Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* ================= LAYOUT HP (MOCKUP SMARTPHONE) ================= */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* FLOATING BADGE 1: Rating */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-2 sm:left-4 z-30 bg-[#F5EFEB]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/50 flex items-center gap-2"
          >
            <div className="p-1.5 bg-amber-500 rounded-xl text-white">
              <Star className="w-4 h-4 fill-white" />
            </div>
            <div>
              <p className="text-[10px] text-[#6B5244] font-semibold">
                Resep Pilihan
              </p>
              <p className="text-xs font-bold text-[#2B1810]">⭐ 4.9 / 5.0</p>
            </div>
          </motion.div>

          {/* FLOATING BADGE 2: Chef Tag */}
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 -right-2 sm:right-2 z-30 bg-[#F5EFEB]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-2.5"
          >
            <div className="p-2 bg-[#8C532B] rounded-xl text-white">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#2B1810]">
                Master Class
              </p>
              <p className="text-[10px] text-[#8C532B] font-bold">
                Pastry & Culinary
              </p>
            </div>
          </motion.div>

          {/* FRAME SMARTPHONE */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, rotate: 1 }}
            className="relative w-[280px] sm:w-[310px] h-[560px] bg-[#1E110A] rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-4 border-[#5C3A21]/40"
          >
            {/* Notch / Dynamic Island HP */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-40 flex items-center justify-end px-2">
              <div className="w-2.5 h-2.5 bg-[#8C532B] rounded-full animate-pulse" />
            </div>

            {/* SCREEN HP (Layar Dalam) */}
            <div className="w-full h-full bg-[#F5EFEB] rounded-[38px] overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 relative border border-[#5C3A21]/10">
              {/* Header Layar HP */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] font-extrabold tracking-wider text-[#8C532B] uppercase bg-[#8C532B]/10 px-2.5 py-1 rounded-full">
                  Tata Boga App
                </span>
                <Heart className="w-4 h-4 text-[#8C532B] fill-[#8C532B]/20" />
              </div>

              {/* Body Layar HP: LOGO BOGA ANIMATED */}
              <div className="flex flex-col items-center justify-center my-auto space-y-3">
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-40 h-40 flex items-center justify-center bg-[#EFE6DD] rounded-3xl p-4 shadow-inner border border-[#5C3A21]/15"
                >
                  <Image
                    src="/logo.png"
                    alt="Logo Ekstrakulikuler Tata Boga"
                    width={150}
                    height={150}
                    className="w-auto h-auto max-h-32 object-contain drop-shadow-md"
                    priority
                  />
                </motion.div>

                <div className="text-center space-y-1">
                  <h3 className="font-extrabold text-base text-[#2B1810]">
                    Tata Boga Official
                  </h3>
                  <p className="text-[11px] text-[#6B5244] font-medium px-2">
                    Kreasikan resep impianmu bersama ekskul kuliner terbaik!
                  </p>
                </div>
              </div>

              {/* Bottom Card Layar HP */}
              <div className="bg-[#EFE6DD] p-3 rounded-2xl border border-[#5C3A21]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#5C3A21] rounded-xl text-white">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-[#2B1810]">
                      Jadwal Praktik
                    </p>
                    <p className="text-[9px] text-[#6B5244]">
                      Setiap Sabtu • 09:00 WIB
                    </p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BANNER TEKS HERO (RIGHT SIDE) ================= */}
        <div
          ref={cardRef}
          className="lg:col-span-7 bg-[#F5EFEB]/95 backdrop-blur-xl p-8 md:p-12 rounded-[36px] shadow-2xl border border-white/60 text-center lg:text-left space-y-6 relative overflow-hidden"
        >
          {/* Subtle Accent Glow Inside Card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8C532B]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Badge Atas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#8C532B] text-xs font-black uppercase tracking-widest bg-[#8C532B]/10 px-4 py-2 rounded-full border border-[#8C532B]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ekstrakulikuler Kuliner Modern</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2B1810] leading-tight tracking-tight">
            Kreativitas Rasa & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C532B] to-[#5C3A21]">
              Seni Kuliner Modern
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-[#6B5244] text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Eksplorasi resep Nusantara & Internasional, kuasai teknik pastry,
            hingga manajemen kuliner profesional secara praktis dan
            menyenangkan.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(92, 58, 33, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="w-full sm:w-auto bg-[#5C3A21] text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider text-center shadow-lg hover:bg-[#8C532B] transition-all duration-300"
            >
              Jelajahi Sekarang
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#struktur"
              className="w-full sm:w-auto bg-[#EFE6DD] text-[#2B1810] border border-[#5C3A21]/20 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider text-center hover:bg-[#5C3A21]/10 transition-all duration-300"
            >
              Lihat Pengurus
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

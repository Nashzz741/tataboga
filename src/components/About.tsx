"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  HeartHandshake,
  Sparkles,
  Award,
  ChefHat,
  Flame,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState<"program" | "keahlian">("program");

  return (
    <section
      id="about"
      className="relative w-full bg-[#F5EFEB] text-[#2B1810] py-24 px-6 md:px-12 border-t border-[#5C3A21]/10 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8C532B]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5C3A21]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Judul */}
        <div className="text-center space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8C532B] text-xs font-black uppercase tracking-widest bg-[#8C532B]/10 px-4 py-1.5 rounded-full border border-[#8C532B]/20 inline-block"
          >
            Mengenal Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#2B1810]"
          >
            Tentang Ekstrakulikuler{" "}
            <span className="text-[#8C532B]">Tata Boga</span>
          </motion.h2>
        </div>

        {/* Grid Konten: Layout HP (Kiri) & Deskripsi (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LAYOUT HP (SMARTPHONE MOCKUP) ================= */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* FLOATING BADGE 1 */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:right-4 z-30 bg-[#EFE6DD] px-4 py-2.5 rounded-2xl shadow-xl border border-[#5C3A21]/20 flex items-center gap-3"
            >
              <div className="p-2 bg-[#8C532B] rounded-xl text-white">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-[#6B5244] font-bold uppercase tracking-wider">
                  Kitchen Rules
                </p>
                <p className="text-xs font-extrabold text-[#2B1810]">
                  Standard Hygiene 100%
                </p>
              </div>
            </motion.div>

            {/* FLOATING BADGE 2 */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-2 sm:left-2 z-30 bg-[#EFE6DD] px-4 py-2.5 rounded-2xl shadow-xl border border-[#5C3A21]/20 flex items-center gap-3"
            >
              <div className="p-2 bg-amber-600 rounded-xl text-white">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-[#2B1810]">
                  Praktik Penuh
                </p>
                <p className="text-[10px] text-[#8C532B] font-bold">
                  Baking & Cooking
                </p>
              </div>
            </motion.div>

            {/* FRAME HP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-[280px] sm:w-[310px] h-[570px] bg-[#2B1810] rounded-[48px] p-3 shadow-[0_25px_50px_-12px_rgba(43,24,16,0.35)] border-4 border-[#5C3A21]/30"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-40 flex items-center justify-end px-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>

              {/* SCREEN HP (Layar Dalam) */}
              <div className="w-full h-full bg-[#F5EFEB] rounded-[38px] overflow-hidden flex flex-col pt-8 pb-4 px-4 relative border border-[#5C3A21]/10">
                {/* Status Bar App */}
                <div className="flex items-center justify-between pb-3 border-b border-[#5C3A21]/10">
                  <div className="flex items-center gap-2">
                    <div className="relative w-5 h-5">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={20}
                        height={20}
                        className="w-auto h-auto object-contain"
                      />
                    </div>
                    <span className="text-xs font-black text-[#2B1810]">
                      TB Info
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#8C532B] bg-[#8C532B]/10 px-2 py-0.5 rounded-full">
                    Aktivitas
                  </span>
                </div>

                {/* Tab Menu Interaktif Dalam HP */}
                <div className="grid grid-cols-2 gap-1 bg-[#EFE6DD] p-1 rounded-xl my-3">
                  <button
                    onClick={() => setActiveTab("program")}
                    className={`py-1.5 text-xs font-extrabold rounded-lg transition-all ${
                      activeTab === "program"
                        ? "bg-[#5C3A21] text-white shadow-sm"
                        : "text-[#6B5244] hover:text-[#2B1810]"
                    }`}
                  >
                    Program
                  </button>
                  <button
                    onClick={() => setActiveTab("keahlian")}
                    className={`py-1.5 text-xs font-extrabold rounded-lg transition-all ${
                      activeTab === "keahlian"
                        ? "bg-[#5C3A21] text-white shadow-sm"
                        : "text-[#6B5244] hover:text-[#2B1810]"
                    }`}
                  >
                    Keahlian
                  </button>
                </div>

                {/* Konten Layar HP Berdasarkan Tab */}
                <div className="flex-1 overflow-y-auto pr-1 space-y-2.5">
                  <AnimatePresence mode="wait">
                    {activeTab === "program" ? (
                      <motion.div
                        key="program"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-2.5"
                      >
                        {[
                          {
                            title: "Baking & Pastry",
                            desc: "Aneka roti, kue, & teknik dekorasi",
                            icon: BookOpen,
                          },
                          {
                            title: "Nusantara Cuisine",
                            desc: "Resep autentik kaya rempah",
                            icon: Utensils,
                          },
                          {
                            title: "Food Plating",
                            desc: "Estetika penyajian kelas resto",
                            icon: Sparkles,
                          },
                        ].map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={idx}
                              className="bg-[#EFE6DD] p-3 rounded-2xl border border-[#5C3A21]/10 flex items-start gap-2.5"
                            >
                              <div className="p-2 bg-[#8C532B] text-white rounded-xl mt-0.5">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-[#2B1810]">
                                  {item.title}
                                </h4>
                                <p className="text-[10px] text-[#6B5244]">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="keahlian"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-2"
                      >
                        {[
                          "Higiene & Sanitasi Dapur",
                          "Manajemen Porsi & Bahan",
                          "Food Costing & Kewirausahaan",
                          "Kerja Sama Tim & Leadership",
                        ].map((skill, idx) => (
                          <div
                            key={idx}
                            className="bg-[#EFE6DD] p-2.5 rounded-xl border border-[#5C3A21]/10 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="text-xs font-extrabold text-[#2B1810]">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Layar HP */}
                <div className="pt-2 border-t border-[#5C3A21]/10 text-center">
                  <span className="text-[9px] text-[#6B5244] font-medium">
                    Tap tab di atas untuk eksplorasi
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= DESKRIPSI UTAMA (KANAN) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-[#6B5244] text-base md:text-lg leading-relaxed font-medium">
              Ekstrakulikuler Tata Boga merupakan wadah kreatif sekolah yang
              didedikasikan untuk mengembangkan minat, bakat, serta keahlian
              para siswa di bidang seni kuliner modern maupun tradisional. Kami
              percaya bahwa memasak bukan sekadar mengolah bahan makanan,
              melainkan seni mengekspresikan cita rasa, estetika, dan dedikasi.
            </p>

            <p className="text-[#6B5244] text-base md:text-lg leading-relaxed font-medium">
              Di sini, para anggota dibimbing untuk memahami standar higiene
              dapur profesional, penguasaan teknik dasar hingga tingkat lanjut
              dalam{" "}
              <span className="text-[#5C3A21] font-extrabold bg-[#5C3A21]/10 px-2 py-0.5 rounded-md">
                baking & cooking
              </span>
              , seni penataan makanan (
              <span className="text-[#5C3A21] font-extrabold bg-[#5C3A21]/10 px-2 py-0.5 rounded-md">
                food plating
              </span>
              ), serta fondasi wirausaha di industri kuliner.
            </p>

            {/* Quote Ringkas */}
            <div className="p-4 rounded-2xl bg-[#EFE6DD] border-l-4 border-[#8C532B] text-xs md:text-sm font-semibold text-[#2B1810]">
              &quot;Mencetak generasi muda yang mandiri, kreatif, dan siap
              berprestasi melalui karya rasa.&quot;
            </div>
          </motion.div>
        </div>

        {/* ================= POIN-POIN PENTING (KARTU INTERAKTIF) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#5C3A21]/10">
          {[
            {
              label: "Kreativitas Cita Rasa",
              icon: Utensils,
              desc: "Eksplorasi rasa tanpa batas",
            },
            {
              label: "Kerja Sama Tim",
              icon: HeartHandshake,
              desc: "Kekompakan di kitchen station",
            },
            {
              label: "Standar Profesional",
              icon: Award,
              desc: "Penerapan standar chef",
            },
            {
              label: "Inovasi Kuliner",
              icon: Sparkles,
              desc: "Kreasi menu kekinian & estetis",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#EFE6DD] p-6 rounded-3xl border border-[#5C3A21]/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-3"
              >
                <div className="w-14 h-14 bg-[#5C3A21] text-white rounded-2xl flex items-center justify-center shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#2B1810]">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[#6B5244] mt-1 font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

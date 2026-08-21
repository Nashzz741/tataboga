"use client";


import { motion } from "framer-motion";
import {
  ShieldAlert,
  Crown,
  UserCheck,
  FileText,
  Wallet,
  ClipboardCheck,
  Camera,
} from "lucide-react";

interface TransformProps {
  scale?: number;
  x?: string;
  y?: string;
  fit?: "cover" | "contain";
}

const structureData = {
  pembina: {
    name: "Hermawati Setyani Aksari, S.Pd.",
    role: "Pembina Eskul",
    image: "image2.png",
    transform: { scale: 1.0, x: "-5%", y: "20%", fit: "contain" as const },
    icon: <ShieldAlert className="w-5 h-5 text-[#8C532B]" />,
  },
  executives: [
    {
      name: "Eka Safira",
      role: "Ketua Eskul",
      image: "image.png",
      transform: { scale: 1.3, x: "0%", y: "10%", fit: "contain" as const },
      icon: <Crown className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Fazriya Nur Kamila",
      role: "Wakil Ketua",
      image: "image6.png",
      transform: { scale: 1.0, x: "0%", y: "0%", fit: "contain" as const },
      icon: <UserCheck className="w-5 h-5 text-[#8C532B]" />,
    },
  ],
  sekretaris: [
    {
      name: "Goniyu Arasyid",
      role: "Sekretaris I",
      image: "image7.png",
      transform: { scale: 1.2, x: "0%", y: "6%", fit: "contain" as const },
      icon: <FileText className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Suci Ramadhani",
      role: "Sekretaris II",
      image: "image3.png",
      transform: { scale: 1.5, x: "0%", y: "-10%", fit: "contain" as const },
      icon: <FileText className="w-5 h-5 text-[#8C532B]" />,
    },
  ],
  absensi: [
    {
      name: "Nafisa Nurfarida",
      role: "Absensi I",
      image: "image8.png",
      transform: { scale: 3.0, x: "0%", y: "-17%", fit: "contain" as const },
      icon: <ClipboardCheck className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Libby Bilqis Audrey M",
      role: "Absensi II",
      image: "image1.png",
      transform: { scale: 0.9, x: "0%", y: "5%", fit: "contain" as const },
      icon: <ClipboardCheck className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Vidya Izzatunnisa",
      role: "Absensi III",
      image: "image9.png",
      transform: { scale: 0.9, x: "0%", y: "5%", fit: "contain" as const },
      icon: <ClipboardCheck className="w-5 h-5 text-[#8C532B]" />,
    },
  ],
  bendahara: [
    {
      name: "Inka Nur Intania1",
      role: "Bendahara I",
      image: "image11.png",
      transform: { scale: 1.0, x: "0%", y: "0%", fit: "cover" as const },
      icon: <Wallet className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Debiera Aufaa Rayyaa",
      role: "Bendahara II",
      image: "image5.png",
      transform: { scale: 1.2, x: "0%", y: "5%", fit: "contain" as const },
      icon: <Wallet className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Talita Putri",
      role: "Bendahara III",
      image: "image12.png",
      transform: { scale: 1.2, x: "0%", y: "-10%", fit: "cover" as const },
      icon: <Wallet className="w-5 h-5 text-[#8C532B]" />,
    },
  ],
  dokumentasi: [
    {
      name: "Nazzwa Yuniar Hariri",
      role: "Dokumentasi I",
      image: "image13.png",
      transform: { scale:1.3, x: "0%", y: "12%", fit: "contain" as const },
      icon: <Camera className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Syafira Novitreesya Putrie",
      role: "Dokumentasi II",
      image: "image10.png",
      transform: { scale: 1.3, x: "10%", y: "10%", fit: "contain" as const },
      icon: <Camera className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Alya Putri Maulana",
      role: "Dokumentasi III",
      image: "image4.png",
      transform: { scale: 1.2, x: "0%", y: "0%", fit: "contain" as const },
      icon: <Camera className="w-5 h-5 text-[#8C532B]" />,
    },
    {
      name: "Melinda Putri Andini",
      role: "Dokumentasi IV",
      image: "image16.png",
      transform: { scale: 1.2, x: "0%", y: "0%", fit: "cover" as const },
      icon: <Camera className="w-5 h-5 text-[#8C532B]" />,
    },
   
  ],
};

export default function Structure() {
  return (
    <section
      id="struktur"
      className="relative py-32 bg-[#F5EFEB] border-t border-[#5C3A21]/10 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#8C532B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C532B]"
          >
            PENGURUS UTAMA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#2B1810] mt-3"
          >
            Struktur Organisasi{" "}
            <span className="text-[#8C532B]">2026–2027</span>
          </motion.h2>
          <p className="text-xs text-[#6B5244] mt-2 font-medium">
            Tim Pengurus & Operasional Ekstrakulikuler Tata Boga
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* PEMBINA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm"
          >
            <BigMemberCard {...structureData.pembina} isHighlight />
          </motion.div>

          <div className="w-0.5 h-12 bg-gradient-to-b from-[#8C532B]/60 to-[#5C3A21]/10" />

          {/* KETUA & WAKIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {structureData.executives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="w-0.5 h-12 bg-[#5C3A21]/10" />

          {/* SEKRETARIS (1-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {structureData.sekretaris.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="w-0.5 h-12 bg-[#5C3A21]/10" />

          {/* ABSENSI (1-2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {structureData.absensi.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="w-0.5 h-12 bg-[#5C3A21]/10" />

          {/* BENDAHARA (1-3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {structureData.bendahara.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="w-0.5 h-12 bg-[#5C3A21]/10" />

          {/* DOKUMENTASI (1-5) */}
          <div className="flex flex-nowrap gap-6 w-full max-w-6xl overflow-x-auto pb-4 scrollbar-thin">
            {structureData.dokumentasi.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-72 md:w-80"
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BigMemberCard({
  name,
  role,
  image,
  icon,
  desc,
  transform = { scale: 1.2, x: "0%", y: "0%", fit: "cover" },
  isHighlight = false,
}: {
  name: string;
  role: string;
  image: string;
  icon: React.ReactNode;
  desc?: string;
  transform?: TransformProps;
  isHighlight?: boolean;
}) {
  const { scale = 1.2, x = "0%", y = "0%", fit = "cover" } = transform;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-3xl overflow-hidden bg-[#EFE6DD]/90 border backdrop-blur-xl transition-all duration-300 flex flex-col ${
        isHighlight
          ? "border-[#5C3A21] shadow-[0_10px_30px_rgba(92,58,33,0.25)] bg-[#EFE6DD]"
          : "border-[#5C3A21]/15 hover:border-[#8C532B]/60 hover:shadow-[0_10px_25px_rgba(140,83,43,0.15)]"
      }`}
    >
      <div className="relative w-full h-72 bg-[#E5DACE] border-b border-[#5C3A21]/10 overflow-hidden group">
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: fit,
              transform: `scale(${scale}) translate(${x}, ${y})`,
            }}
            className="transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#EFE6DD] via-transparent to-transparent opacity-90 pointer-events-none" />

        <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#F5EFEB]/90 border border-[#5C3A21]/15 backdrop-blur-md z-10 shadow-sm">
          {icon}
        </div>
      </div>

      <div className="p-6 text-center flex flex-col items-center justify-center flex-1">
        <span className="text-xs font-bold tracking-widest text-[#8C532B] uppercase mb-1">
          {role}
        </span>
        <h3 className="text-xl font-extrabold text-[#2B1810] tracking-tight">
          {name}
        </h3>
        {desc && (
          <p className="text-xs text-[#6B5244] mt-2 font-medium">{desc}</p>
        )}
      </div>
    </motion.div>
  );
}

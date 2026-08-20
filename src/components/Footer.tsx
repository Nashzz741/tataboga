"use client";

import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#F5EFEB] text-[#2B1810] py-16 px-8 border-t border-[#5C3A21]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* BRAND & CREDITS */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            {/* LOGO TATA BOGA */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo Ekstrakulikuler Tata Boga"
                width={32}
                height={32}
                className="w-auto h-auto object-contain drop-shadow-sm"
              />
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              TATA <span className="text-[#8C532B]">BOGA</span>
            </span>
          </div>

          <p className="text-xs text-[#6B5244]">
            &copy; 2026 Ekstrakulikuler Tata Boga. All rights reserved.
          </p>

          {/* CREATED BY IT CLUB */}
          <div className="flex items-center justify-center md:justify-start gap-2 pt-1 text-xs text-[#6B5244] font-medium">
            <span>Website created by</span>
            <div className="flex items-center gap-1.5 bg-[#EFE6DD] px-2.5 py-1 rounded-lg border border-[#5C3A21]/15 text-[#2B1810] font-bold shadow-sm">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <Image
                  src="/logo3.png" // Sesuaikan dengan path file logo IT Club kamu
                  alt="Logo IT Club"
                  width={16}
                  height={16}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <span>IT CLUB</span>
            </div>
          </div>
        </div>

        {/* SOSIAL MEDIA */}
        <div className="flex gap-3">
          {[
            {
              icon: FaInstagram,
              href: "https://www.instagram.com/tataboga.smkn1sbg/",
              label: "Instagram",
            },
            { icon: FaTiktok, href: "#", label: "TikTok" },
            { icon: FaYoutube, href: "#", label: "YouTube" },
            { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-full bg-[#EFE6DD] hover:bg-[#5C3A21] hover:text-white text-[#2B1810] flex items-center justify-center transition duration-300 shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

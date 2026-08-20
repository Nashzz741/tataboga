// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Struktur from "@/components/Struktur";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    // JANGAN beri class 'p-24', 'p-8', 'container', atau 'items-center' di sini!
    <div className="w-full overflow-x-hidden">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Struktur />
      <Footer />
    </div>
  );
}

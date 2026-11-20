import Hero from "@/components/dom/Hero";
import Featured from "@/components/dom/Featured";
import Skills from "@/components/dom/Skills";
import Philosophy from "@/components/dom/Philosophy";
import Vault from "@/components/dom/Vault"; // Added
import Achievements from "@/components/dom/Achievements";
import Scene from "@/components/canvas/Scene";
import Contact from "@/components/dom/Contact";

export default function Home() {
  return (
    <main className="w-full relative">
      <div className="relative z-0">
        <Hero />
        <Featured />
        <Skills />
        <Philosophy />
        <Vault />
        <Achievements />
        <Contact />
      </div>
      <Scene />
    </main>
  );
}
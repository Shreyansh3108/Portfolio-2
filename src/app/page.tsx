// src/app/page.tsx
import Hero from "@/components/dom/Hero";
import Featured from "@/components/dom/Featured";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  return (
    <>
      <Scene />
      <main className="w-full relative z-10">
        <Hero />
        <Featured />
      </main>
    </>
  );
}
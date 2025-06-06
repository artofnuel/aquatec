import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Explore from "./components/Explore";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";

export default function Home() {
  return (
    <main className="h-auto w-full">
      <Hero />
      <Features />
      <Explore />
      <Testimonial />
      <Download />
    </main>
  );
}

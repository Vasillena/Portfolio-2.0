import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Particles from "@/components/Particles";
import Player from "@/components/Player";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Particles />
      <Hero />
      {/* <Player src="/cloud-of-sorrow.mp3" /> */}
      <Socials />
      {/* <Contact /> */}
    </>
  );
}

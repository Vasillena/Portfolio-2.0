import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Main/Hero";
import Particles from "@/components/Main/Particles";
import Player from "@/components/Responsive/Player";
import Socials from "@/components/Main/Socials";

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

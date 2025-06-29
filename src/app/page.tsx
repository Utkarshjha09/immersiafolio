import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}

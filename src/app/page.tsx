import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ProjectsSection } from "@/components/home/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
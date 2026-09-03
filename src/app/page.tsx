import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/home/Hero";
import { SkillsStats } from "@/components/home/SkillsStats";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { ContactBlock } from "@/components/home/ContactBlock";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <SkillsStats />
        <ProjectGallery />
        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}

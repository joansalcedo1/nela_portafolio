import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/home/Hero";
import { ProfessionalSummary } from "@/components/home/ProfessionalSummary";
import { PracticeExperience } from "@/components/home/PracticeExperience";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { Challenges } from "@/components/home/Challenges";
import { Skills } from "@/components/home/Skills";
import { Results } from "@/components/home/Results";
import { ContactBlock } from "@/components/home/ContactBlock";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-x-clip">
        <Hero />
        <ProfessionalSummary />
        <PracticeExperience />
        <Challenges />
        <Skills />
        <ProjectGallery />
        <Results />
        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}

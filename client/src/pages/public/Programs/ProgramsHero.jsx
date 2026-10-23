import { BriefcaseBusiness, Heart } from "lucide-react";
import PublicPageHero from "../../../components/layout/PublicPageHero";

function ProgramsHero() {
  return (
    <PublicPageHero
      icon={BriefcaseBusiness}
      eyebrow="Our Programs"
      title="Programs designed to create"
      accent="lasting impact."
      description="From education and community support to health and wellbeing, our programs focus on practical solutions that help people build stronger and more sustainable futures."
      noteIcon={Heart}
      note="Empowering people. Strengthening communities."
    />
  );
}

export default ProgramsHero;

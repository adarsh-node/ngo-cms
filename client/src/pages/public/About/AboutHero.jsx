import { Heart, Users } from "lucide-react";
import PublicPageHero from "../../../components/layout/PublicPageHero";

function AboutHero() {
  return (
    <PublicPageHero
      icon={Users}
      eyebrow="Who We Are"
      title="Working together to create"
      accent="meaningful change."
      description="We believe every community has the potential to grow stronger when people come together, share opportunities, and support one another."
      noteIcon={Heart}
      note="Empowering people. Strengthening communities."
    />
  );
}

export default AboutHero;

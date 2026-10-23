import { Mail, MessageCircle } from "lucide-react";
import PublicPageHero from "../../../components/layout/PublicPageHero";

function ContactHero() {
  return (
    <PublicPageHero
      icon={Mail}
      eyebrow="Contact Us"
      title="Let's start a"
      accent="conversation."
      description="Have a question, want to volunteer, or interested in supporting our work? We'd love to hear from you."
      noteIcon={MessageCircle}
      note="We're always happy to hear from our community."
    />
  );
}

export default ContactHero;

import { Camera, Images } from "lucide-react";
import PublicPageHero from "../../../components/layout/PublicPageHero";

function GalleryHero() {
  return (
    <PublicPageHero
      icon={Images}
      eyebrow="Our Gallery"
      title="Stories of"
      accent="impact and community."
      description="Explore moments from our programs, community activities, volunteers, and initiatives that bring people together."
      noteIcon={Camera}
      note="Every picture tells a story of change."
    />
  );
}

export default GalleryHero;

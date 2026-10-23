import { MessageSquareText, Newspaper } from "lucide-react";
import PublicPageHero from "../../../components/layout/PublicPageHero";

function NewsHero() {
  return (
    <PublicPageHero
      icon={Newspaper}
      eyebrow="News & Updates"
      title="Stories, updates and"
      accent="community news."
      description="Stay informed about our latest initiatives, community activities, achievements, and the people who make our work possible."
      noteIcon={MessageSquareText}
      note="Follow our journey and discover the impact we are creating."
    />
  );
}

export default NewsHero;

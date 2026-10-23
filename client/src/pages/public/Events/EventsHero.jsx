import { CalendarDays, Users } from "lucide-react";
import PublicPageHero from "../../../components/layout/PublicPageHero";

function EventsHero() {
  return (
    <PublicPageHero
      icon={CalendarDays}
      eyebrow="Community Events"
      title="Come together and"
      accent="make an impact."
      description="Join our community events, workshops, campaigns, and activities. Every event is an opportunity to connect, contribute, and create positive change."
      noteIcon={Users}
      note="Everyone can be part of the change."
    />
  );
}

export default EventsHero;

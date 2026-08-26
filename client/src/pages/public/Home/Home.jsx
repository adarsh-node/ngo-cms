import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import ImpactStats from "./ImpactStats";
import ProgramsPreview from "./ProgramsPreview";
import EventsPreview from "./EventsPreview";
import GalleryPreview from "./GalleryPreview";
import SupportSection from "./SupportSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ImpactStats />
      <ProgramsPreview />
      <EventsPreview />
      <GalleryPreview />
      <SupportSection />
    </>
  );
}

export default Home;
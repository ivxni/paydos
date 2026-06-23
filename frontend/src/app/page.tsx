import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { Gallery } from "@/components/sections/Gallery";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <FeaturedMenu />
      <Gallery />
      <ReservationSection tone="sunken" />
      <VisitSection />
    </>
  );
}

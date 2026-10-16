import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Partners from "@/sections/Partners";
import OpportunityDiscovery from "@/sections/OpportunityDiscovery";
import UploadResume from "@/sections/UploadResume";
import Colleges from "@/sections/Colleges";
import AppInterface from "@/sections/AppInterface";
import SupportCTA from "@/sections/SupportCTA";
import ReadyNext from "@/sections/ReadyNext";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <OpportunityDiscovery />
        <UploadResume />
        <Colleges />
        <AppInterface />
        <SupportCTA />
        <ReadyNext />
      </main>
      <Footer />
    </>
  );
}

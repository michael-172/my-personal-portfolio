"use client";
import LandingSection from "@/components/LandingSection";
import SmallHaeder from "@/components/SmallHaeder";
import Services from "@/components/views/Landing/Services";
import About from "@/components/views/Landing/About";
import Image from "next/image";
import RecentProjects from "@/components/views/Landing/RecentProjects";
import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-8 xl:gap-24">
      <LandingSection />
      <Services />
      <About />
      <RecentProjects />
      <ContactUs />
      <Footer />
    </div>
  );
}

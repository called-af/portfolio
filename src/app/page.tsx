"use client";

import Hero from "@/app/components/organisms/Hero"
import About from "@/app/components/organisms/About";
import Project from "@/app/components/organisms/Project";
import Footer from "@/app/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Hero id="profile" className=""/>
        <Project id="project" className=""/>
        <About id="about" className=""/>
        <Footer id="contact" className=""/>      
      </div>
    </>
  );
}

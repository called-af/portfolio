import Hero from "@/app/components/organisms/Hero"
import About from "@/app/components/organisms/About";
import Project from "@/app/components/organisms/Project";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Project />
      </div>
    </>
  );
}

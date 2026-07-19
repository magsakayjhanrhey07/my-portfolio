import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import QAApproach from "@/components/QAApproach";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FadeIn><Skills /></FadeIn>
      <FadeIn delay={0.1}><QAApproach /></FadeIn>
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Certificates /></FadeIn>
      <FadeIn delay={0.1}><Projects /></FadeIn>
      <FadeIn><Contact /></FadeIn>
    </main>
  );
}
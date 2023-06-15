import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}

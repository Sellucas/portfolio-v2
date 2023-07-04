import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/utils/ScrollTop/ScrollTop";

const boxDataCard = [
  {
    id: "01",
    className: "right",
    title: "QuickView",
    status: "EM FINALIZAÇÃO",
    text: "Ferramenta que simplifica a gestão de informações importantes para o negócio. Apresenta dados de maneira visual e organizada, facilitando a compreensão e análise das métricas de desempenho. Com isso, tanto os gestores quanto os colaboradores podem identificar pontos de melhoria estratégica de forma clara e objetiva.",
    stack: "Next.js Typescript Sass MUI chartJS Vercel",
    github: "/",
    link: "/",
    img: "/static/quickview-project.png",
    alt: "QuickView Dashboard",
  },
  {
    id: "02",
    className: "left",
    title: "CardFlex",
    status: "EM CONSTRUÇÃO",
    text: "IMPERIAL é um E-commerce que reúne produtos como: Tema para Web, Mockups, Ícones, entre outros. Possui funcionalidades/recursos de itens de pesquisa, categorias de pesquisa, carrinho, detalhes do item.",
    stack: "Next.js Typescript Tailwind Vercel React-awesome-reveal",
    github: "/",
    link: "/",
    img: "/static/cardflex-project.png",
    alt: "CardFlex",
  },
  {
    id: "03",
    className: "right",
    title: "SpiceRoute",
    status: "MARÇO 2023",
    text: "SpiceRoute é um projeto de restaurante fictício criado para fins de demonstração. O objetivo do projeto é mostrar a criação de um site para um restaurante, onde os clientes podem consultar o cardápio, fazer reservas e entrar em contato com o restaurante.",
    stack: "React.js TailwindMaterial Tailwind React-reveal Vercel",
    github: "/",
    link: "/",
    img: "/static/spiceroute-project.png",
    alt: "SpiceRoute",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ScrollToTop />
      <Projects boxDataCard={boxDataCard} />
      <About />
      <Footer />
    </main>
  );
}

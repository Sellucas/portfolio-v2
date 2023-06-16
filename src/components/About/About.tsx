import React from "react";
import scss from "./About.module.scss";
import {
  SiNextdotjs,
  SiMui,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiJest,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <section className={scss.section}>
      <div className={scss.customShapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className={scss.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={scss.container}>
        <div className={scss.aboutMe}>
          <h1>Oi, meu nome é Lucas. Prazer em te conhecer.</h1>
          <p>
            Sou desenvolvedor Front-End, tenho uma paixão por criar websites
            bonitos e intuitivos. Com uma base sólida em ReactJs, estou
            constantemente explorando novas tecnologias e tendências de design
            para trazer ideias inovadoras à vida. Sou motivado e entusiasmado
            com o desenvolvimento web, sempre em busca de aprendizado e
            crescimento contínuos. Atualmente, estou me aprofundando nos estudos
            de <span>Typescript e Jest</span>.
          </p>
        </div>
        <div className={scss.stack}>
          <Marquee
            autoFill
            gradient
            gradientColor={[57, 27, 87]}
            gradientWidth={800}
          >
            <span>
              <SiReact />
            </span>
            <span>
              <SiTypescript />
            </span>
            <span>
              <SiJavascript />
            </span>
            <span>
              <SiCss3 />
            </span>
            <span>
              <SiSass />
            </span>
            <span>
              <SiTailwindcss />
            </span>
            <span>
              <SiBootstrap />
            </span>
            <span>
              <SiMui />
            </span>
            <span>
              <SiNextdotjs />
            </span>
            <span>
              <SiGit />
            </span>
            <span>
              <SiJest />
            </span>
            <span>
              <SiHtml5 />
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About;

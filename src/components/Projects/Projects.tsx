import React from "react";
import scss from "./Projects.module.scss";
import Marquee from "@/components/utils/TitleDivider";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

interface boxDataCard {
  id: string;
  title: string;
  text: string;
  stack: string;
  github: string;
  link: string;
  img: string;
  alt: string;
  className: string;
}

interface ProjectProps {
  boxDataCard: boxDataCard[];
}

const Projects: React.FC<ProjectProps> = ({ boxDataCard }) => {
  return (
    <section className={scss.section}>
      <Marquee title="PROJETOS" />
      <div className={scss.container}>
        {boxDataCard.map((box) => (
          <article
            key={box.id}
            className={`${scss[box.className]}  ${scss.project}`}
          >
            <div className={scss.image}>
              <a href="/" target="_blank">
                <img src={box.img} alt={box.alt} />
              </a>
            </div>
            <div className={scss.info}>
              <h2 className={righteous.className}>{box.id}</h2>
              <h1>{box.title}</h1>
              <p className={scss.description}>{box.text}</p>
              <p className={scss.stack}>{box.stack}</p>
              <ul className={scss.links}>
                <li>
                  <a href={box.github} target="_blank">
                    <AiOutlineGithub />
                  </a>
                </li>
                <li>
                  <a href={box.link} target="_blank">
                    <FiExternalLink />
                  </a>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

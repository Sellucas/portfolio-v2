import React from "react";
import scss from "./Hero.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

const Hero = () => {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <h3>
          OI <span>👋</span> EU SOU O LUCAS
        </h3>
        <article>
          <h1>REACT</h1>
          <ul className={scss.socials}>
            <li>
              <a href="/">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="/">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="/">
                <IoDocumentText />
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h1>DEVELOPER</h1>
        </article>
        <article className={scss.info}>
          <p>TENHO 23 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE</p>
          <p>EXPERIÊNCIA TRABALHANDO COMO FREELANCER.</p>
        </article>
      </div>
    </section>
  );
};

export default Hero;

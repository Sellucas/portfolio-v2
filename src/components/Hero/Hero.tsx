"use client";
import React from "react";
import scss from "./Hero.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { Bounce } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <div className={scss.introduce}>
          <h3>
            OI <span>👋</span> EU SOU O LUCAS.
          </h3>
        </div>
        <article>
          <h1>REACT</h1>
          <Bounce cascade>
            <ul className={scss.socials}>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-sell-machado/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Sellucas/" target="_blank">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/10MEO5mKclhvQDge_RcVsQPM_qAYf541H/view?usp=sharing"
                  target="_blank"
                >
                  <IoDocumentText />
                </a>
              </li>
            </ul>
          </Bounce>
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

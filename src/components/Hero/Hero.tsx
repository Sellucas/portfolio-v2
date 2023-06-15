import React from "react";
import scss from "./Hero.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <h3>
          OI <span>👋</span> EU SOU O LUCAS
        </h3>
        <article>
          <h1>REACT</h1>
          <div className={scss.socials}>
            <Link
              href={"https://www.linkedin.com/in/lucas-sell-machado/"}
              target="_blank"
            >
              <BsLinkedin />
            </Link>
            <Link href={"https://github.com/Sellucas/"} target="_blank">
              <BsGithub />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/lucas-sell-machado/"}
              target="_blank"
            >
              <IoDocumentText />
            </Link>
          </div>
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

"use client";
import React from "react";
import scss from "./Footer.module.scss";
import { BsRocketFill } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { Bounce } from "react-awesome-reveal";

const Footer = () => {
  return (
    <section className={scss.section}>
      <div className={scss.box}>
        <h2>Iniciar um projeto</h2>
        <p>
          Interessado em trabalhar juntos? <br />
          Seria ótimo conversarmos.
        </p>
        <Bounce>
          <div>
            <a href="/" className={scss.contact}>
              <span>
                <BsRocketFill />
              </span>
              Vamos fazer isso
            </a>
          </div>
        </Bounce>
      </div>
      <div className={scss.container}>
        <h1>Em constante aprendizado. Um dia de cada vez.</h1>
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
            <a href="/">
              <SiGmail />
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
        <span className={scss.credits}>
          Designed & Built by <a href="/">Sellucas</a>
        </span>
      </div>
    </section>
  );
};

export default Footer;

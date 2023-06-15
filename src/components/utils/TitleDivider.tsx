import React from "react";
import Marquee from "react-fast-marquee";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

interface Props {
  title: string;
}

const TitleDivider = ({ title }: Props) => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#fef2ba",
          padding: "5px 0",
          transform: "rotate(5deg)",
        }}
      >
        <Marquee
          speed={60}
          direction="left"
          autoFill
          gradientColor={[91, 77, 105]}
        >
          <p
            style={{
              marginLeft: "20px",
              color: "#2e2e2e",
              fontSize: "clamp(1.2rem, 1.0857rem + 0.5714vw, 2rem)",
            }}
            className={righteous.className}
          >
            {title}
          </p>{" "}
          <span>
            <AiOutlineArrowDown color="#2e2e2e" fontSize={35} />
          </span>
        </Marquee>
      </div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#2e2e2e",
          padding: "10px 0",
          zIndex: 2,
          position: "absolute",
          top: 0,
        }}
      >
        <Marquee
          speed={55}
          direction="right"
          autoFill
          gradientColor={[46, 46, 46]}
        >
          <p
            style={{
              marginLeft: "20px",
              fontSize: "clamp(1.2rem, 1.0857rem + 0.5714vw, 2rem)",
              color: "white",
            }}
            className={righteous.className}
          >
            {title}
          </p>{" "}
          <span>
            <AiOutlineArrowDown fontSize={35} color="white" />
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default TitleDivider;

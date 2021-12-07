import React, { useEffect, useeffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const First = ({ children, direction, noPrompt }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".down-page-arrow", {
      display: "none",
      drawSVG: 0,
      delay: 1.5,
      duration: 3,
      ease: "Expo.easInOut",
    });
    tl.to(
      ".down-page",
      {
        y: 10,
        repeat: -1,
        yoyo: true,
      },
      2
    );
    tl.to(
      ".down-page-text",
      {
        autoAlpha: 1,
        y: 0,
      },
      2
    );
  }, []);

  return <FirstContainer>{children}</FirstContainer>;
};

const FirstContainer = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;

  .down-page {
    display: block;
    width: 130px;
    height: 130px;
    position: absolute;
    bottom: 60px;
  }

  .down-page-text {
    display: block;
    position: absolute;
    bottom: 60px;
    padding-left: 155px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
  }
`;

export default First;

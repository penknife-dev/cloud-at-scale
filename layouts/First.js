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
    // tl.to(
    //   ".down-page",
    //   {
    //     y: -1,
    //     repeat: -1,
    //     yoyo: true,
    //   },
    //   2
    // );
    tl.to(
      ".down-page-text",
      {
        autoAlpha: 1,
        y: 0,
      },
      2
    );
  }, []);

  return (
    <FirstContainer className="first-container">{children}</FirstContainer>
  );
};

const FirstContainer = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
`;

export default First;

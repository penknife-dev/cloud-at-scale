// core
import React, { useEffect, useeffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

/* -------------------------------------------------------------------------- */
/*                             start first section                            */
/* -------------------------------------------------------------------------- */
// Used as a full window height container, typically at the top of each page.
// Can be used anywhere in the page to provide a full height section.

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

  @media (max-width: 780px) {
    flex-direction: column;
    height: fit-content;
    /* top: 60px; */

    div {
      order: 1;

      &.mob-first {
        order: 2;
      }
    }
  }
`;

export default First;
/* -------------------------------------------------------------------------- */
/*                              end first section                             */
/* -------------------------------------------------------------------------- */

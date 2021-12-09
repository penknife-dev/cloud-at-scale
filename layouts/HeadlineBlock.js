import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const HeadlineBlock = ({ children, overlay, center, dark, imagePosition }) => {
  useEffect(() => {
    gsap.to(".staggerup", {
      autoAlpha: 1,
      y: 0,
      delay: 0.6,
      stagger: 0.15,
    });
  }, []);

  return (
    <Headline
      className={dark ? "darker" : null}
      center={center}
      overlay={overlay}
      dark={dark}
      imagePosition={imagePosition}
    >
      {children}
    </Headline>
  );
};

const Headline = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  &.darker {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &::after {
    content: ${(props) => (props.overlay ? "" : null)};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: block;
    z-index: 10;
  }

  h1 {
    font-family: "MarkPro-ExtraLight";
    font-weight: 200;
    font-size: 4em;
    letter-spacing: -3px;
    line-height: 1.2;
    margin: 0;
    /* overflow: hidden; */
    position: relative;


    .down-page {
    display: block;
    width: 110px;
    height: 110px;
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateY(-50%);

  }

  .down-page-text {
    display: block;
    position: absolute;
    bottom: -130px;
    padding-left: 155px;
    font-size: .5em;
    letter-spacing: 1px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
  }

    div {
      display: block;
      overflow: hidden;

      span{
        display: block;
        transform: translateY(60px);
        background: -webkit-linear-gradient(
      0deg,
      rgba(253, 181, 21, 1) 0%,
      rgba(242, 102, 95, 1) 50%,
      rgba(236, 0, 140, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: rgba(253, 181, 21, 1);
        }
      }
    }
  }

  img {
    object-fit: cover;
    object-position: ${(props) => (props.center ? "center" : "right")};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

export default HeadlineBlock;

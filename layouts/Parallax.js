import React from "react";
import styled from "styled-components";

const Parallax = ({ bg, children }) => {
  return <ParallaxContainer bg={bg}>{children}</ParallaxContainer>;
};

const ParallaxContainer = styled.div`
  height: auto;
  width: 100%;
  background-attachment: fixed !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-image: url(${(props) => (props.bg ? props.bg : null)}) !important;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default Parallax;

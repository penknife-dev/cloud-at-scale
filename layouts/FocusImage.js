import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FocusImage = ({ children }) => {
  return <FocusImage>{children}</FocusImage>;
};

const FocusedImg = styled.div`
  width: 50%;
  height: 100%;

  img {
    object-fit: cover;
  }
`;

export default FocusImage;

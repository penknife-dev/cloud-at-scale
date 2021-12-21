import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = ({ children, count, dark }) => {
  return (
    <GridArea className={dark ? "dark" : null} colCount={count} dark={dark}>
      {children}
    </GridArea>
  );
};

const GridArea = styled.section`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.colCount ? props.colCount : 2)},
    minmax(0, 1fr)
  );

  grid-gap: 30px;
  padding: 3em;

  @media (max-width: 780px) {
    padding: 1em;
    display: block;
    background: #000;
  }

  div {
    padding: 0 !important;
    background: ${(props) => (props.dark ? "#000 !important" : "#fff")};

    p {
      color: ${(props) => (props.dark ? "#fff !important" : "#000")};
    }
  }
`;

export default Grid;

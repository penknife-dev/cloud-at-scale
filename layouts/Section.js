import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Section = ({ children, dark, alt, col }) => {
  const router = useRouter();

  return (
    <SectionContainer
      id={"section-" + router.pathname.replace("/", "")}
      className={dark ? "dark" : null}
      dark={dark}
      alt={alt}
      col={col}
    >
      {children}
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  padding-top: ${(props) => (props.col ? "60px" : "0px")};

  div {
    flex: 1;
    padding: 3em;
    position: relative;
    background: ${(props) => (props.dark ? "#000" : "#fff")};

    &:nth-of-type() {
      background: ${(props) => (props.alt ? "#000" : "#fff")};
    }

    img {
      object-fit: cover;
      object-position: right;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    h1 {
      background: -webkit-linear-gradient(
        0deg,
        rgba(253, 181, 21, 1) 0%,
        rgba(242, 102, 95, 1) 50%,
        rgba(236, 0, 140, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      font-family: "MarkPro-ExtraLight";
      font-weight: 200;
      font-size: 4em;
      letter-spacing: -3px;
      line-height: 1;
      margin: 0;
    }

    p {
      color: ${(props) => (props.dark ? "#fff" : "#000")};
    }
  }

  /* for smaller h1s on grids / cards */
  .info-card {
    display: flex;
    flex-direction: column;
    position: relative;

    .graphic {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      height: 100%;

      img {
        display: block;
        position: relative;
        object-fit: contain;
      }

      &#gr1 {
        width: 150px;
      }

      &#gr2 {
        width: 150px;
        right: 0;
        img {
          max-height: 150px;
        }
      }

      &#gr3 {
        width: 150px;
      }

      &#gr4 {
        width: 150px;
        right: 0;
      }
    }

    div {
      display: flex;
      flex-direction: column;
    }

    &:nth-of-type(odd) {
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        justify-content: flex-start;
      }
    }

    h1 {
      font-size: 2.6em;
    }

    p {
      max-width: 65%;
    }
  }
`;

export default Section;

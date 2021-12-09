import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Section = ({ children, dark, alt }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, []);

  return (
    <SectionContainer
      id={"section-" + router.pathname.replace("/", "")}
      className={dark ? "dark" : null}
      dark={dark}
      alt={alt}
    >
      {children}
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;

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
`;

export default Section;

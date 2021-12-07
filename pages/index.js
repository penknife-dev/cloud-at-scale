import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { gsap } from "gsap";

import { useIsFoward } from "../state/store";

import Page from "../layouts/Page";

export default function Home({ isMenu }) {
  const fowardState = useIsFoward();

  useEffect(() => {
    gsap.to("nav", { autoAlpha: 0 });
    gsap.to(".page", { top: 0 });
    gsap.to(".hidden-stagger", { autoAlpha: 1 });
  }, []);

  return (
    <Page next="page-1" prev="" isMenu={isMenu}>
      <Head>
        <title>Go bigger and faster with cloud</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Sid Newman" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="stylesheet" href="./fonts.css" />
      </Head>
      <BGImage>
        <img className="background" src="./assets/img/home-cover.jpg" alt="" />
        <MaxContent>
          <TitleBox>
            <h1>
              <span className="hidden-stagger">
                <div>Go bigger and</div>
              </span>{" "}
              <br />{" "}
              <span className="hidden-stagger">
                <div>faster with cloud</div>
              </span>
            </h1>
            <h3>
              <span className="hidden-stagger">
                <div>How banks can adopt the</div>
              </span>{" "}
              <br />{" "}
              <span className="hidden-stagger">
                <div>cloud at scale</div>
              </span>
            </h3>
            <Link href="/page-1">
              <a>
                <Prompter
                  onClick={() => {
                    fowardState.setFoward();
                  }}
                  className="hidden-stagger"
                >
                  Read now
                </Prompter>
              </a>
            </Link>
            <img
              className="a-logo hidden-stagger"
              src="./assets/img/amdocs-logo.svg"
              alt=""
            />
          </TitleBox>
        </MaxContent>
      </BGImage>
    </Page>
  );
}

const BGImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* background: url("./assets/img/home-cover.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; */
  z-index: 11111;

  .background {
    object-fit: cover;
    object-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 0.9) 30%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const MaxContent = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 100%;
  margin: auto;

  .hidden-stagger {
    opacity: 0;
    visibility: hidden;
  }
`;

const Prompter = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: #c63f42;
  cursor: pointer;
  width: fit-content;
  padding: 15px;
  border-radius: 4px;
  font-size: 2em;
  margin-bottom: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 6em;
  height: 100%;
  /* max-height: 90%; */

  h1 {
    background: -webkit-linear-gradient(
      0deg,
      rgba(253, 181, 21, 1) 0%,
      rgba(242, 102, 95, 1) 50%,
      rgba(236, 0, 140, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: "MarkPro-Bold";
    font-size: 5em;
    margin-bottom: 0;
    letter-spacing: -2px;
    line-height: 1;
    span {
      /* overflow: hidden; */

      div {
        display: inline-block;
        /* transform: translateY(10%); */
      }
    }
  }

  h3 {
    color: #fff;
    font-family: "MarkPro-ExtraLight";
    font-size: 2em;
    margin-top: 10px;

    span {
      /* overflow: hidden; */

      div {
        display: inline-block;
        /* transform: translateY(10%); */
      }
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 185px;
    justify-self: flex-start;
    margin-top: auto;
  }
`;

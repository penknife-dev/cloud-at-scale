import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import styled from "styled-components";
import { gsap } from "gsap";

import { DownPrompt, Touch } from "../components/Icons";

import { useIsFirst } from "../state/store";

const pageOne = ({}) => {
  const firstState = useIsFirst();

  useEffect(() => {
    if (firstState.get()) {
      gsap.to("#swipe-hand", { x: -20, yoyo: true, repeat: -1 });
      gsap.to("#swipe-help", { autoAlpha: 0, display: "none", delay: 3 });
    } else {
      gsap.to("#swipe-hand", { autoAlpha: 0, display: "none" });
      gsap.to("#swipe-help", { autoAlpha: 0, display: "none" });
    }

    return () => {
      firstState.notFirst();
    };
  }, [firstState.get()]);

  return (
    <Page
      next="/page-2"
      prev="/"
      title="Moving your
    bank to the cloud"
    >
      <SwipeIntro id="swipe-help" className={firstState.get() ? "first" : null}>
        <h1>Swipe with one finger to navigate</h1>
        <Touch />
      </SwipeIntro>
      <First noPrompt>
        <HeadlineBlock overlay className="mob-no-padding mob-first">
          <img src="../assets/img/home-cover.jpg" />
        </HeadlineBlock>
        <HeadlineBlock className="">
          <h1 className="first-title ">
            <div>
              <span className="staggerup">Moving your</span>
            </div>
            <div>
              <span className="staggerup">bank to the cloud:</span>
            </div>
            <div>
              <span className="staggerup">the path to success</span>
            </div>

            <DownPrompt />
            <div className="down-page-text">
              scroll <br />
              down
            </div>
          </h1>
        </HeadlineBlock>
      </First>

      <Section>
        <div>
          <p>
            Migrating to the cloud is an essential element of many banks’
            digital strategies. With cloud success at scale, it becomes easier
            to realize the pace of innovation needed to compete for customers in
            a digital-first world. The cloud also increases returns on
            upskilling people in new ways of working. Yet, many banks and other
            financial service providers have been slow to embrace cloud
            computing at scale.
          </p>
          <p>
            What hurdles stand in the way of cloud success for banks? Strict
            regulatory requirements complicate enterprise-wide cloud strategies.
            Yet, many banks try small, isolated cloud programs. Cloud services
            are often procured with the simple swipe of a credit card. This can
            create countless challenges as the bank’s central IT function loses
            control of critical infrastructure. These one-off initiatives can
            breed compliance risks. To take advantage of all that the cloud has
            to offer, banks and other financial service providers must deploy
            the cloud at scale, with the support of central IT – not in one-off
            initiatives.
          </p>
          <p>
            Operatives in the financial services industry must carefully
            consider, map and align their cloud journeys to the strategies of
            their enterprises. In this paper, we look at the pains and risks of
            cloud missteps. Then, we detail best practices for adopting the
            cloud at scale, and outline an approach that creates a foundation
            for future success.
          </p>
        </div>

        <div className="mob-no-padding">
          <img src="../assets/img/cloud2.jpg" alt="" />
        </div>
      </Section>

      <Section dark>
        <img id="cloud-tick1" src="../assets/img/cloud-tick.svg" alt="" />
        <img id="cloud-tick2" src="../assets/img/cloud-tick.svg" alt="" />
        <img id="cloud-tick3" src="../assets/img/cloud-tick.svg" alt="" />

        <div>
          <h1>
            Not another <br /> proof of
            <br /> concept
          </h1>
        </div>

        <div>
          <p>
            You don’t need to conduct a proof of concept for a cloud initiative.
            The cloud is a proven technology platform, with demonstrated
            security and reliability. But many financial services providers
            undertake a proof of concept to assess the feasibility of the cloud.
            The risk? Slowing your journey to a crawl, while the world of cloud
            computing advances rapidly around you. At Amdocs, we have close to a
            decade of experience implementing cloud solutions in highly
            regulated enterprises, and we believe companies should focus on
            moving to the cloud successfully – not on endless exploration.
          </p>
        </div>
      </Section>
    </Page>
  );
};

const SwipeIntro = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3em;
    color: #fff;

    &.first {
      display: flex;
    }

    h1 {
      margin-bottom: 30px;
    }

    svg {
      display: block;
      margin: 0 auto;
      width: 60%;
    }
  }
`;

export default pageOne;

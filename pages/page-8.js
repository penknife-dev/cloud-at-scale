import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageEight = ({}) => {
  return (
    <Page
      next="/page-9"
      prev="/page-7"
      title="Start with a cloud foundation that scales"
    >
      <First noPrompt>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup bold">Best practice #4:</span>
            </div>
            <div>
              <span className="staggerup">Start with a </span>
            </div>
            <div>
              <span className="staggerup">cloud foundation</span>
            </div>
            <div>
              <span className="staggerup">that scales</span>
            </div>

            <DownPrompt />
            <div className="down-page-text">
              scroll <br />
              down
            </div>
          </h1>
        </HeadlineBlock>

        <HeadlineBlock dark center className="mob-no-padding mob-first">
          <img src="../assets/img/practice4-full.jpg" alt="" />
        </HeadlineBlock>
      </First>

      <Section>
        <div className="empty-black mob-no-padding mob-first">
          <img src="../assets/img/secondary4.jpg" alt="" />
        </div>

        <div>
          <p>
            To ensure compliance, security, governance and operational
            readiness, turn to (or build) an enterprise-grade foundation that
            acts as a virtual data center in the cloud. To enable cloud at
            scale, manage the platform through automation. Also, use the same
            authentication and security policies as the existing on-premise or
            hosted data centers. Using the everything-ascode approach described
            earlier allows for configuration and maintenance automation. This
            eliminates human involvement – and the risk of human error.
          </p>

          <p>
            This virtual data center provides a foundation for migrating to the
            cloud – from a single workload to 10, and from 10 to 100 and beyond.
            Plan and launch the data center with scale in mind. Success requires
            that the center&apos;s operational capabilities mature and evolve
            alongside the cloud platform.
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default pageEight;

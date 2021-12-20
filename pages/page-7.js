import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageSeven = ({}) => {
  return (
    <Page next="/page-8" prev="/page-6" title="Build a center of excellence">
      <First noPrompt>
        <HeadlineBlock dark center>
          <img src="../assets/img/practice3-full.jpg" alt="" />
        </HeadlineBlock>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup bold">Best practice #3:</span>
            </div>
            <div>
              <span className="staggerup">Build a center</span>
            </div>
            <div>
              <span className="staggerup">of excellence</span>
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
            As its cloud journey matures, the bank should establish a Cloud
            Center of Excellence (CCE) that brings together inhouse high
            performers and forward thinkers. Along with the right cloud
            consulting partner, the CCE will steer cloud efforts throughout the
            organization, maintain momentum and advocate for adoption. Team
            members will evaluate workloads for cloud suitability, and become
            the go-to people to deliver and support the cloud strategy, ensuring
            an agile, iterative, horizontal capacity.
          </p>

          <p>
            Communication is key to building momentum for cloud adoption.
            Support the CCE with a clear communication strategy. This will help
            build a process and culture that accelerates cloud adoption. Too
            often, poor communication hampers cloud success – and makes the
            CCE&apos;s work unnecessarily difficult. There&apos;s not a single
            IT problem that cloud technology can&apos;t solve. If cloud
            providers don&apos;t already have the solution, they can build it.
            But communication is important to overcoming the people- and
            process-based challenges that can derail cloud initiatives.
          </p>
        </div>
        <div className="empty-black">
          <img src="../assets/img/secondary3.jpg" alt="" />
        </div>
      </Section>
    </Page>
  );
};

export default pageSeven;

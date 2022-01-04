import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageTen = ({}) => {
  return (
    <Page
      next="/page-11"
      prev="/page-9"
      title="Go faster with the right foundation"
    >
      <First noPrompt>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup">An accountable ally</span>
            </div>
            <div>
              <span className="staggerup">for cloud at scale</span>
            </div>

            <DownPrompt />
            <div className="down-page-text">
              scroll <br />
              down
            </div>
          </h1>
        </HeadlineBlock>
        <HeadlineBlock dark center className="mob-no-padding mob-first">
          <img src="../assets/img/accountability1.jpg" alt="" />
        </HeadlineBlock>
      </First>

      <Section>
        <div className="empty-black mob-no-padding mob-first">
          <img src="../assets/img/meeting1.jpg" alt="" />
        </div>
        <div>
          <p>
            Banks are at a critical juncture. They need to create the future of
            banking for customers and their people by realizing digital- first
            strategies. The Amdocs team brings together experience, cloud and
            culture to accelerate the digital transformation required for
            success. This united approach empowers banks to:
          </p>
          <p>
            <ul>
              <li>
                <b>Reimagine digital experiences:</b> Digital user growth
                increases as banks deliver market-leading digital banking
                experiences to customers
              </li>
              <li>
                <b>Adopt cloud at scale:</b> Faster and more predictable
                software deployment combines with the elasticity of the cloud to
                increase performance and resiliency while reducing risk
              </li>
              <li>
                <b>Build a culture of velocity:</b> Upskilled internal teams use
                Agile methodologies along with AI and automation to enhance
                speed and quality
              </li>
            </ul>
          </p>
          <p>
            <a
              style={{ color: "#c63f42" }}
              target="_blank"
              href="https://www.amdocs.com/contact"
              rel="noreferrer"
            >
              <b>Talk to the banking specialists at Amdocs</b>
            </a>{" "}
            about how we can help your bank thrive in the cloud as you reshape
            banking.
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default pageTen;

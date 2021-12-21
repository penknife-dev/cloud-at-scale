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
        <HeadlineBlock dark center>
          <img src="../assets/img/accountability1.jpg" alt="" />
        </HeadlineBlock>
      </First>

      <Section>
        <div className="empty-black">
          <img src="../assets/img/meeting1.jpg" alt="" />
        </div>
        <div>
          <p>
            At Amdocs, we offer a proven foundation to help banks launch cloud
            initiatives. Our approach to cloud is based on the best practices
            outlined in this ebook. Called the Cloud at Scale™ Core Foundations,
            the Amdocs foundation includes a platform that empowers large
            enterprises to adopt the cloud quickly while ensuring strict
            regulatory compliance and security. But cloud is just one aspect of
            an effective digital strategy.
          </p>
          <p>
            Banks are at a critical juncture. They need to create the future of
            banking for customers and their people by realizing digital-first
            strategies. The Amdocs team brings together human-centered design,
            cloud and transformation. These are the key pillars of digital
            success. This united approach overcomes the complexity to deliver:
          </p>
          <p>
            <ul>
              <li>
                <b>Spectacular digital experiences:</b> Digital user growth
                grows as banks reimagine banking with market-leading experiences
              </li>
              <li>
                <b>Cloud at scale:</b> Faster and more predictable software
                deployment combines with the elasticity of the cloud to increase
                performance and resiliency while reducing risk
              </li>
              <li>
                <b>Continuous transformation:</b> Upskilled and empowered
                internal teams adopt connected ways of working that accelerate
                workflows
              </li>
            </ul>
          </p>
          <p>
            Talk to the banking specialists at Amdocs about how we can help your
            bank thrive in the cloud as you reshape banking. 11 Go bigger and
            faster with cloud
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default pageTen;

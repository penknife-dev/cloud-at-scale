import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";

const pageFour = ({}) => {
  return (
    <Page
      next="/page-5"
      prev="/page-3"
      title="Essential cloud best practices for banks"
    >
      <First noPrompt>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup">Essential cloud</span>
            </div>
            <div>
              <span className="staggerup">best practices</span>
            </div>
            <div>
              <span className="staggerup">for banks</span>
            </div>

            <DownPrompt />
            <div className="down-page-text no-padding">
              scroll <br />
              down
            </div>
          </h1>
        </HeadlineBlock>

        <HeadlineBlock dark left>
          <img src="../assets/img/bank-cover.jpg" alt="" />
        </HeadlineBlock>
      </First>

      <Section>
        <Grid count="1" dark>
          <div>
            <p>
              Cloud computing has changed the underlying principles of building
              and running IT applications. To succeed in the adoption of cloud
              at scale, it&apos;s crucial to initially secure the fundamentals
              in place to avoid risks, such as technical debt.
            </p>
            <p>
              It&apos;s one thing to migrate a single application to the cloud,
              but another to achieve cloud at scale. Cloud at scale takes
              advantage of the elasticity of the cloud to handle more traffic
              (“scaling out”). It also heightens the ability to scale up,
              yielding increased release and innovation speed. When successful,
              the cloud transforms the entire enterprise, making it more agile
              and able to improve the customer experience. Moving to the cloud
              should also improve a banka&apos;s security posture and support
              governance and compliance requirements.
            </p>
            <p>
              Based on our extensive experience helping leading banks and other
              financial services companies migrate to the cloud, we&apos;ve
              established several best practices for deploying cloud at scale.
              These best practices can help initiatives move forward without
              compromising security or the customer experience.
            </p>
          </div>
        </Grid>
      </Section>
    </Page>
  );
};

export default pageFour;

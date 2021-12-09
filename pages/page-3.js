import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";

const pageThree = ({}) => {
  return (
    <Page
      next="/page-4"
      prev="/page-2"
      title="Four top risks of ad hoc cloud use"
    >
      <First noPrompt>
        <HeadlineBlock dark center>
          <img src="../assets/img/risk2.jpg" alt="" />
        </HeadlineBlock>

        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup">Four top risks</span>
            </div>
            <div>
              <span className="staggerup">of ad hoc cloud use</span>
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
        <Grid count="2" dark>
          <div className="info-card">
            <div className="graphic" id="gr1">
              <img src="../assets/img/data-cloud.svg" alt="" />
            </div>
            <div>
              <h1>
                One: <br />
                Shadow IT
              </h1>
            </div>

            <div>
              <p>
                Shadow or rogue IT is nothing new, but cloud computing has led
                to a new wrinkle. Now, lines of business can procure IT
                resources almost instantly. But operating outside of central IT
                can compromise the enterprise’s security, audit and compliance
                postures.
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="graphic" id="gr2">
              <img src="../assets/img/padlock.svg" alt="" />
            </div>{" "}
            <div>
              <h1>
                Two: <br /> Unsecured data
              </h1>
            </div>
            <div>
              <p>
                In the cloud, containerization allows memory or storage
                instances to be spawned in microseconds. But it is not uncommon
                for containers to be mislabeled. That mislabeled storage
                represents a data-leak risk.
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="graphic" id="gr3">
              <img src="../assets/img/coins.svg" alt="" />
            </div>{" "}
            <div>
              <h1>
                Three: <br /> Technical debt
              </h1>
            </div>
            <div>
              <p>
                Ad hoc cloud initiatives (even sanctioned ones) are isolated
                from the larger enterprise’s goals and regulatory requirements.
                When the larger enterprise moves to the cloud, acting without a
                strategic plan accrues technical debt that increases costs.
                That’s because applications, security configurations and
                services need to be reworked.
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="graphic" id="gr4">
              <img src="../assets/img/cloud-arrow.svg" alt="" />
            </div>{" "}
            <div>
              <h1>
                Four: <br /> Consumption woes
              </h1>
            </div>
            <div>
              <p>
                The cloud makes it simple to consume IT resources. But not all
                consumption is good consumption. For instance, if 80% of an
                organization’s applications run on Microsoft SQL server, then
                spending time and money moving Oracle Database server to the
                cloud will achieve lower value. Too often, lines of business
                invest in bleeding-edge areas that produce little ongoing
                business value.
              </p>
            </div>
          </div>
        </Grid>
      </Section>
    </Page>
  );
};

export default pageThree;

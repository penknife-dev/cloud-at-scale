import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { Tree, Spread, DownPrompt } from "../components/Icons";

const pageTwo = ({}) => {
  return (
    <Page
      next="/page-3"
      prev="/page-1"
      title="Cloud unchecked:
  growing pains
  and risks"
    >
      <First noPrompt>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup">Cloud unchecked:</span>
            </div>

            <div>
              <span className="staggerup">growing pains</span>
            </div>

            <div>
              <span className="staggerup">and risks</span>
            </div>

            <DownPrompt />
            <div className="down-page-text">
              scroll <br />
              down
            </div>
          </h1>
        </HeadlineBlock>

        <HeadlineBlock overlay center className="mob-no-padding mob-first">
          <img src="../assets/img/cloud3.jpg" alt="" />
        </HeadlineBlock>
      </First>

      <Section dark>
        <div>
          <Tree />
          <Spread />
        </div>
        <div>
          <p>
            Cloud computing places all the resources needed to develop, test and
            launch new applications and services a few clicks away. For large
            enterprises, especially those in highly regulated industries like
            financial services, this is precisely what introduces the biggest
            risks. Cloud consumption can quickly spiral out of control. And
            without proper operational controls and processes, so, too, can
            security and compliance.
          </p>
          <p>
            Plus, despite the maturity of cloud computing, leaders across
            industries remain confused about the way cloud platforms work.
            That’s true of all the leading (and proven) platforms, including AWS
            Cloud, Microsoft Azure and Google Cloud Platform. Too often,
            companies adopt the cloud with an app-centric or one-off approach
            that doesn’t serve the larger organization. Ad hoc cloud use expands
            quickly with little planning or control. Risks grow just as fast.
            The four top risks are shadow IT, unsecured data, technical debt and
            consumption woes. Let’s look at them…
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default pageTwo;

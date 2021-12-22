import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageNine = ({}) => {
  return (
    <Page
      next="/page-10"
      prev="/page-8"
      title="Go faster with the right foundation"
    >
      <First noPrompt>
        <HeadlineBlock dark center className="mob-no-padding mob-first">
          <img src="../assets/img/practice5-full.jpg" alt="" />
        </HeadlineBlock>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup bold">Best practice #5:</span>
            </div>
            <div>
              <span className="staggerup">Go faster with the</span>
            </div>
            <div>
              <span className="staggerup">right foundation</span>
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
            Banks can speed their journey to the cloud by selecting a cloud
            platform that provides a firm foundation for moving to the public
            cloud at scale. It should provide:
          </p>

          <p>
            <ul>
              <li>
                <b>Security:</b> Look for an architecture already trusted by
                some of the world&apos;s largest and most security-conscious
                financial service providers
              </li>
              <li>
                <b>Rapid time-to-value:</b> An effective platform should include
                enterprise-grade templates that can get you started in as little
                as 12 weeks
              </li>
              <li>
                <b>Price and time frame:</b> Highly trained and experienced
                project managers should help ensure on-time and on-budget
                delivery
              </li>
              <li>
                <b>Low risk:</b> A proven approach mitigates the risk of
                throwaway work, and ensures an enterprise-grade platform that
                meets security, compliance and agility needs
              </li>
            </ul>
          </p>
        </div>
        <div className="empty-black mob-no-padding mob-first">
          <img src="../assets/img/secondary5.jpg" alt="" />
        </div>
      </Section>
    </Page>
  );
};

export default pageNine;

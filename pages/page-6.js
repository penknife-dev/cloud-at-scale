import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageSix = ({}) => {
  return (
    <Page next="/page-7" prev="/page-5" title="Select the right workload">
      <First noPrompt>
        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup bold">Best practice #2:</span>
            </div>
            <div>
              <span className="staggerup">Select the right</span>
            </div>
            <div>
              <span className="staggerup">workload</span>
            </div>

            <DownPrompt />
            <div className="down-page-text">
              scroll <br />
              down
            </div>
          </h1>
        </HeadlineBlock>

        <HeadlineBlock dark center>
          <img src="../assets/img/practice2-full.jpg" alt="" />
        </HeadlineBlock>
      </First>

      <Section>
        <div className="empty-black">
          <img src="../assets/img/secondary2.jpg" alt="" />
        </div>

        <div>
          <p>
            Selecting the right first “masthead” application or workload for a
            bank&apos;s cloud journey is vital to igniting change and ensuring
            buy-in from the organization. This application should possess
            several important characteristics:
          </p>

          <p>
            <ul>
              <li>
                Contributes to the success of the business in a meaningful way
              </li>
              <li>
                Carries both internally and externally recognizable branding
              </li>
              <li>
                Includes application and support teams eager to embrace the
                cloud
              </li>
              <li>
                Suffers from scale, cost or agility constraints that cloud
                computing can help overcome
              </li>
              <li>
                Possesses some cloud-native characteristics, along with a
                relatively low level of technical complexity
              </li>
            </ul>
          </p>
          <p>
            During this initial stage, training and documentation development
            strengthen the foundation for future applications. This measured,
            iterative approach is key to overcoming the challenges of cloud
            adoption – many of which stem from a decentralized approach.
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default pageSix;

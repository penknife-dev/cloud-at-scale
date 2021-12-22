import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageFive = ({}) => {
  return (
    <Page
      next="/page-6"
      prev="/page-4"
      title="Adopt a cloud-native, everything-as-cloud approach"
    >
      <First noPrompt>
        <HeadlineBlock dark center className="mob-no-padding mob-first">
          <img src="../assets/img/practice1-full.jpg" alt="" />
        </HeadlineBlock>

        <HeadlineBlock>
          <h1 className="first-title">
            <div>
              <span className="staggerup bold">Best practice #1:</span>
            </div>
            <div>
              <span className="staggerup">Adopt a cloud-native,</span>
            </div>
            <div>
              <span className="staggerup">everything-as-cloud</span>
            </div>
            <div>
              <span className="staggerup">approach</span>
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
            Today, every aspect and layer of IT is becoming software defined.
            Achieving repeatable success in the cloud requires users to embrace
            the concept of infrastructure as code (IaC). The idea: Use templates
            and machine-readable files to build a virtual data center on demand.
            Deploy to the cloud using automated, predefined templates and
            consumables that contain the enterprise&apos;s security, compliance
            and deployment opinions. This eliminates human error and enables
            quick and secure infrastructure deployment. Note that IaC restricts
            users from employing the cloud provider&apos;s console to deploy.
          </p>

          <p>
            IaC also allows enterprises to apply best practices for software
            development to infrastructure management. Rather than one-off
            development of an applicationspecific infrastructure, the enterprise
            builds a reusable foundation that can be used for all applications.
            The bank uses tools that provide automation capabilities and create
            a continuous integration/continuous delivery (CI/CD) pipeline. That
            pipeline can support a sustainable, on-demand infrastructure that
            has the built-in security and scalability needed to accelerate
            enterprise-wide cloud adoption.
          </p>
        </div>
        <div className="empty-black mob-no-padding mob-first">
          <img src="../assets/img/secondary1.jpg" alt="" />
        </div>
        {/* <Parallax bg="../assets/img/practice1-full.jpg">jcuj</Parallax> */}
      </Section>
    </Page>
  );
};

export default pageFive;

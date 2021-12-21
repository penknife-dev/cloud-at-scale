import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Page from "../layouts/Page";
import First from "../layouts/First";
import Grid from "../layouts/Grid";
import HeadlineBlock from "../layouts/HeadlineBlock";
import Section from "../layouts/Section";
import { DownPrompt } from "../components/Icons";
import Parallax from "../layouts/Parallax";

const pageEleven = ({}) => {
  return (
    <Page next="/page-1" prev="/page-10" title="About Amdocs">
      <Section col>
        <div className="padded">
          <p>
            Amdocs helps those who build the future to make it amazing. With our
            market-leading portfolio of software products and services, we
            unlock our customers&apos; innovative potential, empowering them to
            provide next-generation communication and media experiences for both
            the individual end user and large enterprise customers. Our 28,000
            employees around the globe are here to accelerate service
            providers&apos; migration to the cloud, enable them to differentiate
            in the 5G era, and digitalize and automate their operations.
          </p>

          <p>
            Listed on the NASDAQ Global Select Market, Amdocs had revenue of
            $4.3 billion in fiscal 2021.
          </p>
          <p>
            For more information, visit Amdocs at{" "}
            <a
              style={{ fontWeight: "bold", color: "rgba(246,183,75,1)" }}
              target="_blank"
              href="https://www.amdocs.com/"
              rel="noreferrer"
            >
              www.amdocs.com
            </a>
          </p>
        </div>
      </Section>
    </Page>
  );
};

export default pageEleven;

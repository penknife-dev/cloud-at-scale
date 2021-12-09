import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import { createState, useState } from "@hookstate/core";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function MyApp({ Component, pageProps, router }) {
  const toTop = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
  };

  return (
    <AnimatePresence initial={false}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;

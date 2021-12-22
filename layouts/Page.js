/*
   This file is the default page template.
   See below in the return how the individual components make up a default page.
*/

// core
import React, { Fragment, useEffect, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { isMobile, MobileView } from "react-device-detect";
import { useSwipeable } from "react-swipeable";
import { useLongPress } from "use-long-press";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// state
import { useIsFoward } from "../state/store";

// page components
import {
  Navbar,
  Menu,
  PageTrans,
  SearchMenu,
  HelpMenu,
  Footer,
} from "../components/PageComponents";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/*                                 start page                                 */
/* -------------------------------------------------------------------------- */
// For every page layout, take its passed props and apply them to the current page

const Page = ({ children, next, prev, title, isFoward, isMenu }) => {
  const router = useRouter();
  const fowardState = useIsFoward();

  const nextPage = () => {
    fowardState.setFoward();
    router.push(next);
  };

  const prevPage = () => {
    fowardState.setBackward();
    router.push(prev);
  };

  const callback = useCallback((event) => {
    event.preventDefault();
    fowardState.setBackward();
    router.push("/page-1");
  }, []);

  const bind = useLongPress(callback, {
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    detect: "both",
  });
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => nextPage(),
    onSwipedRight: (eventData) => prevPage(),
  });

  useEffect(() => {
    gsap.to(".main-footer", {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".first-container",
        pin: false,
        start: "bottom bottom",
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Sid Newman" />
        <link rel="icon" href="../favicon.ico" />
        <link rel="stylesheet" href="../fonts.css" />
      </Head>
      <Navbar next={next} prev={prev} title={title} isMenu={isMenu} />
      <PageTrans isFoward={isFoward} isMenu={isMenu}>
        <div className="swipeable" {...handlers} {...bind}>
          {children}
        </div>
      </PageTrans>
      <Menu />
      <SearchMenu />
      <HelpMenu />
      {router.pathname == "/" ? null : <Footer next={next} prev={prev} />}
    </Fragment>
  );
};

export default Page;

/* -------------------------------------------------------------------------- */
/*                                  end page                                  */
/* -------------------------------------------------------------------------- */

// this file contains all the parts that make up a content page
import React, { Fragment, useEffect, useCallback } from "react";
import { useState } from "@hookstate/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLongPress } from "use-long-press";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  useIsFoward,
  useIsMenuOpen,
  useIsSearchOpen,
  useIsHelpOpen,
} from "../state/store";

gsap.registerPlugin(ScrollTrigger);

// Nav / toolbar to be on every page
export const Navbar = ({ next, prev, title, isMenu }) => {
  const router = useRouter();
  const menuState = useIsMenuOpen();
  const searchState = useIsSearchOpen();
  const helpState = useIsHelpOpen();

  const handleMenu = () => {
    let c = menuState.get();
    c ? menuState.setClose() : menuState.setOpen();
  };

  return (
    <Navigation>
      <div className="part">
        <div
          className={menuState.get() ? "burger close" : "burger"}
          onClick={handleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="part">
        <div className="page-count">
          {router.pathname.replace("/page-", "")}/3
        </div>
      </div>

      <div className="part">Go bigger and faster with cloud</div>

      <div className="tools">
        <div className="part">
          <div className="page-title">{title}</div>
        </div>

        <div
          className="helper"
          onClick={() => {
            helpState.setOpen();
          }}
        >
          <img src="../assets/img/circle-help.svg" alt="" />
        </div>
        <div
          className="searcher"
          onClick={() => {
            searchState.setOpen();
          }}
        >
          <img src="../assets/img/search.svg" alt="" />
        </div>
      </div>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: row;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(0, 0, 0, 1);
  padding: 0 30px;
  z-index: 100;

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(246, 183, 75);
    background: linear-gradient(
      90deg,
      rgba(246, 183, 75, 1) 0%,
      rgba(223, 100, 105, 1) 50%,
      rgba(201, 49, 127, 1) 100%
    );
  }

  /* .page-title {
    opacity: 0;
    visibility: hidden;
  } */

  .part {
    display: inline-flex;
    /* background: red; */
    color: #fff;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
  }

  .burger {
    /* position: fixed; */
    width: 60px;
    height: 60px;
    border-radius: 100%;
    z-index: 999;
    padding: 14px;
    display: block !important;
    z-index: 9999;
    cursor: pointer;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    cursor: pointer;

    span {
      width: 85%;
      height: 4px;
      display: block;
      background: #fff;
      margin: 5px 0;
    }

    /* with close styles */

    &.close {
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

      span {
        &:nth-child(1) {
          -webkit-transform: rotate(45deg) translate(6px, 7px);
          transform: rotate(45deg) translate(6px, 7px);
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }

        &:nth-child(2) {
          opacity: 0;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }

        &:nth-child(3) {
          -webkit-transform: rotate(-45deg) translate(6px, -7px);
          transform: rotate(-45deg) translate(6px, -7px);
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }
    }
  }

  .tools {
    margin-left: auto !important;
    display: inline-flex;
    justify-self: flex-end;
    color: #fff;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;
    /* background: red; */

    .page-title {
      margin-right: 30px;
    }

    .helper {
      display: block;
      width: 30px;
      height: 30px;
      /* background: url("../assets/img/circle-help.svg") no-repeat center center;
      background-size: cover; */
      cursor: pointer;
      margin-right: 30px;

      img {
        display: block;
        width: 100%;
      }
    }

    .searcher {
      display: block;
      width: 30px;
      height: 30px;
      /* background: url("../assets/img/search.svg") no-repeat center center;
      background-size: cover; */
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
  }
`;

// end navbar

// The whole container for the page, controls the transitions in and out
export const PageTrans = ({ children, isFoward }) => {
  const fowardState = useIsFoward();

  const optionOne = {
    initial: { x: fowardState.getIsFoward() ? "100%" : "-100%" },
    animate: { x: "0" },
    exit: { x: fowardState.getIsFoward() ? "-100%" : "100%" },
    transition: {
      x: { type: "tween", ease: "anticipate", duration: 1.2 },
    },
  };

  const optionTwo = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <PageTransition
      initial={optionOne.initial}
      animate={optionOne.animate}
      exit={optionOne.exit}
      transition={optionOne.transition}
      className="page"
    >
      <PageContentArea>{children}</PageContentArea>
    </PageTransition>
  );
};

const PageTransition = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  /* padding-top: 60px; */
  /* overflow: hidden; */
`;

const PageContentArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding: 3em; */
`;

// end page container

// The fullscreen menu for quick access to individual pages. is activated via the burger toggle in the navbar
export const Menu = () => {
  const menuState = useIsMenuOpen();
  const fowardState = useIsFoward();
  const menuImage = useState("");

  const closeMenu = () => {
    fowardState.setFoward();
    menuState.setClose();
  };

  const handleMenuImage = () => {
    switch (menuImage.get()) {
      case "page-1":
        gsap.to("#si-1", { y: 0 });
        gsap.to("#si-2,#si-3", { y: "-100%" });
        break;
      case "page-2":
        gsap.to("#si-2", { y: 0 });
        gsap.to("#si-1,#si-3", { y: "-100%" });

        break;
      case "page-3":
        gsap.to("#si-3", { y: 0 });
        gsap.to("#si-1,#si-2", { y: "-100%" });

        break;
      default:
        gsap.to("#si-1,#si-2,#si-3", { y: "100%" });
        break;
    }
  };

  useEffect(() => {
    handleMenuImage();
  }, [menuImage]);

  return (
    <MenuContainer className={menuState.get() ? "open" : null}>
      <MenuHalf className="pages">
        <Link href="/page-1">
          <a>
            <div
              onMouseEnter={() => {
                menuImage.set("page-1");
              }}
              onMouseLeave={() => {
                menuImage.set("");
              }}
              onClick={closeMenu}
            >
              {" "}
              <h1>page 1</h1>
            </div>
          </a>
        </Link>
        <Link href="/page-2">
          <a>
            <div
              onMouseEnter={() => {
                menuImage.set("page-2");
              }}
              onMouseLeave={() => {
                menuImage.set("");
              }}
              onClick={closeMenu}
            >
              {" "}
              <h1>page 2</h1>
            </div>
          </a>
        </Link>
        <Link href="/page-3">
          <a>
            <div
              onMouseEnter={() => {
                menuImage.set("page-3");
              }}
              onMouseLeave={() => {
                menuImage.set("");
              }}
              onClick={closeMenu}
            >
              {" "}
              <h1>page 3</h1>
            </div>
          </a>
        </Link>
      </MenuHalf>
      <MenuHalf>
        <div className="selected-img" id="si-1">
          <img id="menu-image" src="../assets/img/home-cover.jpg" alt="" />
        </div>
        <div className="selected-img" id="si-2">
          <img id="menu-image" src="../assets/img/cloud3.jpg" alt="" />
        </div>
        <div className="selected-img" id="si-3">
          <img id="menu-image" src="../assets/img/risk2.jpg" alt="" />
        </div>
      </MenuHalf>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding: 3em; */
  z-index: 1000;

  transform: translateX(-100%);
  transition: all 0.5s ease;

  &.open {
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  div {
    cursor: pointer;
  }

  h1 {
    font-family: "MarkPro-ExtraLight";
    font-weight: 200;
    margin: 0;
    font-size: 3em;
    transition: all 0.5s ease;

    &:hover {
      color: #f6b74b;
      transition: all 0.5s ease;
    }
  }
`;

const MenuHalf = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;

  &.pages {
    padding: 3em;
  }

  .selected-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: rgba(0, 0, 0, 0.5);
    }

    /* opacity: 0;
    visibility: hidden; */
    transform: translateY(100%);
  }

  img {
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

// end menu

// The arrows that go from page to page
export const NavArrows = ({ next, prev }) => {
  const fowardState = useIsFoward();
  const router = useRouter();

  const handleNext = () => {
    fowardState.setFoward();
  };

  const handlePrev = () => {
    fowardState.setBackward();
  };

  const nextHoverEffect = () => {
    gsap.to("#prev-nav-arrow", { opacity: 0.3 });
  };

  const nextRevokeEffect = () => {
    gsap.to("#prev-nav-arrow", { opacity: 1 });
  };

  const prevHoverEffect = () => {
    gsap.to("#next-nav-arrow", { opacity: 0.3 });
  };

  const prevRevokeEffect = () => {
    gsap.to("#next-nav-arrow", { opacity: 1 });
  };

  const callback = useCallback((event) => {
    event.preventDefault();
    fowardState.setBackward();
    router.push("/");
  }, []);

  const bind = useLongPress(callback, {
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    detect: "both",
  });

  useEffect(() => {
    return () => {
      gsap.set(".nav-arrow", { background: "#000" });
      gsap.to(".nav-arrow", {
        background: "#F6B74B",
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".dark",
          pin: false,
          start: "top bottom-=80px",
          markers: false,
          toggleActions: "play none none reverse",
        },
      });
    };
  }, []);

  return (
    <ArrowContainer
      className={
        router.pathname == "/" ? "hidden nav-arrow-box" : "nav-arrow-box"
      }
    >
      <Link href={prev}>
        <a>
          <PrevArrow
            id="prev-nav-arrow"
            className="nav-arrow"
            style={{ background: "#000000" }}
            {...bind}
            onMouseEnter={prevHoverEffect}
            onMouseLeave={prevRevokeEffect}
            onClick={handlePrev}
          >
            <img
              src="../assets/img/arrow-left.svg"
              alt=""
              width="20"
              height="20"
            />
          </PrevArrow>
        </a>
      </Link>
      <Link href={next}>
        <a>
          <NextArrow
            id="next-nav-arrow"
            className="nav-arrow"
            style={{ background: "#000000" }}
            onMouseEnter={nextHoverEffect}
            onMouseLeave={nextRevokeEffect}
            onClick={handleNext}
          >
            <img
              src="../assets/img/arrow-right.svg"
              alt=""
              width="20"
              height="20"
            />
          </NextArrow>
        </a>
      </Link>
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  position: fixed;
  bottom: 3em;
  right: 3em;
  display: flex;
  transition: 0.5s ease;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease;
  }
  /* background: orange; */
`;

const NextArrow = styled.div`
  flex: 1;
  width: 40px;
  height: 40px;
  margin: 0;
  cursor: pointer;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);

  img {
    display: block;
    width: 50%;
    margin: auto;
  }
`;

const PrevArrow = styled(NextArrow)``;

// end nav arrows

// the search menu allows users to seacrh content by keywords / content
export const SearchMenu = () => {
  const searchState = useIsSearchOpen();

  return (
    <SearchMenuContainer className={!searchState.get() ? null : "open"}>
      <section>
        <div
          className="closer"
          onClick={() => {
            searchState.setClose();
          }}
        >
          <img src="../assets/img/close.svg" alt="" />
        </div>
        <h2>Search for anything</h2>
        <form action="">
          <input type="text" name="" id="" />
        </form>
        <div className="search-area"></div>
      </section>
    </SearchMenuContainer>
  );
};

const SearchMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);

  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transform-origin: center center;
  transition: all 0.5s ease;

  &.open {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: all 0.5s ease;
  }

  section {
    background: #fff;
    padding: 1em;
    display: flex;
    flex-direction: column;
    width: 85%;
    position: relative;

    h2 {
      font-size: 3em;
      font-weight: 200;
      font-family: "MarkPro-ExtraLight";
    }

    form {
      input {
        width: 50%;
        padding: 5px;
      }
    }

    .closer {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 50px;
      height: 50px;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        display: block;
        width: 70%;
      }
    }
  }

  .search-area {
  }
`;

// end search menu

export const HelpMenu = () => {
  const helpState = useIsHelpOpen();

  return (
    <HelpContainer className={!helpState.get() ? null : "open"}>
      <section>
        <div
          className="closer"
          onClick={() => {
            helpState.setClose();
          }}
        >
          <img src="../assets/img/close.svg" alt="" />
        </div>
        <div>
          {" "}
          <video src="../assets/img/help-demo1.mov" controls={true}></video>
        </div>
        <div className="instructions">
          <p>
            The Navigation arrows appear when you scroll to the bottom of the
            page. Click the arrows to navigate from page to page.
          </p>
          <p>Hold the back arrow to go back to the start.</p>
          <p>Use the hambrger menu to quickly jump from page to the page.</p>
          <p>Use the search tool to find anything in ths eBook.</p>
        </div>
      </section>
    </HelpContainer>
  );
};

const HelpContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);

  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transform-origin: center center;
  transition: all 0.5s ease;

  &.open {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: all 0.5s ease;
  }

  section {
    background: #fff;
    padding: 1em;
    display: flex;
    flex-direction: row;
    width: 80%;
    position: relative;

    div {
      display: flex;
      flex-direction: column;
      &.instructions {
        padding: 1em;
      }
      video {
        display: block;
        width: 100%;
      }
    }

    h2 {
      font-size: 3em;
      font-weight: 200;
      font-family: "MarkPro-ExtraLight";
    }

    .closer {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 50px;
      height: 50px;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        display: block;
        width: 70%;
      }
    }
  }
`;

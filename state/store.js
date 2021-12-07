import React from "react";
import { createState, useState } from "@hookstate/core";

const isFoward = createState(true);
const isMenuOpen = createState(false);
const isSearchOpen = createState(false);
const isHelpOpen = createState(false);

export const useIsFoward = () => {
  const state = useState(isFoward);

  return {
    setFoward() {
      return state.set(true);
    },
    setBackward() {
      return state.set(false);
    },
    getIsFoward() {
      return state.get();
    },
  };
};

export const useIsMenuOpen = () => {
  const mstate = useState(isMenuOpen);

  return {
    setOpen() {
      return mstate.set(true);
    },
    setClose() {
      return mstate.set(false);
    },
    get() {
      return mstate.get();
    },
  };
};

export const useIsSearchOpen = () => {
  const sstate = useState(isSearchOpen);

  return {
    setOpen() {
      return sstate.set(true);
    },
    setClose() {
      return sstate.set(false);
    },
    get() {
      return sstate.get();
    },
  };
};

export const useIsHelpOpen = () => {
  const hstate = useState(isHelpOpen);

  return {
    setOpen() {
      return hstate.set(true);
    },
    setClose() {
      return hstate.set(false);
    },
    get() {
      return hstate.get();
    },
  };
};

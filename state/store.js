// core
import { createState, useState } from "@hookstate/core";

// set state var to refer back to
const isFoward = createState(true);
const isFirst = createState(true);
const isMenuOpen = createState(false);
const isSearchOpen = createState(false);
const isHelpOpen = createState(false);

/*
   All states are exported as a object containing various setter and getter functions
   Once you have imported to the page / file you need, you can create a var to refer back to then call the functions.
   For example isMenuOpen.setOpen() will change the state to true so when bound to a function or click event, the menu will open
*/

// determines wehter a page is transitioning foward or backward
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

// determines if the users is on their first visit on page 1 - specifically for the mobile navigation prompt
export const useIsFirst = () => {
  const fstate = useState(isFirst);

  return {
    first() {
      return fstate.set(true);
    },
    notFirst() {
      return fstate.set(false);
    },
    get() {
      return fstate.get();
    },
  };
};

// determines if the menu is open or not
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

// determines if the help menu is open or not
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

import { useLayoutEffect } from "react";

export const useLockBodyScroll = (locked: boolean) => {
  useLayoutEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
};

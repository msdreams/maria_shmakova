import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "../../data/site";

const SEEN_KEY = "ms-intro-seen";
const ease = [0.76, 0, 0.24, 1] as const;

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

/** First-visit intro: the name is revealed, a gradient rule draws in, then the
 *  curtain slides up. Runs once per browser session. */
export const LoadingScreen = () => {
  const [visible, setVisible] = useState(() => !alreadySeen());

  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* private mode */
      }
    }, 1400);
    return () => window.clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease }}
          aria-hidden="true"
        >
          <div className="overflow-hidden">
            <motion.p
              className="font-heading text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-none tracking-tight text-ink"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
            >
              {site.name}
            </motion.p>
          </div>
          <motion.div
            className="mt-4 h-px w-40 origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.4 }}
          />
          <motion.p
            className="eyebrow mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {site.roleLine}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

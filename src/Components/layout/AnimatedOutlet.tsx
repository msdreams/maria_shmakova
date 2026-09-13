import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";

/** Freezes the outlet element so the exiting page keeps its content while it animates out. */
const FrozenOutlet = () => {
  const outlet = useOutlet();
  const [frozen] = useState(outlet);
  return <>{frozen}</>;
};

export const AnimatedOutlet = () => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Opacity only: a leftover `transform` on this wrapper would turn it
          into a containing block and kill position:sticky on every page. */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <FrozenOutlet />
      </motion.div>
    </AnimatePresence>
  );
};

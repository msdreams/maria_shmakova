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
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <FrozenOutlet />
      </motion.div>
    </AnimatePresence>
  );
};

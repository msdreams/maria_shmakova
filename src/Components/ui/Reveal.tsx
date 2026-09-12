import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

/** Fade-up on first scroll into view. Keep subtle: 24px, 0.6s. */
export const Reveal = ({ children, delay = 0, y = 24, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

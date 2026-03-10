"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimateOnView = ({
  children,
  delay = 0,
  yOffset = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;

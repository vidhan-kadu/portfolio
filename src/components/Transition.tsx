import { motion } from "framer-motion";
import type { ComponentType } from "react";

function Transition<T extends object>(Component: ComponentType<T>) {
  return (props: T) => (
    <>
      <Component {...props} />

      {/* Exit animation overlay (curtain closing from bottom) */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-full bg-black origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.6 }}
      />

      {/* Entry animation overlay (curtain opening from top) */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-full bg-primary origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0 }}
      />
    </>
  );
}

export default Transition;

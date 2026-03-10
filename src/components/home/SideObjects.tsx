import { motion } from "framer-motion";

const spinTransition = {
  repeat: Infinity,
  ease: "linear" as const,
  duration: 50,
};

function SideObjects() {
  return (
    <div>
      <motion.img
        src="/assets/side-4.png"
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="h-[50%] w-[35%] absolute -top-44 -left-48"
        alt=""
      />
      <motion.img
        src="/assets/side-2.png"
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="h-[50%] w-[35%] absolute -bottom-52 -left-56"
        alt=""
      />
      <motion.img
        src="/assets/side-3.png"
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="h-[50%] w-[30%] absolute -top-40 -right-40"
        alt=""
      />
      <motion.img
        src="/assets/side-1.png"
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="h-[50%] w-[30%] absolute -bottom-40 -right-40"
        alt=""
      />
    </div>
  );
}

export default SideObjects;

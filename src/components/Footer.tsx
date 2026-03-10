import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Transition from "./Transition";
const Footer = () => {
  return (
    <div className=" flex justify-between items-center px-6  lg:px-36 h-12 w-screen ">
      <div className=" text-lg lg:text-xl font-medium ">
        Website made by{" "}
        <span className="border-b-2 border-[#1e1d1aeb] pb-0.5 relative">
          Vidhan
          <motion.div
            className="ml-1.5 absolute -right-6 top-1 text-red-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <FaHeart />
          </motion.div>
        </span>
      </div>
      <motion.div
        className=" flex gap-6 lg:gap-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <a href="https://github.com/vidhan-kadu">
          <FaGithub size={30} className=" cursor-pointer hover:scale-105" />
        </a>
        <a href="https://www.linkedin.com/in/vidhan-kadu-892310259/">
          <FaLinkedin size={30} className=" cursor-pointer hover:scale-105" />
        </a>
      </motion.div>
    </div>
  );
};

export default Transition(Footer);

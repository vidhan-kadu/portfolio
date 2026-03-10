"use client";
import { motion } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";
import { LinkPreview } from "../../ui/link-preview";
import AnimateOnView from "../AnimateOnView";
import { moreProjectContent } from "./data";

function MoreProjects() {
  const arrowVariants = {
    rest: { opacity: 0, x: -20 },
    hover: { opacity: 1, x: 0 },
  };

  return (
    <AnimateOnView>
      <div className="w-screen flex flex-col gap-10 justify-center items-center text-primary my-8">
        <div className="lg:w-[75%] w-full px-6 flex flex-col gap-10">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-start"
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-4">
              More Projects
            </h1>
          </motion.div>
        </div>

        <ul className="lg:w-[75%] w-full px-6 flex flex-col gap-2 lg:gap-10 lg:mt-10">
          {moreProjectContent.map((project) => (
            <LinkPreview url={project.url}>
              <motion.li
                key={project.url}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative text-2xl lg:text-4xl font-semibold cursor-pointer pb-2 lg:pb-9 flex justify-between items-center "
              >
                {/* Title wrapped with preview */}
                {project.name}

                {/* Underline effect */}
                <div className="absolute left-0 -bottom-1 h-[1px] bg-[#a9a9a9eb] transition-all w-full"></div>
                <div className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#1e1d1aeb] transition-all duration-700 group-hover:w-full" />

                <FaCircleArrowRight
                  size={30}
                  className=" lg:hidden block absolute right-2"
                />

                {/* Animated Arrow */}
                <motion.div
                  variants={arrowVariants}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <FaCircleArrowRight size={40} className="duration-300" />
                </motion.div>
              </motion.li>
            </LinkPreview>
          ))}
        </ul>
      </div>
    </AnimateOnView>
  );
}

export default MoreProjects;

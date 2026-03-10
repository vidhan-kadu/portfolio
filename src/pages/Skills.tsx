import { motion } from "framer-motion";
import AnimateOnView from "../components/AnimateOnView";
import SkillsContainer from "../components/skills/SkillsContainer";

function Skills() {
  return (
    <div className="w-screen flex flex-col gap-10 justify-center items-center text-primary min-h-screen">
      <div className="lg:w-[75%] w-full px-6 flex flex-col gap-10 mt-10 lg:mt-[15vh] lg:mb-10">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-start"
        >
          <AnimateOnView>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold  mb-4 lg:mt-0 mt-24">
              Skills
            </h1>
          </AnimateOnView>
        </motion.div>
        <div>
          <SkillsContainer />
        </div>
      </div>
    </div>
  );
}

export default Skills;

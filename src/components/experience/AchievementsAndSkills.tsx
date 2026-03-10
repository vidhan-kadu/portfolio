import { motion } from "framer-motion";
import AchievementsList from "./AchievementsList";
import SkillsList from "./SkillsList";
import { containerVariants, itemVariants } from "../../lib/variants";

const AchievementsAndSkills = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
    >
      <motion.div variants={itemVariants}>
        <AchievementsList />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillsList />
      </motion.div>
    </motion.div>
  );
};

export default AchievementsAndSkills;

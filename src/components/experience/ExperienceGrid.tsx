import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";
import { containerVariants } from "../../lib/variants";

const ExperienceGrid = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
  >
    <ProfileCard />
    <StatsCard />
  </motion.div>
);

export default ExperienceGrid;

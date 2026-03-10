import { motion } from "framer-motion";
import { itemVariants } from "../../lib/variants";

const achievements = [
  "Developed 20+ responsive React components from Figma designs, creating scalable and reusable user interfaces.",
  "Optimized Next.js application performance, reducing average page load time to under 1.6 seconds.",
  "Integrated RESTful APIs using Node.js and Express, enabling seamless frontend – backend communication and efficient data management with MySQL databases.",
  "Delivered production-ready features within Agile sprints, collaborating with the team using Git-based workflows.",
];

const AchievementsList = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <motion.div
        className="w-2 h-16 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 2, duration: 0.8 }}
      />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-poppins">
          Key Achievements
        </h2>
      </div>
    </div>
    {achievements.map((achievement, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{ x: 10, backgroundColor: "#fff" }}
        className="flex items-start gap-4 p-4 rounded-2xl transition-colors cursor-pointer group"
      >
        <motion.div
          className="w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mt-2 flex-shrink-0"
          whileHover={{ scale: 1.5 }}
        />
        <p className="text-gray-700 leading-relaxed text-poppins group-hover:text-gray-900 transition-colors">
          {achievement}
        </p>
      </motion.div>
    ))}
  </div>
);

export default AchievementsList;

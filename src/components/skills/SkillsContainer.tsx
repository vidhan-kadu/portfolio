import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { Skills } from "../../types/types";

function SkillsContainer() {
  const skills: Skills[] = [
    { name: "React", link: "/assets/skills/icons8-react-native-50.png" },
    { name: "JavaScript", link: "/assets/skills/icons8-js-50.png" },
    { name: "TypeScript", link: "/assets/skills/icons8-typescript-50.png" },
    { name: "HTML", link: "/assets/skills/icons8-html-5-50.png" },
    { name: "CSS", link: "/assets/skills/icons8-css-48.png" },
    { name: "TailwindCSS", link: "/assets/skills/icons8-tailwindcss-50.png" },
    { name: "Node.js", link: "/assets/skills/icons8-nodejs-50.png" },
    { name: "Express.js", link: "/assets/skills/icons8-express-js-50.png" },
    { name: "MongoDB", link: "/assets/skills/icons8-mongo-db-50.png" },
    { name: "MySQL", link: "/assets/skills/icons8-mysql-logo-50.png" },
    { name: "Git", link: "/assets/skills/icons8-git-50.png" },
    { name: "REST API", link: "/assets/skills/icons8-rest-api-50.png" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative p-10 rounded-3xl backdrop-blur-md border bg-[#fffaf1] border-black shadow-2xl max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-primary text-poppins mb-2">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto rounded-full"></div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.06,
              y: -6,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group flex flex-col items-center"
          >
            <motion.div
              className="relative p-6 bg-white border border-yellow-200 rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-yellow-300"
              whileHover={{
                boxShadow: "0 10px 30px rgba(255, 204, 0, 0.2)",
              }}
            >
              <motion.img
                src={skill.link}
                alt={skill.name}
                className="h-12 w-12 object-contain filter drop-shadow-md transition-all duration-300"
                whileHover={{ rotate: [0, -3, 3, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="mt-2 text-sm font-medium text-primary text-center"
            >
              {skill.name}
            </motion.div>

            <motion.div className="w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mt-1 group-hover:w-full transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillsContainer;

import { motion } from "framer-motion";
import { itemVariants, scaleOnHover } from "../../lib/variants";

const stats = [
  {
    percent: "40%",
    label: "User Engagement",
    desc: "Increase",
    color: "from-blue-400 to-blue-600",
  },
  {
    percent: "25%",
    label: "Dev Time",
    desc: "Reduced",
    color: "from-green-400 to-green-600",
  },
  {
    percent: "2",
    label: "Major Web-Apps",
    desc: "Launched",
    color: "from-purple-400 to-purple-600",
  },
];

const StatsCard = () => (
  <motion.div
    variants={itemVariants}
    whileHover={scaleOnHover}
    className="bg-white rounded-3xl p-6 shadow-lg relative overflow-hidden group cursor-pointer"
  >
    <motion.div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <h3 className="text-2xl font-bold mb-6 text-poppins">Impact</h3>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 10 }}
            className="flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white font-bold`}
            >
              {stat.percent}
            </div>
            <div>
              <p className="font-semibold text-poppins">{stat.label}</p>
              <p className="text-sm text-gray-600 text-poppins">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default StatsCard;

import { motion } from "framer-motion";
import {
  itemVariants,
  // floatingVariants1,
  // floatingVariants2,
  scaleOnHover,
} from "../../lib/variants";
import { FiExternalLink } from "react-icons/fi";

const ProfileCard = () => (
  <motion.div
    variants={itemVariants}
    whileHover={scaleOnHover}
    className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden group cursor-pointer"
  >
    {/* Floating background elements */}
    {/* <motion.div
      variants={floatingVariants1}
      animate="animate"
      className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20"
    />
    <motion.div
      variants={floatingVariants2}
      animate="animate"
      className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-full opacity-20"
    /> */}

    <div className="flex flex-col items-end md:flex-row gap-6 relative">
      {/* Profile Info */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
          >
            <img
              src="/assets/samples/hashedbit_innovations.png"
              alt="company-logo"
            />
          </motion.div>
          <div>
            <a href="https://hashedbitinnovations.com/ ">
              <h2 className="text-2xl font-bold text-poppins flex gap-1 items-center">
              HashedBit
                <FiExternalLink size={15} />
              </h2>
            </a>
            <p className="text-gray-600 text-poppins">HashedBit Innovations</p>
          </div>
        </div>

        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-4 text-poppins"
          whileHover={{ color: "#f59e0b" }}
          transition={{ duration: 0.3 }}
        >
          Software Developer
        </motion.h3>

        {/* Timeline */}
        <div className="mt-6 border-l-4 border-yellow-300 pl-4 space-y-4">
          {/* Freelancer
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-1"
          >
            <p className="text-sm text-gray-500 text-poppins">
              Jun 10, 2025 – Present
            </p>
            <h4 className="text-md font-semibold text-gray-800 text-poppins">
              Freelancer – Frontend Developer
            </h4> */}
          {/* </motion.div> */}
          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-1"
          >
            <p className="text-sm text-gray-500 text-poppins">
              Oct 2025 – Present
            </p>
            <h4 className="text-md font-semibold text-gray-800 text-poppins">
              Intern – Software Developer
            </h4>
          </motion.div>
        </div>
      </div>

      {/* Creative Visual work samples */}
      <div className="flex-1 grid grid-cols-2 gap-3 space-y-1 ">
        {[
          "/assets/samples/image1.png",
          "/assets/samples/image2.png",
          "/assets/samples/image3.png",
          "/assets/samples/image4.png",
        ].map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 2 : -2 }}
            className="aspect-[4/3] bg-white border-gray-300 border-1 rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Visual ${index + 1}`}
              className={`object-cover w-full h-full object-[20%_center] ${
  index === 1 || index === 3 ? "scale-[1.14]" : "scale-100"
  }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProfileCard;

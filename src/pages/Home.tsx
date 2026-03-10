import { useNavigate } from "react-router-dom";
import Button from "../components/home/Button";
import SideObjects from "../components/home/SideObjects";
import { motion } from "framer-motion";
import Transition from "../components/Transition";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen lg:h-[110vh] w-screen bg-primary relative overflow-hidden text-poppins flex justify-center items-center text-primary px-4 sm:px-6 lg:px-8">
      <SideObjects />
      <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-12 h-auto lg:h-[55%] py-8 lg:py-0">
        {/* Content Section */}
        <div className="z-20 flex gap-3 flex-col w-full lg:w-[55%] text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Hi, I'm Vidhan Kadu
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            I turn design into {"code"}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mt-5 font-normal max-w-2xl mx-auto lg:mx-0"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
           Full-stack developer building modern web applications with clean user interfaces and powerful backend systems.
          </motion.p>
          <motion.div
            className="pt-2.5 flex justify-center lg:justify-start"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <Button text="Dive In" click={() => navigate("/main")} />
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[30%] mt-20 lg:mb-5 lg:h-full flex justify-center lg:justify-end order-first lg:order-last"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.img
            loading="lazy"
            animate={{
              y: [-4, 4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            src="/assets/prof1.png"
            alt="profile image"
            className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Transition(Home);

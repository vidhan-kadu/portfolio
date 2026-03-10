import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import SideObjects from "../components/home/SideObjects";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

function Contact() {
  const location = useLocation();

  return (
    <div className=" w-screen bg-primary relative overflow-hidden text-poppins text-primary">
      {location.pathname === "/contact" && <SideObjects />}

      <div className="lg:w-[75%] w-full px-6 py-24 flex flex-col justify-center items-center gap-12 mx-auto">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-semibold text-center"
        >
          Let's Connect
        </motion.h1>

        {/* Animated Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

export default Transition(Contact);

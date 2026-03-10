import { motion } from "framer-motion";
import Transition from "../components/Transition";

function About() {
  return (
    <div className=" w-screen flex justify-center items-center text-primary">
      <div className=" w-[90%] lg:w-[70%] flex flex-col gap-10 mt-[15vh] lg:mt-[20vh] mb-10 ">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className=" text-6xl lg:text-[9rem] mb-5  text-center lg:text-start"
        >
          Vidhan Kadu
        </motion.h1>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className=" text-xl lg:text-3xl"
        >
          Full Stack Web Developer based in Amravati, Maharashtra, India, with a
          background in Electronics and Telecommunication Engineering and a
          strong transition into modern web technologies.
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className=" text-xl"
        >
          I design and develop interactive, responsive web applications with a
          strong emphasis on performance, accessibility, and clean architecture
        </motion.p>
        <motion.p
          className=" text-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Leveraging the MERN stack, I build scalable and production-ready
          solutions that deliver seamless user experiences.
        </motion.p>
        <motion.div
          className=" text-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <h3 className=" font-medium mb-2.5">What I Specialize In :</h3>
          <ul className=" list-disc py-2 px-3.5 flex gap-3 flex-col">
            <li>Full-Stack Web Application Development (MERN Stack)</li>
            <li>Frontend Development with React.js & Responsive UI Engineering</li>
            <li>Real-Time Web Applications (WebRTC, Socket.io)</li>
            <li>Secure Authentication & REST API Integration</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Transition(About);

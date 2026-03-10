import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLinks } from "../types/types.ts";
import { Link } from "react-router-dom";
import Transition from "./Transition.tsx";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-screen h-20 z-10 flex items-center justify-center fixed transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/30" : "bg-transparent"
      }`}
    >
      <motion.ul
        className="flex items-center w-[90%] lg:w-[35%] h-[80%] justify-between"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          scale: { type: "spring", bounce: 0.2 },
        }}
      >
        {NavLinks.map((item) => (
          <Link
            key={item.name}
            className="relative text-xl text-primary font-semibold cursor-pointer group"
            to={item.link}
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#1e1d1aeb] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </motion.ul>
    </div>
  );
};

export default Transition(NavBar);

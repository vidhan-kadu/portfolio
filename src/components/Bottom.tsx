import { motion } from "framer-motion";

function Bottom() {
  return (
    <div className="w-full max-w-4xl px-6 text-center mt-20">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Want to collaborate?
        </h3>
        <p className="text-primary/70 max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities. Let's
          build something amazing together.
        </p>
      </motion.div>
    </div>
  );
}

export default Bottom;

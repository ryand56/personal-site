import * as React from "react";
import { motion } from "framer-motion";

const Index = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ ease: "easeOut", duration: 0.15 }}
    className="mt-24 w-full mb-32"
  >
    <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Ryan.</h1>
    <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
    I'm a Canadian software/web developer.
    </p>
  </motion.div>
);

export default Index;

export { Head } from "../layouts";
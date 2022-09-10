import * as React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            
        </motion.div>
    );
};

export default Contact;

export { Head } from "../layouts";
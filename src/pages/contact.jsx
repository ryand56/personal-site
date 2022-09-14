import * as React from "react";
import { motion } from "framer-motion";

import TimeStatus from "../components/TimeStatus";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Let's chat 💬</h1>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
                Have an inquiry, or just want to connect and be friends? Feel free to get in touch with me
                via <a className="font-semibold" target="_blank" href="https://discord.com/users/660292639412846621">Discord</a>,
                <a className="font-semibold" target="_blank" href="https://twitter.com/elementemerald"> Twitter</a>, or email.
            </p>

            <TimeStatus />
        </motion.div>
    );
};

export default Contact;

export { Head } from "../layouts";
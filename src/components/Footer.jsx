import * as React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const [year, setYear] = React.useState(new Date().getFullYear());

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, y: -15 }}
            animate={{ opacity: 1, x: 0, y: -15 }}
            exit={{ opacity: 0, x: 50, y: -15 }}
            transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="fixed right-6 bottom-0 hidden lg:block"
        >
            <span className="text-gray-600 font-light text-xs">
                &copy; {year} Ryan Omasta - <a className="decoration-dotted underline underline-offset-4"
                    target="_blank"
                    href="https://github.com/elementemerald/personal-site"
                >
                    Source code available on GitHub
                </a>
            </span>
        </motion.div>
    );
};

export default Footer;

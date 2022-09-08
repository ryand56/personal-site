import * as React from "react";
import { motion } from "framer-motion";

import { Link } from "gatsby";
import { classNames } from "../util/classNames";

import ThemeToggle from "./ThemeToggle";

const LandingButton = ({ name, link, selected }) => (
    <Link className={classNames(
        selected
            ? "bg-black/10 dark:bg-[#c8c8dc]/10"
            : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white"
    )} to={link}>
        {name}
    </Link>
);

const Nav = () => (
    <>
        <motion.div className="hidden z-[999] fixed w-[90%] md:w-[50rem] xs:flex flex-row justify-between items-center px-4 py-2 mt-4 md:mt-6 rounded-md bg-white/60 dark:bg-[#12181d]/60 border border-slate-800/50 backdrop-blur-lg">
            <div className="flex flex-row items-center justify-between gap-2">
                <ThemeToggle />
            </div>
        </motion.div>
    </>
);

export default Nav;

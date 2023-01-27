import * as React from "react";
import { useLocation } from "@reach/router";

import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tippy";

import { IoNavigateOutline } from "react-icons/io5";
import {
    SiTwitter,
    SiGithub,
    SiLinkedin,
    SiKeybase,
    SiGitea
} from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

import { Link } from "gatsby";
import { classNames } from "../util/classNames";

import ThemeToggle from "./ThemeToggle";

const LandingButton = ({ name, link, selected }) => (
    <Link className={classNames(
        selected
            ? "bg-black/10 dark:bg-[#c8c8dc]/10"
            : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white",
        "cursor-pointer px-4 py-2 text-sm rounded-md text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-75"
    )} to={link}>
        {name}
    </Link>
);

const MobileLandingButton = ({ name, link, selected, onClick }) => (
    <Link className={classNames(
        selected ? "bg-black/10 dark:bg-[#c8c8dc]/10" : "bg-transparent dark:text-white",
        "flex flex-grow justify-center border border-slate-800/30 cursor-pointer w-auto py-4 text-base text-black/80 dark:text-white/80 transition-all duration-75"
    )} to={link} onClick={onClick}>
        {name}
    </Link>
);

const LinkButton = ({ title, icon, href }) => (
    <Tooltip title={title} position={"top"} duration={250} animation={"perspective"}>
        <a target="_blank" rel="noreferrer" href={href}>
            {icon}
        </a>
    </Tooltip>
);

const Nav = ({ user }) => {
    const windowLoc = useLocation();

    const [mobileMenuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(old => !old);
    };

    const userLoc = user.kv.location;

    /* <div className="flex flex-row items-center justify-center gap-0.5 xs:gap-2">
        <IoNavigateOutline className="w-6 h-6" />
        <span className="font-semibold dark:text-gray-300">{userLoc}</span>
    </div> */

    return (
        <>
            <motion.div className="hidden z-[999] fixed w-[90%] md:w-[50rem] xs:flex flex-row justify-between items-center px-4 py-2 mt-4 md:mt-6 rounded-md bg-white/60 dark:bg-[#12181d]/60 border border-slate-800/50 backdrop-blur-lg">
                <div className="flex flex-row items-center justify-between gap-2">
                    <ThemeToggle />
                    <LandingButton name="Home" link="/" selected={windowLoc.pathname === "/"} />
                    <LandingButton name="Contact" link="/contact" selected={windowLoc.pathname === "/contact"} />
                </div>

                <div className="flex flex-row items-center justify-center gap-2 xs:gap-4">
                    <LinkButton
                        title={userLoc}
                        href={"https://www.google.ca/maps/place/Alberta"}
                        icon={<IoNavigateOutline className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        title={"GitHub"}
                        href={"https://github.com/elementemerald"}
                        icon={<SiGithub className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        title={"Gitea"}
                        href={"https://git.ryand.ca"}
                        icon={<SiGitea className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        title={"Twitter"}
                        href={"https://twitter.com/elementemerald"}
                        icon={<SiTwitter className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        title={"LinkedIn"}
                        href={"https://linkedin.com/in/ryand56"}
                        icon={<SiLinkedin className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        title={"Keybase"}
                        href={"https://keybase.io/ryand56"}
                        icon={<SiKeybase className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        title={"Email"}
                        href={"mailto:ryand@emeraldsys.xyz"}
                        icon={<FiMail className="w-6 h-6 cursor-pointer" />}
                    />
                </div>
            </motion.div>

            <motion.div className="xs:hidden z-[990] fixed w-full flex flex-row justify-between items-center px-4 py-3 bg-white/60 dark:bg-[#12181d]/60 border-b border-slate-800/50 backdrop-blur-lg">
                <div className="flex flex-row items-center justify-between gap-2">
                    <ThemeToggle />
                </div>

                <div className="flex flex-row items-center justify-center">
                    <button onClick={toggleMenu} className="h-9 w-9 flex items-center justify-center">
                        {!mobileMenuOpen ? <HiMenu className="w-7 h-7" /> : <HiX className="w-7 h-7" />}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            key="NavBackdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="z-[500] fixed w-full h-screen overflow-hidden backdrop-blur-md bg-black/10 flex flex-col items-center justify-content"
                        />

                        <motion.div
                            key="NavMenu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="flex flex-col items-center justify-start mt-16 fixed w-full h-auto z-[700] bg-white dark:bg-[#090c0f] border-x border-b border-slate-800/30"
                        >
                            <div className="flex flex-row w-full justify-evenly">
                                <MobileLandingButton
                                    name="Home"
                                    link="/"
                                    selected={windowLoc.pathname === "/"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Contact"
                                    link="/contact"
                                    selected={windowLoc.pathname === "/contact"}
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>

                            <div className="flex flex-row items-center justify-center gap-6 py-4">
                                <LinkButton
                                    href={"https://github.com/elementemerald"}
                                    icon={<SiGithub className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://git.ryand.ca"}
                                    icon={<SiGitea className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://twitter.com/elementemerald"}
                                    icon={<SiTwitter className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://linkedin.com/in/ryand56"}
                                    icon={<SiLinkedin className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://keybase.io/ryand56"}
                                    icon={<SiKeybase className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"mailto:ryand@emeraldsys.xyz"}
                                    icon={<FiMail className="w-6 h-6 cursor-pointer" />}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
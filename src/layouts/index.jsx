import "../styles/global.css";
import "react-tippy/dist/tippy.css";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";

const Layout = ({ children }) => (
    <>
        <div className="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#112222] min-h-screen">
            <Nav />
            <div className="w-[80%] md:w-[45rem]">
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </div>
        </div>
    </>
);

export default Layout;

export const Head = () => (
    <>
        <title>ryand</title>
        <link rel="shortcut icon" type="image/png" href="https://dcdn.dstn.to/avatars/660292639412846621" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="keywords"
            content="ryand, Ryan Omasta, Ryan, Omasta, web developer, software developer, github, javascript"
        />
        <meta name="description" content="Ryan Omasta - Software/Web Developer" />
        <meta name="author" content="Ryan Omasta" />
    </>
);

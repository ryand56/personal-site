import "../styles/global.css";
import "react-tippy/dist/tippy.css";

import * as React from "react";
import { useLanyardWs } from "use-lanyard";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import ActivityList from "../components/ActivityList";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    const user = useLanyardWs("660292639412846621");

    return (
        <>
            <div className="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#112222] min-h-screen">
                {user && <Nav user={user} />}
                <div className="w-[80%] md:w-[45rem]">
                    <AnimatePresence mode="wait">
                        {children}
                    </AnimatePresence>
                </div>
                {user && <ActivityList user={user} />}
                <Footer />
            </div>
        </>
    );
};

export default Layout;

export const Head = () => (
    <>
        <title>ryand</title>
        <link rel="shortcut icon" type="image/png" href="https://dcdn.dstn.to/avatars/660292639412846621.png" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="keywords"
            content="ryand, Ryan Omasta, Ryan, Omasta, web developer, software developer, github, javascript"
        />
        <meta name="description" content="Ryan Omasta - Software/Web Developer" />
        <meta name="author" content="Ryan Omasta" />
    </>
);

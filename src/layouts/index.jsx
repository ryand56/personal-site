import "../styles/global.css";
import "react-tippy/dist/tippy.css";

import * as React from "react";
import { useLanyardWS } from "use-lanyard";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import ActivityList from "../components/ActivityList";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    const user = useLanyardWS("660292639412846621", {
        initialData: {
            kv: {
                location: "Lanyard offline - No information available"
            },
            activities: []
        }
    });

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
            content="ryand, Ryan O., Ryan, O., web developer, software developer, github"
        />
        <meta name="description" content="Ryan O - Software/Web Developer" />
        <meta name="author" content="Ryan O" />
    </>
);

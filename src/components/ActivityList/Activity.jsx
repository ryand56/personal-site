import * as React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tippy";

const padTo2Digits = num => {
    return num.toString().padStart(2, '0');
};
const msToHourMinSeconds = millis => {
    let seconds = Math.floor(millis / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${hours >= 1 ? `${padTo2Digits(hours)}:` : ""}${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};

const Activity = ({
    appId,
    name,
    details,
    state,
    timestamps,
    assets,
    current
}) => {
    const [elapsed, setElapsed] = React.useState("00:00");
    const [left, setLeft] = React.useState("00:00");

    React.useEffect(() => {
        if (timestamps.start)
        {
            const timeElapsed = current - timestamps.start;
            setElapsed(msToHourMinSeconds(timeElapsed));
        }

        if (timestamps.end)
        {
            const timeLeft = timestamps.end - current;
            setLeft(msToHourMinSeconds(timeLeft));
        }
    }, [current, timestamps]);

    return (
        appId && <motion.div
            initial={{ opacity: 0, x: -50, y: -15 }}
            animate={{ opacity: 1, x: 0, y: -15 }}
            exit={{ opacity: 0, x: -50, y: -15 }}
            transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="left-6 bottom-0 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start"
        >
            <h1 className="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center">
                Doing something
            </h1>

            <div className="w-full h-[6rem] flex flex-row items-center justify-start">
                {assets
                    ? <>
                        <Tooltip
                            title={assets.large_text}
                            position={"top"}
                            duration={250}
                            animation={"perspective"}
                        >
                            <img
                                src={`https://cdn.discordapp.com/app-assets/${appId}/${assets.large_image}.png?size=1024`}
                                className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
                                alt={assets.large_text}
                            />
                        </Tooltip>
                        <div className="w-56 h-full flex flex-col items-start justify-center">
                            <p className="w-full font-medium text-gray-900 dark:text-[#e1eafd] truncate hover:overflow-visible">
                                {name}
                            </p>
                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate hover:overflow-visible">
                                {details}
                            </p>
                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate hover:overflow-visible">
                                {state}
                            </p>
                            {(() => {
                                if (timestamps)
                                {
                                    if (timestamps.start && !timestamps.end)
                                    {
                                        return (
                                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-light text-sm truncate hover:overflow-visible">
                                                {elapsed} elapsed
                                            </p>
                                        );
                                    }
                                    else if (timestamps.end && !timestamps.start)
                                    {
                                        return (
                                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-light text-sm truncate hover:overflow-visible">
                                                {left} left
                                            </p>
                                        );
                                    }
                                }
                            })()}
                        </div>
                    </>
                    : <>
                        <Tooltip
                            title={name}
                            position={"top"}
                            duration={250}
                            animation={"perspective"}
                        >
                            <img
                                src={`https://dcdn.dstn.to/app-icons/${appId}?size=1024`}
                                className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
                                alt={name}
                            />
                        </Tooltip>
                        <div className="w-56 h-full flex flex-col items-start justify-center">
                            <p className="w-full font-medium text-gray-900 dark:text-[#e1eafd] truncate hover:overflow-visible">
                                {name}
                            </p>
                            {(() => {
                                if (timestamps)
                                {
                                    if (timestamps.start && !timestamps.end)
                                    {
                                        return (
                                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-light text-sm truncate hover:overflow-visible">
                                                {elapsed} elapsed
                                            </p>
                                        );
                                    }
                                    else if (timestamps.end && !timestamps.start)
                                    {
                                        return (
                                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-light text-sm truncate hover:overflow-visible">
                                                {left} left
                                            </p>
                                        );
                                    }
                                }
                            })()}
                        </div>
                    </>}
            </div>
        </motion.div>
    );
};

export default Activity;
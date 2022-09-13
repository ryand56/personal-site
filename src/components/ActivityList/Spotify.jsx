import * as React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tippy";

const msToMinSeconds = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const Spotify = ({ src, current }) => {
    const [elapsed, setElapsed] = React.useState(NaN);
    const [elapsedText, setElapsedText] = React.useState("");

    const [length, setLength] = React.useState(NaN);
    const [lengthText, setLengthText] = React.useState("");

    React.useEffect(() => {
        console.log(src);
        if (src)
        {
            const length = src.timestamps.end - src.timestamps.start;
            setLength(length);
            setLengthText(msToMinSeconds(length));
        }
        else
        {
            setLength(NaN);
            setLengthText("");
        }
    }, [src]);

    const [timeWidth, setTimeWidth] = React.useState("0%");

    React.useEffect(() => {
        if (src)
        {
            const timeElapsed = current - src.timestamps.start;
            const width = `${Math.min((timeElapsed / length) * 100, 100)}%`;
            setTimeWidth(width);
            setElapsed(timeElapsed);
            setElapsedText(msToMinSeconds(timeElapsed));
        }
        else
        {
            setTimeWidth("0%");
            setElapsed(NaN);
            setElapsedText("");
        }
    }, [current]);

    return (
        src && <motion.div
            initial={{ opacity: 0, x: -50, y: -10 }}
            animate={{ opacity: 1, x: 0, y: -10 }}
            exit={{ opacity: 0, x: -50, y: -10 }}
            transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="left-6 bottom-0 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start"
        >
            <h1 className="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center">
                Listening to Spotify
                <span className="ml-2 w-2 h-2">
                    <span className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
                    <span className="absolute w-2 h-2 bg-red-600 rounded-full" />
                </span>
            </h1>

            <div className="w-full h-[6rem] flex flex-row items-center justify-start">
                <Tooltip title={src.album} position={"top"} duration={250} animation={"perspective"}>
                    <img
                        src={src.album_art_url}
                        className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
                        alt={src.album}
                    />
                </Tooltip>
                <div className="w-56 h-full flex flex-col items-start justify-center">
                    <a
                        href={`https://open.spotify.com/track/${src.track_id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate hover:overflow-visible"
                    >
                        {src.song}
                    </a>
                    <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate hover:overflow-visible">
                        {src.artist}
                    </p>
                    <div className="w-full flex flex-row gap-2">
                        <p className="text-gray-600 dark:text-[#cad2e0] font-light text-sm">
                            {elapsedText}
                        </p>
                        <div className="w-full translate-y-[0.4rem] h-1 bg-transparent min-w-[4px] border border-white rounded-sm mb-1">
                            <div className="h-full bg-white rounded-sm" style={{ width: timeWidth }} />
                        </div>
                        <p className="text-gray-600 dark:text-[#cad2e0] font-light text-sm">
                            {lengthText}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Spotify;
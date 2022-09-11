import * as React from "react";
import { useLanyardWs } from "use-lanyard";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "react-tippy";

const msToMinSeconds = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const Spotify = () => {
    const user = useLanyardWs("660292639412846621");

    const [current, setCurrent] = React.useState(new Date().getTime());

    const [elapsed, setElapsed] = React.useState(NaN);
    const [elapsedText, setElapsedText] = React.useState("");

    const [length, setLength] = React.useState(NaN);
    const [lengthText, setLengthText] = React.useState("");

    React.useEffect(() => {
        console.log(user);
        if (user && user.spotify)
        {
            const length = user.spotify.timestamps.end - user.spotify.timestamps.start;
            setLength(length);
            setLengthText(msToMinSeconds(length));
        }
    }, [user]);

    React.useEffect(() => {
        let interval = setInterval(() => {
            setCurrent(new Date().getTime());
        }, 900);

        return () => {
            clearInterval(interval);
            interval = 0;
        };
    }, []);

    const [timeWidth, setTimeWidth] = React.useState("0%");

    React.useEffect(() => {
        if (user && user.spotify)
        {
            const timeElapsed = current - user.spotify.timestamps.start;
            let width = `${Math.min((timeElapsed / length) * 100, 100)}%`;
            setTimeWidth(width);
            setElapsed(timeElapsed);
            setElapsedText(msToMinSeconds(timeElapsed));
        }
    }, [current]);

    return (
        <AnimatePresence>
            {(user && user.spotify) && <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: -100 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
                className="fixed left-6 -bottom-20 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start"
            >
                <h1 className="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center">
                    Listening to Spotify
                    <span className="ml-2 w-2 h-2">
                        <span className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
                        <span className="absolute w-2 h-2 bg-red-600 rounded-full" />
                    </span>
                </h1>

                <div className="w-full h-[6rem] flex flex-row items-center justify-start">
                    <Tooltip title={user.spotify.album} position={"top"} duration={250} animation={"perspective"}>
                        <img
                            src={user.spotify.album_art_url}
                            className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
                            alt={user.spotify.album}
                        />
                    </Tooltip>
                    <div className="w-56 h-full flex flex-col items-start justify-center">
                        <Tooltip title={user.spotify.song} position={"top"} duration={250} animation={"perspective"}>
                            <a
                                href={`https://open.spotify.com/track/${user.spotify.track_id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate"
                            >
                                {user.spotify.song}
                            </a>
                        </Tooltip>
                        <Tooltip title={user.spotify.artist} position={"top"} duration={250} animation={"perspective"}>
                            <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
                                {user.spotify.artist}
                            </p>
                        </Tooltip>
                        <div className="w-full translate-y-[0.3rem] h-1 bg-[#4f545c]/[.16] min-w-[4px] rounded-sm mb-1">
                            <Tooltip
                                position={"top"}
                                duration={250}
                                animation={"perspective"}
                                useContext={true}
                                html={(
                                    <div>
                                        {elapsedText} / {lengthText}
                                    </div>
                                )}
                            >
                                <div className="h-full bg-white rounded-sm" style={{ width: timeWidth }} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
    );
};

export default Spotify;
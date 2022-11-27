import * as React from "react";

const TimeStatus = () => {
    const [time, setTime] = React.useState("00:00:00 P.M.");
    const [awake, setAwake] = React.useState(true);

    const updateTime = () => {
        let date = new Date();
        let current = date.toLocaleString("en-US", {
            timeZone: "America/Edmonton"
        });

        let hours = date.getHours();
        let isTwo = ((hours >= 10 && hours < 13) || hours >= 22 || hours <= 0);
        
        setTime(`${current.slice(isTwo ? -11 : -10, -6)}${current.slice(-3, -1)}.M.`);

        let dayOfWeek = date.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            if (hours >= 23 || hours <= 8) setAwake(false);
        } else {
            if (hours >= 2 && hours < 10) setAwake(false);
        }
    };

    React.useEffect(() => {
        updateTime();
        let interval = setInterval(updateTime, 900);

        return () => {
            clearInterval(interval);
            interval = 0;
        };
    }, []);

    return (
        <>
            <p className="text-black/50 dark:text-white/50 text-sm mb-10">
                It's currently <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> for me, so I'm
                probably{" "}
                <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake" : "sleeping"}</span>. I'll
                get back to you soon.
                <br />
                {!awake &&
                    <span>
                        Any urgent messages can be forwarded to <a className="font-semibold text-black/60 dark:text-white/60" target="_blank" href="mailto:urgent@emeraldsys.xyz">urgent@emeraldsys.xyz</a>.
                        I will look at my inbox as soon as I wake up.
                    </span>
                }
            </p>
        </>
    );
};

export default TimeStatus;
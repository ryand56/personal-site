import * as React from "react";
import { Tooltip } from "react-tippy";

import { useYearsAgo } from "../hooks/useTimeAgo";

const date = new Date("07/06/2004");

const Age = () => {
    const age = useYearsAgo(date);

    return (
        <Tooltip title={age.toFixed(8)} position={"top"} duration={250} animation={"perspective"}>
            <span className="text-gray-900 dark:text-gray-400 underline" alt={age.toString()}>
                {Math.floor(age)}
            </span>
        </Tooltip>
    );
};

export default Age;

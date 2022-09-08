import * as React from "react";
import { Tooltip } from "react-tippy";

export const TechItem = ({ name, icon }) => {
    return (
        <li className="flex p-2">
            <Tooltip title={name} position={"top"} duration={250} animation={"perspective"}>
                <span>{icon({ className: "h-6 w-6" })}</span>
            </Tooltip>
        </li>
    );
};
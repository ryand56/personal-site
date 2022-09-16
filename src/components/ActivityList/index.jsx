import * as React from "react";
import { AnimatePresence } from "framer-motion";

import Spotify from "./Spotify";
import Activity from "./Activity";

const ActivityList = ({ user }) => {
    const [current, setCurrent] = React.useState(new Date().getTime());

    React.useEffect(() => {
        let interval = setInterval(() => {
            setCurrent(new Date().getTime());
        }, 900);

        return () => {
            clearInterval(interval);
            interval = 0;
        };
    }, []);

    return (
        user && <div className="fixed left-6 bottom-0 w-[20rem] h-[7rem] hidden lg:flex flex-col gap-2 items-end justify-end">
            <AnimatePresence mode="popLayout">
                {user.spotify && <Spotify key={user.spotify.song} src={user.spotify} current={current} />}
                {user.activities.map(activity => activity.type === 0 &&
                    <Activity
                        key={activity.name}
                        appId={activity.application_id}
                        name={activity.name}
                        details={activity.details}
                        state={activity.state}
                        timestamps={activity.timestamps}
                        assets={activity.assets}
                        current={current}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ActivityList;
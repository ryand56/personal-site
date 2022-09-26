import * as React from "react";

const getYearsAgo = date => {
    if (date instanceof Date)
    {
        let timestamp = new Date().getTime() - date.getTime();
        timestamp /= 1000 * 60 * 60 * 24 * 365.25;
        return timestamp;
    }
};

export const useYearsAgo = date => {
    const [years, setYears] = React.useState(getYearsAgo(date));

    React.useEffect(() => {
        let yearTimer = setInterval(() => setYears(getYearsAgo(date)), 1000);
        return () => {
            clearInterval(yearTimer);
            yearTimer = 0;
        };
    }, [date]);

    return years;
};
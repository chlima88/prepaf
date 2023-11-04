import { useEffect, useState } from "react";

type CalendarData = {
    key: number;
    date: number;
    itemsPosition: string;
    filler: boolean;
}[];

export function useCalendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [calendarData, setCalendarData] = useState([] as CalendarData);

    useEffect(() => {
        createCalendar();
    }, [month]);

    function createCalendar() {
        const GRIDSIZE = 49;
        const calendarDays = [];
        const firstWeekDay = new Date(year, month, 1).getDay();
        const lastMonthDay = new Date(year, month + 1, 0).getDate();

        for (
            let dayCounter = firstWeekDay * -1 + 1;
            calendarDays.length < GRIDSIZE;
            dayCounter++
        ) {
            const date = new Date(year, month, dayCounter).valueOf();
            let itemsPosition = "center";
            if (calendarDays.length % 7 == 0) itemsPosition = "start";
            if ((calendarDays.length + 1) % 7 == 0) itemsPosition = "end";

            let filler = true;
            if (dayCounter > 0 && dayCounter <= lastMonthDay) filler = false;

            calendarDays.push({
                date,
                key: calendarDays.length,
                itemsPosition,
                filler,
            });
        }

        setCalendarData(calendarDays);
    }

    return { calendarData, month, setMonth, year, setYear };
}

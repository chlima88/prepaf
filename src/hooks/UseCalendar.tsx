import { CalendarDay, CalendarFill } from "components";
import { ReactNode, useEffect, useState } from "react";

export function useCalendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [calendar, setCalendar] = useState([] as (ReactNode | JSX.Element)[]);

    useEffect(() => {
        createCalendar();
    }, [month]);

    function createCalendar() {
        const GRIDSIZE = 49;
        const date = new Date(year, month);
        const calendarDays = [];

        const firstWeekDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        ).getDay();

        const lastMonthDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();

        for (let i = 0; i < 7; i++) {
            const weekday = [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sabado",
            ];
            calendarDays.push(
                <p
                    key={calendarDays.length}
                    className={` text-center font-semibold min-w-[50px] h-10 p-2 truncate`}
                >
                    {weekday[i]}
                </p>
            );
        }

        for (let dayCounter = 0; dayCounter < firstWeekDay; dayCounter++) {
            calendarDays.push(<CalendarFill key={calendarDays.length} />);
        }

        for (let dayCounter = 1; dayCounter <= lastMonthDay; dayCounter++) {
            const date = new Date(year, month, dayCounter).valueOf();

            let itemsPosition = "center";
            if (calendarDays.length % 7 == 0) itemsPosition = "start";
            if ((calendarDays.length + 1) % 7 == 0) itemsPosition = "end";

            calendarDays.push(
                <CalendarDay
                    key={calendarDays.length}
                    date={date}
                    itemsPosition={itemsPosition}
                />
            );
        }

        while (calendarDays.length < GRIDSIZE) {
            calendarDays.push(<CalendarFill key={calendarDays.length} />);
        }

        setCalendar(calendarDays);
    }

    return { calendar, month, setMonth, year, setYear };
}

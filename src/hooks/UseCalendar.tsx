import { CalendarDay } from "components";
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
        const calendarDays = [];
        const firstWeekDay = new Date(year, month, 1).getDay();
        const lastMonthDay = new Date(year, month + 1, 0).getDate();

        [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
        ].map((weekday) => {
            calendarDays.push(
                <p
                    key={calendarDays.length}
                    className={` text-center font-semibold min-w-[50px] h-10 p-2 truncate`}
                >
                    {weekday}
                </p>
            );
        });

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

            calendarDays.push(
                <CalendarDay
                    date={date}
                    key={calendarDays.length}
                    itemsPosition={itemsPosition}
                    filler={filler}
                />
            );
        }

        setCalendar(calendarDays);
    }

    return { calendar, month, setMonth, year, setYear };
}

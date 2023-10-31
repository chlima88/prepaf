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
                    className={` text-center font-semibold min-w-[50px] h-10 p-2`}
                >
                    {weekday[i]}
                </p>
            );
        }

        for (let i = 0; i < firstWeekDay; i++) {
            calendarDays.push(<CalendarFill />);
        }

        for (let i = 1; i <= lastMonthDay; i++) {
            calendarDays.push(
                <CalendarDay day={i} month={month} year={year} />
            );
        }

        while (calendarDays.length < GRIDSIZE) {
            calendarDays.push(<CalendarFill />);
        }

        setCalendar(calendarDays);
    }

    return { calendar, month, setMonth, year, setYear };
}

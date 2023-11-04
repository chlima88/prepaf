import { CalendarDay } from "components/calendar";
import { CalendarData } from "types";

type Props = {
    data: CalendarData;
};

export function CalendarGrid({ data }: Props) {
    return (
        <div className="grid grid-cols-7 gap-1 relative select-none">
            {[
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sabado",
            ].map((weekday) => (
                <p
                    key={weekday}
                    className={` text-center font-semibold min-w-[50px] h-10 p-2 truncate`}
                >
                    {weekday}
                </p>
            ))}
            {data.map((day) => (
                <CalendarDay
                    date={day.date}
                    key={day.key}
                    itemsPosition={day.itemsPosition}
                    filler={day.filler}
                />
            ))}
        </div>
    );
}

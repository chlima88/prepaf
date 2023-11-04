import { useContext } from "react";

import { ModalContext } from "contexts";
import { ActivityElement } from "components/calendar";
import { useSchedulesDatabase } from "hooks";

type Props = {
    itemsPosition?: string;
    date: number;
    filler: boolean;
};

CalendarDay.defaultProps = {
    filler: false,
};

export function CalendarDay({ itemsPosition, date, filler }: Props) {
    const { setSelectedSchedule } = useContext(ModalContext);
    const { getSchedule } = useSchedulesDatabase();

    const dayIsToday =
        new Date(date).toDateString() == new Date().toDateString();
    const schedule = getSchedule(date);

    function handleClick() {
        !filler && setSelectedSchedule({ date });
    }

    return (
        <div
            className="min-w-[50px] calendarday_container h-20 md:h-36 rounded 
            overflow-hidden hover:overflow-visible cursor-pointer"
        >
            <div
                className={` h-20 min-h-[80px] md:min-h-[144px] hover:h-fit hover:relative transition-all
                bg-prepaf-gray-200 rounded p-2 ${
                    !filler && "hover:bg-prepaf-orange-100"
                }`}
                onClick={handleClick}
            >
                <p
                    className={`w-full text-center font-medium
                    ${dayIsToday && "text-prepaf-red-600"}
                    ${filler && "text-gray-400"}`}
                >{`${new Date(date).getDate()}`}</p>
                {schedule && (
                    <ActivityElement
                        key={schedule.day}
                        schedule={schedule}
                        itemsPosition={itemsPosition}
                    />
                )}
            </div>
        </div>
    );
}

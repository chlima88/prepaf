import { useContext } from "react";

import { GlobalContext, ModalContext } from "contexts";
import { ActivityElement } from "components";

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
    const { schedules } = useContext(GlobalContext);

    const dayIsToday =
        new Date(date).toDateString() == new Date().toDateString();

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
                {schedules.map(
                    (schedule) =>
                        schedule.day == date && (
                            <ActivityElement
                                key={schedule.day}
                                schedule={schedule}
                                itemsPosition={itemsPosition}
                            />
                        )
                )}
            </div>
        </div>
    );
}

import { useContext } from "react";

import { GlobalContext } from "contexts/GlobalContext";
import { ActivityElement } from "components";

type Props = {
    itemsPosition: string;
    date: number;
};

export function CalendarDay({ itemsPosition, date }: Props) {
    const { modalDay, showModal, setShowModal, schedules } =
        useContext(GlobalContext);

    const dayIsToday =
        new Date(date).toDateString() == new Date().toDateString();

    function handleClick() {
        setShowModal(!showModal);
        modalDay.current = date;
    }

    return (
        <div
            className="min-w-[50px] calendarday_container h-20 md:h-36 rounded 
            overflow-hidden hover:overflow-visible cursor-pointer"
        >
            <div
                className={` h-20 min-h-[80px] md:min-h-[144px] hover:h-fit hover:relative transition-all
                bg-prepaf-gray-200 rounded p-2 hover:bg-prepaf-orange-100`}
                onClick={handleClick}
            >
                <p
                    className={`w-full text-center font-medium ${
                        dayIsToday ? "text-prepaf-red-600" : ""
                    }`}
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

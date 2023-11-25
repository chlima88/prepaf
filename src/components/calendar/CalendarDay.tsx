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
    const { selectedSchedule, setSelectedSchedule } = useContext(ModalContext);
    const {
        getSchedule,
        updateSchedule,
        createSchedule,
        deleteActivity,
        deleteSchedule,
        updateActivitySchedule,
    } = useSchedulesDatabase();

    const dayIsToday =
        new Date(date).toDateString() == new Date().toDateString();
    const schedule = getSchedule(date);

    function handleClick() {
        !filler && setSelectedSchedule({ date, eventType: "click" });
    }

    function handleDrop(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        const srcCalendarDay = JSON.parse(
            event.dataTransfer.getData("text/plain")
        );
        // console.log("CD Drop: id -> ", data.aid);

        console.log(
            "data -> from:",
            new Date(selectedSchedule.date).getDate() + 1,
            " to: ",
            new Date(date).getDate() + 1
        );

        const oldSchedule = getSchedule(srcCalendarDay.date);
        const activity = oldSchedule?.activities.find(
            (activity) => activity.id == srcCalendarDay.activityId
        )!;
        // console.log(
        //     "oldSched -> ",
        //     new Date(Number(oldSchedule?.date)).getDate() + 1
        // );
        // console.log("act -> ", activity);

        const { title, category, startTime, endTime, players, description } =
            activity;

        // console.log("1 ", getSchedule(date));

        deleteSchedule(oldSchedule?.date!);
        // deleteActivity(oldSchedule?.date!, srcCalendarDay.activityId);
        if (getSchedule(date)) {
            updateSchedule(
                {
                    title,
                    category,
                    startTime,
                    endTime,
                    players,
                    description,
                },
                date
            );
        } else {
            createSchedule(
                {
                    title,
                    category,
                    startTime,
                    endTime,
                    players,
                    description,
                },
                date
            );
        }

        // console.log("2 ", getSchedule(date));
        // const newSched = getSchedule(date);
        // console.log(date, newSched);
        // console.log(schedules);

        // event.currentTarget.appendChild(div as Node);
    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
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
                // className={` h-20 min-h-[80px] md:min-h-[144px] hover:h-fit hover:relative transition-all
                // bg-prepaf-gray-200 rounded p-2 ${
                //     !filler && "hover:bg-prepaf-orange-100"
                // }`}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDrop={(event) => {
                    setSelectedSchedule({
                        date: date,
                        activityId: selectedSchedule.activityId,
                        eventType: "drag",
                    });
                    handleDrop(event);
                }}
            >
                <p
                    className={`w-full text-center font-medium
                    ${dayIsToday && "text-prepaf-red-600"}
                    ${filler && "text-gray-400"}`}
                >{`${new Date(date).getDate()}`}</p>
                {schedule && (
                    <ActivityElement
                        key={schedule.date}
                        schedule={schedule}
                        itemsPosition={itemsPosition}
                    />
                )}
            </div>
        </div>
    );
}

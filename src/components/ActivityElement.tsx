import { useContext } from "react";

import { categoryOptions } from "data/db";
import { Schedule, ModalContext } from "contexts";

export function ActivityElement({
    schedule,
    itemsPosition,
}: {
    schedule: Schedule;
    itemsPosition?: string;
}) {
    const { setSelectedSchedule } = useContext(ModalContext);

    return (
        <>
            {schedule.activities.map((activity) => {
                const style = categoryOptions.find(
                    (category) =>
                        category.value.toLowerCase() ==
                        activity.category.toLowerCase()
                )!;

                return (
                    <div
                        key={activity.id}
                        className={`group hover:flex md:flex w-full justify-${itemsPosition}`}
                    >
                        <div
                            className={`md:hidden group-hover:hidden h-3 mb-1 bg-${style.color} 
                            border border-prepaf-gray-200 rounded hover:cursor-pointer hover:z-20`}
                        ></div>
                        <div
                            className={`hidden md:flex-none md:block group-hover:inline-block w-full 
                            max-xl:hover:w-[152px] transition-all p-1.5 mb-1 
                            bg-${style.color} text-${style.textColor} border border-prepaf-gray-200
                            rounded hover:cursor-pointer group hover:z-20`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSchedule({
                                    date: schedule.day,
                                    activityId: activity.id,
                                });
                            }}
                        >
                            <p className="hidden md:block group-hover:block font-medium truncate">
                                {activity.title}
                            </p>
                            <div className="hidden md:block group-hover:block text-xs truncate">
                                {activity.startTime
                                    ? activity.endTime
                                        ? `${activity.startTime} - ${activity.endTime}`
                                        : `A partir de ${activity.startTime}`
                                    : activity.endTime
                                    ? `Até ${activity.endTime}`
                                    : "Horário não definido"}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

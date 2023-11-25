import { useContext, useRef, useState } from "react";

import { categoryOptions } from "data/db";
import { ModalContext } from "contexts";
import { Activity, Schedule } from "types";

export function ActivityElement({
    schedule,
    itemsPosition,
}: {
    schedule: Schedule;
    itemsPosition?: string;
}) {
    const { setSelectedSchedule } = useContext(ModalContext);
    const activityRef = useRef<HTMLDivElement>(null);

    function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();

        const { clientX, clientY, currentTarget } = event;
        window.onmouseup = () => handleMouseUp(currentTarget);

        const coord = {
            x: clientX,
            y: clientY,
        };
        window.onmousemove = (event) =>
            dragElement(
                event,
                { ...coord },
                currentTarget,
                (dragX: any, dragY: any) => {
                    coord.x = dragX;
                    coord.y = dragY;
                }
            );
    }

    function handleMouseUp(currentTarget: HTMLDivElement): void {
        // currentTarget.classList.remove("absolute");
        window.onmouseup = null;
        window.onmousemove = null;
    }

    function handleDrag(
        event: React.DragEvent<HTMLDivElement>,
        dragActivity: { date: number; activityId: string }
    ) {
        // setSelectedSchedule({
        //     date: dragActivity.sd,
        //     activityId: dragActivity.aid,
        //     eventType: "drag",
        // });
        // console.log("AE Drag: id -> ", dragActivity);
        event.dataTransfer.setData("text/plain", JSON.stringify(dragActivity));
    }

    function dragElement(
        event: MouseEvent,
        coord: { x: number; y: number },
        currentTarget: HTMLDivElement,
        callback: Function
    ) {
        event.preventDefault();

        callback(event.clientX, event.clientY);
        let diffX = event.clientX - coord.x;
        let diffY = event.clientY - coord.y;
        currentTarget.classList.add("absolute");
        currentTarget.classList.add("w-fit");
        currentTarget.style.left = currentTarget.offsetLeft + diffX + "px";
        currentTarget.style.top = currentTarget.offsetTop + diffY + "px";
    }

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
                        ref={activityRef}
                        key={activity.id}
                        className={` group hover:flex md:flex w-full justify-${itemsPosition}`}
                        // style={{ top: "19px", left: "-14px", width: "100px" }}
                        style={{ width: "100px" }}
                        // onDragStart={() =>
                        //     setSelectedSchedule({
                        //         date: schedule.date,
                        //         activityId: activity.id,
                        //         eventType: "drag",
                        //     })
                        // }
                        onDragStart={(event) =>
                            handleDrag(event, {
                                date: schedule.date,
                                activityId: activity.id,
                            })
                        }
                        // onMouseDown={handleMouseDown}
                        draggable={true}
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
                                    date: schedule.date,
                                    activityId: activity.id,
                                    eventType: "click",
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

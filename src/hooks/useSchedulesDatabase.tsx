import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { ModalContext } from "contexts";
import { activitiesDb } from "data/db";
import { Activity, CreateActivityDTO, Schedule } from "types";

export function useSchedulesDatabase() {
    const [schedules, setSchedules] = useState<Schedule[]>([...activitiesDb]);
    const { selectedSchedule } = useContext(ModalContext);

    function getSchedule(scheduleDate: number) {
        return schedules.find(
            (schedule) => schedule.day == new Date(scheduleDate).valueOf()
        );
    }
    function createSchedule(activityDTO: CreateActivityDTO) {
        const newSchedule: Schedule = {
            day: selectedSchedule.date,
            activities: [createActivity(activityDTO)],
        };
        setSchedules([...schedules, newSchedule]);
    }

    function updateSchedule(activityDTO: CreateActivityDTO) {
        const storedSchedule = schedules.find(
            (schedule) => schedule.day == selectedSchedule.date
        )!;
        const scheduleIndex = schedules.indexOf(storedSchedule);

        const updatedActivities = selectedSchedule.activityId
            ? updateActivity(activityDTO, storedSchedule.activities)
            : [...storedSchedule.activities, createActivity(activityDTO)];

        storedSchedule.activities = [...updatedActivities];

        const updatedSchedules = schedules;
        updatedSchedules.splice(scheduleIndex, 1);
        setSchedules([...updatedSchedules, storedSchedule]);
    }

    function createActivity(activityDTO: CreateActivityDTO) {
        return {
            id: uuidv4(),
            ...activityDTO,
        };
    }

    function updateActivity(
        activityDTO: CreateActivityDTO,
        activities: Activity[]
    ) {
        return activities.map((activity) => {
            if (activity.id == selectedSchedule.activityId) {
                return {
                    id: selectedSchedule.activityId,
                    ...activityDTO,
                };
            } else {
                return activity;
            }
        });
    }

    return { getSchedule, createSchedule, updateSchedule };
}

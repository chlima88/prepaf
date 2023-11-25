import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { GlobalContext, ModalContext } from "contexts";
import { Activity, CreateActivityDTO, Schedule } from "types";

export function useSchedulesDatabase() {
    const { schedules, setSchedules } = useContext(GlobalContext);
    const { selectedSchedule } = useContext(ModalContext);

    function getSchedule(scheduleDate: number) {
        return schedules.find((schedule) => schedule.date == scheduleDate);
    }

    function createSchedule(
        activityDTO: CreateActivityDTO,
        scheduleDay?: number
    ) {
        const newSchedule: Schedule = {
            date: scheduleDay ?? selectedSchedule.date,
            activities: [createActivity(activityDTO)],
        };
        setSchedules([...schedules, newSchedule]);
        console.log("create schd");
        console.log(newSchedule);
    }

    async function updateSchedule(
        activityDTO: CreateActivityDTO,
        scheduleDay?: number
    ) {
        const date = scheduleDay ?? selectedSchedule.date;
        const storedSchedule = schedules.find(
            (schedule) => schedule.date == date
        )!;

        const scheduleIndex = schedules.indexOf(storedSchedule);
        const updatedSchedules = schedules;
        if (
            selectedSchedule.activityId &&
            selectedSchedule.eventType == "click"
        ) {
            updatedSchedules.splice(scheduleIndex, 1);
        }

        const updatedActivities =
            selectedSchedule.activityId && selectedSchedule.eventType == "click"
                ? updateActivity(activityDTO, storedSchedule.activities)
                : [...storedSchedule.activities, createActivity(activityDTO)];

        storedSchedule.activities = [...updatedActivities];
        setSchedules([...updatedSchedules, storedSchedule]);
        // setSchedules([]);
        console.log("update schd");
        console.log(storedSchedule);
    }

    function updateActivitySchedule(
        activityId: string,
        srcDate: number,
        dstDate: number
    ) {
        const { title, category, startTime, endTime, players, description } =
            schedules
                .find((schedule) => schedule.date == srcDate)!
                .activities.find((activity) => activity.id == activityId)!;

        const dstSchedule = schedules.find(
            (schedule) => schedule.date == dstDate
        )!;

        deleteSchedule(srcDate);
        dstSchedule
            ? updateSchedule({
                  title,
                  category,
                  startTime,
                  endTime,
                  players,
                  description,
              })
            : createSchedule({
                  title,
                  category,
                  startTime,
                  endTime,
                  players,
                  description,
              });
    }

    function deleteSchedule(scheduleDay: number) {
        const storedSchedule = schedules.find(
            (schedule) => schedule.date == scheduleDay
        )!;

        const scheduleIndex = schedules.indexOf(storedSchedule);
        const updatedSchedules = schedules;
        updatedSchedules.splice(scheduleIndex, 1);
        setSchedules([...updatedSchedules]);
        console.log("delete schd");
        console.log(storedSchedule);
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

    function deleteActivity(scheduleDay: number, activityId: string) {
        const storedSchedule = schedules.find(
            (schedule) => schedule.date == scheduleDay
        )!;
        const scheduleIndex = schedules.indexOf(storedSchedule);

        const updatedActivities = storedSchedule.activities.filter(
            (activity) => activity.id != activityId
        );

        storedSchedule.activities = [...updatedActivities];
        const updatedSchedules = schedules;
        updatedSchedules.splice(scheduleIndex, 1);
        setSchedules([...updatedSchedules]);
    }

    return {
        getSchedule,
        createSchedule,
        updateSchedule,
        deleteSchedule,
        updateActivitySchedule,
        deleteActivity,
    };
}

import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { GlobalContext, Schedule, SelectOption } from "contexts/GlobalContext";

type CreateActivityDTO = {
    title: string;
    category: string;
    startTime: string;
    endTime: string;
    players?: SelectOption[];
    description?: string;
};

export function UseRepository() {
    const { modalDay, schedules, setSchedules } = useContext(GlobalContext);

    function createSchedule(activityDTO: CreateActivityDTO) {
        const newSchedule: Schedule = {
            day: modalDay.current,
            activities: [
                {
                    id: uuidv4(),
                    ...activityDTO,
                },
            ],
        };
        setSchedules([...schedules, newSchedule]);
    }
}

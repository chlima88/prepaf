import { createContext, useState } from "react";
import { activitiesDb, playersData } from "data/db";
import { Schedule } from "types";

type Context = {
    playersData: any[];
    schedules: Schedule[];
    setSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>;
};
export const GlobalContext = createContext({} as Context);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [schedules, setSchedules] = useState<Schedule[]>([...activitiesDb]);

    return (
        <GlobalContext.Provider
            value={{
                playersData,
                schedules,
                setSchedules,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

import { createContext } from "react";
import { playersData } from "data/db";

type Context = {
    playersData: any[];
};
export const GlobalContext = createContext({} as Context);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    return (
        <GlobalContext.Provider
            value={{
                playersData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { playersData } from "data/playersdb";

type Context = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    playersData: any[];
    selectedPlayers: SelectOption[];
    setSelectedPlayers: Dispatch<SetStateAction<SelectOption[]>>;
    selectedCategory: any;
    setSelectedCategory: Dispatch<SetStateAction<SelectOption>>;
    activities: Activity[];
    setActivities: Dispatch<SetStateAction<Activity[]>>;
};

type SelectOption = {
    value: string;
    label: string;
    color?: string;
};

type Activity = {
    title: string;
    category: string;
    startTime: string;
    endTime: string;
    playerName?: string;
    description?: string;
};

const GlobalContext = createContext({} as Context);

function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState<SelectOption[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<SelectOption>(
        {} as SelectOption
    );

    return (
        <GlobalContext.Provider
            value={{
                showModal,
                setShowModal,
                playersData,
                selectedPlayers,
                setSelectedPlayers,
                selectedCategory,
                setSelectedCategory,
                activities,
                setActivities,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };

import {
    Dispatch,
    SetStateAction,
    createContext,
    useRef,
    useState,
} from "react";
import { activitiesDb, playersData } from "data/db";

type Context = {
    activityUpdate: ActivityUpdateRequest;
    setActivityUpdate: Dispatch<SetStateAction<ActivityUpdateRequest>>;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    modalDay: React.MutableRefObject<number>;
    playersData: any[];
    selectedPlayers: SelectOption[];
    setSelectedPlayers: Dispatch<SetStateAction<SelectOption[]>>;
    selectedCategory: any;
    setSelectedCategory: Dispatch<SetStateAction<SelectOption>>;
    schedules: Schedule[];
    setSchedules: Dispatch<SetStateAction<Schedule[]>>;
};

type ActivityUpdateRequest = {
    date: number;
    id: string;
};

type ModalDate = {
    day: number;
    month: number;
    year: number;
};

export type SelectOption = {
    value: string;
    label: string;
    color?: string;
};

export type Schedule = {
    day: number;
    activities: Activity[];
};

export type Activity = {
    id: string;
    title: string;
    category: string;
    startTime: string;
    endTime: string;
    players?: SelectOption[];
    description?: string;
};

const GlobalContext = createContext({} as Context);

function GlobalProvider({ children }: { children: React.ReactNode }) {
    const modalDay = useRef(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState<SelectOption[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<SelectOption>(
        {} as SelectOption
    );

    const [schedules, setSchedules] = useState<Schedule[]>([...activitiesDb]);
    const [activityUpdate, setActivityUpdate] = useState<ActivityUpdateRequest>(
        { date: 0, id: "" }
    );

    return (
        <GlobalContext.Provider
            value={{
                showModal,
                setShowModal,
                modalDay,
                playersData,
                selectedPlayers,
                setSelectedPlayers,
                selectedCategory,
                setSelectedCategory,
                schedules,
                setSchedules,
                activityUpdate,
                setActivityUpdate,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };

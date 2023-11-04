import { createContext, useRef, useState } from "react";

type ActivityUpdateRequest = {
    date: number;
    activityId?: string;
};

type Context = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedSchedule: ActivityUpdateRequest;
    setSelectedSchedule: React.Dispatch<
        React.SetStateAction<ActivityUpdateRequest>
    >;
};

export const ModalContext = createContext({} as Context);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedSchedule, setSelectedSchedule] =
        useState<ActivityUpdateRequest>({ date: 0, activityId: "" });

    return (
        <ModalContext.Provider
            value={{
                showModal,
                setShowModal,
                selectedSchedule,
                setSelectedSchedule,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

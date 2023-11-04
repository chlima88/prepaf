import { useContext } from "react";

import { ModalContext } from "contexts";
import { ActivityRegisterForm } from "components";

export function ActivityRegister() {
    const { showModal, setShowModal, selectedSchedule } =
        useContext(ModalContext);

    function CloseModal(): void {
        setShowModal(false);
    }

    return (
        <div
            className={`w-full h-full absolute
             bg-slate-900/30 backdrop-blur-sm z-50 ${
                 showModal ? "flex" : "hidden"
             }`}
            onClick={CloseModal}
        >
            <div className="w-full h-screen px-8 sm:px-8 flex items-center justify-center">
                <div
                    className="w-[1000px] p-12 bg-prepaf-gray-50 rounded"
                    onClick={(event) => event.stopPropagation()}
                >
                    <h1 className="text-xl font-semibold mb-10 flex items-center">
                        Agendamento -{" "}
                        {new Date(selectedSchedule.date).toLocaleDateString(
                            "pt-br",
                            {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            }
                        )}
                    </h1>
                    <ActivityRegisterForm />
                </div>
            </div>
        </div>
    );
}

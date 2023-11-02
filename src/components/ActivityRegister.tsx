import { v4 as uuidv4 } from "uuid";
import {
    GlobalContext,
    SelectOption,
    Schedule,
    Activity,
} from "contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { SelectBox } from "components";
import { categoryOptions } from "data/db";

export function ActivityRegister() {
    const {
        modalDay,
        showModal,
        setShowModal,
        schedules,
        setSchedules,
        playersData,
        selectedPlayers,
        setSelectedPlayers,
        selectedCategory,
        setSelectedCategory,
        activityUpdate,
        setActivityUpdate,
    } = useContext(GlobalContext);
    const [titleInput, setTitleInput] = useState("");
    const [startInput, setStartInput] = useState("");
    const [endInput, setEndInput] = useState("");
    const MAX_ACTIVITIES_PER_DAY = 5;

    useEffect(() => {
        modalDay.current = activityUpdate.date;
        const schedule = schedules.find(
            (schedule) => schedule.day == activityUpdate.date
        )!;
        const activity = schedule?.activities.find(
            (activity) => activity.id === activityUpdate.id
        );

        if (activity) {
            setTitleInput(activity?.title);
            setSelectedCategory({
                value: activity?.category,
                label: activity?.category,
            });
            setSelectedPlayers([...activity.players!]);
            setStartInput(activity.startTime);
            setEndInput(activity.endTime);
            setShowModal(true);
        }
    }, [activityUpdate]);

    function CloseModal(): void {
        setTitleInput("");
        setSelectedCategory({ value: "", label: "" });
        setSelectedPlayers([]);
        setStartInput("");
        setEndInput("");
        setActivityUpdate({ id: "", date: 0 });
        setShowModal(false);
    }

    function createActivity() {
        return {
            id: uuidv4(),
            title: titleInput,
            category: selectedCategory.value,
            startTime: startInput,
            endTime: endInput,
            players: selectedPlayers,
        };
    }

    function updateActivity(activities: Activity[]) {
        return activities.map((activity) => {
            if (activity.id == activityUpdate.id) {
                return {
                    id: activityUpdate.id,
                    title: titleInput,
                    category: selectedCategory.value,
                    startTime: startInput,
                    endTime: endInput,
                    players: selectedPlayers,
                };
            } else {
                return activity;
            }
        });
    }

    function createSchedule() {
        const newSchedule: Schedule = {
            day: modalDay.current,
            activities: [
                {
                    id: uuidv4(),
                    title: titleInput,
                    category: selectedCategory.value,
                    startTime: startInput,
                    endTime: endInput,
                    players: selectedPlayers,
                },
            ],
        };
        setSchedules([...schedules, newSchedule]);
    }

    function updateSchedule(storedSchedule: Schedule) {
        const scheduleIndex = schedules.indexOf(storedSchedule);

        const updatedActivities = activityUpdate.id
            ? updateActivity(storedSchedule.activities)
            : [...storedSchedule.activities, createActivity()];

        storedSchedule.activities = [...updatedActivities];

        const updatedSchedules = schedules;
        updatedSchedules.splice(scheduleIndex, 1);
        setSchedules([...updatedSchedules, storedSchedule]);
    }

    function handleClickSave() {
        const storedSchedule = schedules.find(
            (activity) => activity.day == modalDay.current
        );

        if (storedSchedule) {
            updateSchedule(storedSchedule);
        } else {
            createSchedule();
        }

        CloseModal();
        setActivityUpdate({ id: "", date: 0 });
    }

    function isInvalidNewActivity() {
        if (!selectedCategory.value) {
            return true;
        }

        const schedule = schedules.find(
            (schedule) => schedule.day == new Date(modalDay.current).valueOf()
        );

        if (schedule && schedule.activities.length >= MAX_ACTIVITIES_PER_DAY) {
            return true;
        }

        if (titleInput == "") {
            return true;
        }
        return false;
    }

    return (
        <div
            className={`w-full h-full absolute
             bg-slate-900/30 backdrop-blur-sm z-50 ${
                 showModal ? "flex" : "hidden"
             }`}
            onClick={CloseModal}
            onKeyDown={(event) => {
                event.key == "Escape" && CloseModal();
            }}
        >
            <div className="w-full h-screen px-8 sm:px-8 flex items-center justify-center">
                <div
                    className="w-[1000px] p-12 bg-prepaf-gray-50 rounded"
                    onClick={(event) => event.stopPropagation()}
                >
                    <h1 className="text-xl font-semibold mb-10 flex items-center">
                        Agendamento -{" "}
                        {new Date(modalDay.current).toLocaleDateString(
                            "pt-br",
                            {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            }
                        )}
                    </h1>
                    <form className="flex flex-col gap-5">
                        <input
                            className="w-full px-5 py-3"
                            type="text"
                            placeholder="Título do evento"
                            value={titleInput}
                            onChange={(event) =>
                                setTitleInput(event.target.value)
                            }
                        />
                        <div className="flex gap-2 max-sm:flex-col max-sm:gap-4 ">
                            <SelectBox
                                placeholder="Categoria"
                                className="w-full"
                                closeMenuOnSelect={true}
                                hideSelectedOptions={false}
                                value={
                                    categoryOptions.find(
                                        (item) =>
                                            item.value ===
                                            selectedCategory.value
                                    ) ?? null
                                }
                                onChange={(event: SelectOption) =>
                                    setSelectedCategory(
                                        event
                                            ? event
                                            : (categoryOptions.find(
                                                  (category) =>
                                                      category.value ==
                                                      "não categorizado"
                                              ) as SelectOption)
                                    )
                                }
                                data={categoryOptions}
                            />
                            <div className="flex flex-row gap-2">
                                <div className="flex items-center w-1/2 relative">
                                    <span className="absolute px-5 text-gray-400">
                                        Inicio
                                    </span>
                                    <input
                                        className="max-sm:w-full pl-16 pr-5 py-3"
                                        type="time"
                                        value={startInput}
                                        onChange={(event) =>
                                            setStartInput(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex items-center w-1/2 relative">
                                    <span className="absolute px-5 text-gray-400">
                                        Fim
                                    </span>
                                    <input
                                        className="max-sm:w-full pl-16 pr-5 py-3"
                                        type="time"
                                        value={endInput}
                                        onChange={(event) => {
                                            setEndInput(event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <SelectBox
                            placeholder="Jogadores"
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            value={selectedPlayers}
                            onChange={(event: SelectOption[]) =>
                                setSelectedPlayers([...event])
                            }
                            data={playersData.map((player) => ({
                                value: player.name,
                                label: player.name,
                            }))}
                        />
                        <textarea
                            className="w-full px-5 py-3 rounded resize-none"
                            rows={10}
                            placeholder="Descrição / Informações complementares"
                        />
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="w-1/2 btn-red"
                                onClick={CloseModal}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="w-1/2 btn-green disabled:bg-gray-300 "
                                onClick={handleClickSave}
                                disabled={isInvalidNewActivity()}
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

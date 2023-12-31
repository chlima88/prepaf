import { useContext, useEffect, useState } from "react";
import { GlobalContext, ModalContext } from "contexts";

import { SelectBox } from "components";
import { categoryOptions } from "data/db";
import { useSchedulesDatabase } from "hooks";
import { Activity, SelectOption } from "types";

export function ActivityRegisterForm() {
    const { playersData } = useContext(GlobalContext);
    const { setShowModal, setSelectedSchedule, selectedSchedule } =
        useContext(ModalContext);
    const { getSchedule, createSchedule, updateSchedule } =
        useSchedulesDatabase();
    const [titleInput, setTitleInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [startInput, setStartInput] = useState("");
    const [endInput, setEndInput] = useState("");
    const [playersSelect, setPlayersSelect] = useState<SelectOption[]>([]);
    const [categorySelect, setCategorySelect] = useState<SelectOption>(
        {} as SelectOption
    );

    function isInvalidFormData(): boolean {
        const MAX_ACTIVITIES_PER_DAY = 5;

        if (!categorySelect.value) {
            return true;
        }
        const schedule = getSchedule(selectedSchedule.date);

        if (schedule && schedule.activities.length >= MAX_ACTIVITIES_PER_DAY) {
            return true;
        }
        if (titleInput == "") {
            return true;
        }
        return false;
    }

    function updateForm(activity: Activity) {
        setTitleInput(activity.title);
        setCategorySelect({
            value: activity.category,
            label: activity.category,
        });
        setPlayersSelect(
            activity.players!.map((player) => ({
                value: player,
                label: player,
            }))
        );
        setStartInput(activity.startTime);
        setEndInput(activity.endTime);
        setDescriptionInput(activity.description || "");
    }

    function closeModal() {
        setTitleInput("");
        setCategorySelect({
            value: "",
            label: "",
        });
        setPlayersSelect([]);
        setStartInput("");
        setEndInput("");
        setDescriptionInput("");
        setSelectedSchedule({ activityId: "", date: 0 });
        setShowModal(false);
    }

    function handleClickSave() {
        const formData = {
            title: titleInput,
            category: categorySelect.value,
            startTime: startInput,
            endTime: endInput,
            players: playersSelect.map((player) => player.value),
            description: descriptionInput,
        };

        const storedSchedule = getSchedule(selectedSchedule.date);

        if (storedSchedule) {
            updateSchedule(formData);
        } else {
            createSchedule(formData);
        }

        closeModal();
    }

    useEffect(() => {
        const schedule = getSchedule(selectedSchedule.date);
        const activity = schedule?.activities.find(
            (activity) => activity.id === selectedSchedule.activityId
        );

        if (activity) {
            updateForm(activity);
            setShowModal(true);
        }
        if (selectedSchedule.date != 0) setShowModal(true);
    }, [selectedSchedule]);

    useEffect(() => {
        const escToClose = (event: KeyboardEvent) =>
            event.key == "Escape" && closeModal();
        window.addEventListener("keydown", escToClose);
        return () => window.removeEventListener("keydown", escToClose);
    }, []);

    return (
        <form className="flex flex-col gap-5">
            <input
                className="w-full px-5 py-3"
                type="text"
                placeholder="Título do evento"
                value={titleInput}
                onChange={(event) => setTitleInput(event.target.value)}
            />
            <div className="flex gap-2 max-sm:flex-col max-sm:gap-4 ">
                <SelectBox
                    placeholder="Categoria"
                    className="w-full"
                    closeMenuOnSelect={true}
                    hideSelectedOptions={false}
                    value={
                        categoryOptions.find(
                            (item) => item.value === categorySelect.value
                        ) ?? null
                    }
                    onChange={(event: SelectOption) =>
                        setCategorySelect(
                            event
                                ? event
                                : (categoryOptions.find(
                                      (category) =>
                                          category.value == "não categorizado"
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
                        <span className="absolute px-5 text-gray-400">Fim</span>
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
                value={playersSelect}
                onChange={(event: SelectOption[]) =>
                    setPlayersSelect([...event])
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
                value={descriptionInput}
                onChange={(event) => setDescriptionInput(event.target.value)}
            />
            <div className="flex gap-2">
                <button
                    type="button"
                    className="w-1/2 btn-red"
                    onClick={closeModal}
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    className="w-1/2 btn-green disabled:bg-gray-300 "
                    onClick={handleClickSave}
                    disabled={isInvalidFormData()}
                >
                    Salvar
                </button>
            </div>
        </form>
    );
}

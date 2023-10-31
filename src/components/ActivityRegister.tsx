import { GlobalContext } from "contexts/GlobalContext";
import { useContext } from "react";
import { SelectBox } from "components";

type SelectOption = {
    value: string;
    label: string;
    color?: string;
};

export function ActivityRegister() {
    const {
        showModal,
        setShowModal,
        playersData,
        selectedPlayers,
        setSelectedPlayers,
        selectedCategory,
        setSelectedCategory,
    } = useContext(GlobalContext);

    const categoryOptions = [
        {
            value: "avaliação",
            label: "Avaliação",
            color: "before:bg-prepaf-red-600",
        },
        { value: "jogo", label: "Jogo", color: "before:bg-prepaf-green-300" },
        {
            value: "recuperação",
            label: "Recuperação",
            color: "before:bg-prepaf-cyan-400",
        },
        {
            value: "treino",
            label: "Treino",
            color: "before:bg-prepaf-yellow-700",
        },
        {
            value: "não categorizado",
            label: "Não Categorizado",
            color: "before:bg-prepaf-gray-600",
        },
    ];

    function CloseModal(): void {
        setShowModal(false);
    }

    return (
        <div
            className={`flex items-center justify-center w-full h-screen absolute bg-slate-900/30 backdrop-blur-sm ins z-10 ${
                showModal ? "flex" : "hidden"
            }`}
            onClick={CloseModal}
        >
            <div
                className="w-[1000px] h-[680px] p-12 bg-prepaf-gray-50 rounded"
                onClick={(event) => event.stopPropagation()}
            >
                <h1 className="text-xl font-semibold mb-10 flex items-center">
                    {" "}
                    08 de Janeiro de 2023
                </h1>
                <div className="flex flex-col gap-5">
                    <input
                        className="w-full px-5 py-3"
                        type="text"
                        placeholder="Título do evento"
                    />

                    <SelectBox
                        placeholder="Categoria"
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        onChange={(event: SelectOption) =>
                            setSelectedCategory(
                                event ? event : { value: "", label: "" }
                            )
                        }
                        data={categoryOptions}
                    />

                    <div className="flex gap-2">
                        <input
                            className="w-full px-5 py-3"
                            type="time"
                            placeholder="Inicio"
                        />
                        <input
                            className="w-full px-5 py-3"
                            type="time"
                            placeholder="Fim"
                        />
                    </div>
                    <SelectBox
                        placeholder="Jogadores"
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        onChange={(event: SelectOption[]) =>
                            setSelectedPlayers(event ? event : [])
                        }
                        data={playersData.map((player) => ({
                            value: player.name,
                            label: player.name,
                        }))}
                    />
                    <textarea
                        className="w-full px-5 py-3 rounded"
                        rows={6}
                        placeholder="Descrição / Informações complementares"
                    />
                    <div className="flex gap-2">
                        <button
                            className="w-1/2 btn-red rounde"
                            onClick={CloseModal}
                        >
                            Cancelar
                        </button>
                        <button className="w-1/2 btn-green ">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

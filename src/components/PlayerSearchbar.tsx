import { ChangeEvent, useEffect, useState } from "react";
import searchIcon from "assets/search.svg";

type Props = {
    target: any[];
    outputSetter: React.Dispatch<React.SetStateAction<any>>;
};

export function PlayerSearchBar({ target, outputSetter }: Props) {
    const [selected, setSelected] = useState("name");
    const [filter, setFilter] = useState("");

    function handleInput(event: ChangeEvent<HTMLInputElement>): void {
        setFilter(event.target.value);
    }

    useEffect(() => {
        if (filter) {
            const players = target.filter((player) => {
                if (selected === "name") {
                    return player.name
                        .toLocaleLowerCase()
                        .includes(filter.toLocaleLowerCase());
                } else if (selected === "number") {
                    return player.number.includes(filter);
                } else if (selected === "role") {
                    return player.position
                        .toLocaleLowerCase()
                        .includes(filter.toLocaleLowerCase());
                }
            });
            outputSetter(players);
        } else {
            outputSetter(target);
        }
        console.log(filter);
    }, [filter, selected]);

    return (
        <div className="flex relative w-full mb-16">
            <button
                className={`flex w-fit items-center justify-center h-10 p-3 rounded group transition-colors ${
                    selected == "name"
                        ? "bg-prepaf-orange-400 text-white"
                        : "bg-white"
                }`}
                onClick={() => setSelected("name")}
            >
                Nome
            </button>
            <button
                className={`flex w-fit items-center justify-center h-10 p-3 rounded group transition-colors ${
                    selected == "number"
                        ? "bg-prepaf-orange-400 text-white"
                        : "bg-white"
                }`}
                onClick={() => setSelected("number")}
            >
                Numero
            </button>
            <button
                className={`flex w-fit items-center justify-center h-10 p-3 rounded group transition-colors ${
                    selected == "role"
                        ? "bg-prepaf-orange-400 text-white"
                        : "bg-white"
                }`}
                onClick={() => setSelected("role")}
            >
                Função
            </button>

            <div className="relative w-full">
                <img
                    className="absolute left-0 ml-3 translate-y-1/2 w-5"
                    src={searchIcon}
                />
                <input
                    className="w-full max-w-[400px]  border border-prepaf-gray-200 px-10 text-prepaf-gray-600 font-medium"
                    placeholder="Pesquisar Jogador"
                    type="text"
                    onChange={handleInput}
                />
            </div>
        </div>
    );
}

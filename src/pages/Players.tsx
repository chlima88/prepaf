import { Layout } from "pages/Layout";
import { PlayerCard } from "components/PlayerCard";
import { playersData } from "data/playersdb";
import searchIcon from "assets/search.svg";
import { useState } from "react";

export function Players() {
    const [selected, setSelected] = useState("");

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl pt-11 mb-10 font-medium w-full text-left">
                    Lista de Jogadores
                </h1>
                <div className="flex mb-16">
                    <button
                        className={`flex w-fit items-center justify-center h-10 p-3 rounded group transition-colors ${
                            selected == "name"
                                ? "bg-prepaf-orange text-white"
                                : "bg-white"
                        }`}
                        onClick={() => setSelected("name")}
                    >
                        Nome
                    </button>
                    <button
                        className={`flex w-fit items-center justify-center h-10 p-3 rounded group transition-colors ${
                            selected == "number"
                                ? "bg-prepaf-orange text-white"
                                : "bg-white"
                        }`}
                        onClick={() => setSelected("number")}
                    >
                        Numero
                    </button>
                    <button
                        className={`flex w-fit items-center justify-center h-10 p-3 rounded group transition-colors ${
                            selected == "role"
                                ? "bg-prepaf-orange text-white"
                                : "bg-white"
                        }`}
                        onClick={() => setSelected("role")}
                    >
                        Função
                    </button>

                    <div className="relative ">
                        <img
                            className="absolute left-0 ml-3 translate-y-1/2 w-5"
                            src={searchIcon}
                        />
                        <input
                            className="border border-prepaf-gray-200 px-10 text-prepaf-gray-600 font-medium"
                            placeholder="Pesquisar Jogador"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {playersData.map((player, idx: number) => (
                        <PlayerCard key={idx} player={player} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

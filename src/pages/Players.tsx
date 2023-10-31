import { Layout } from "pages";
import { PlayerCard, PlayerSearchBar } from "components";
import { playersData } from "data/playersdb";
import { useState } from "react";

export function Players() {
    const [filteredPlayers, setFilteredPlayers] = useState(playersData);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="w-full text-2xl mb-8 font-medium text-left">
                    Lista de Jogadores
                </h1>
                <PlayerSearchBar
                    target={playersData}
                    outputSetter={setFilteredPlayers}
                />
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                    {filteredPlayers.map((player, idx: number) => (
                        <PlayerCard key={idx} player={player} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

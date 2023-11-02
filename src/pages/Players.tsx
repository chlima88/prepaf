import { PlayerCard, PlayerSearchBar } from "components";
import { playersData } from "data/db";
import { useState } from "react";

export function Players() {
    const [filteredPlayers, setFilteredPlayers] = useState(playersData);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="w-full text-2xl mb-8 font-medium text-left">
                Lista de Jogadores
            </h1>
            <PlayerSearchBar
                target={playersData}
                outputSetter={setFilteredPlayers}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPlayers.map((player, idx: number) => (
                    <PlayerCard key={idx} player={player} />
                ))}
            </div>
        </div>
    );
}

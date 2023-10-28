import userIcon from "assets/userIcon.svg";

type Props = {
    player: {
        name?: string;
        position?: string;
        number?: string;
        status?: string;
        injuryRisk?: string;
    };
};

export function PlayerCard({ player }: Props) {
    let injuryRiskColor;
    let statusColor;

    if (player.injuryRisk?.toLowerCase() === "baixa") {
        injuryRiskColor = "text-prepaf-green-400";
    } else if (player.injuryRisk?.toLowerCase() === "alta") {
        injuryRiskColor = "text-prepaf-red-800";
    } else {
        injuryRiskColor = "text-prepaf-gray-600";
    }

    if (player.status?.toLowerCase() === "em treino") {
        statusColor = "text-prepaf-yellow-700";
    } else if (player.status?.toLowerCase() === "em recuperação") {
        statusColor = "text-prepaf-blue-400";
    } else {
        statusColor = "text-prepaf-gray-600";
    }

    return (
        <div className="w-[250px] rounded overflow-hidden">
            <div className="flex items-center justify-center py-6 bg-prepaf-orange">
                <div>
                    <img src={userIcon} />
                </div>
            </div>
            <div className="flex flex-col items-center pt-10 pb-7 justify-center gap-11 bg-white ">
                <div className="">
                    <p className="text-center font-medium text-base">
                        {player.name || "Nome do Jogador"}
                    </p>
                    <p className="text-center font-medium text-xs">
                        {player.position || "Posição do Jogador"}
                    </p>
                    <p className="text-center font-medium text-xs">
                        {`Número: ${player.number}` || "Número do Jogador"}
                    </p>
                </div>
                <div className="">
                    <p
                        className={`text-center font-medium text-xs ${injuryRiskColor}`}
                    >
                        Probabilidade de Lesão:{" "}
                        {player.injuryRisk || "sem dados"}
                    </p>
                    <p
                        className={`text-center font-medium text-xs  ${statusColor}`}
                    >
                        Status: {player.status || "sem dados"}
                    </p>
                </div>
            </div>
        </div>
    );
}
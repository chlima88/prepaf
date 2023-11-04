export const playersData = [
    {
        name: "Jogador 1",
        position: "Goleiro",
        number: "1",
        injuryRisk: "Baixa",
        status: "Em treino",
    },
    {
        name: "Jogador 12",
        position: "Goleiro",
        number: "12",
        injuryRisk: "Baixa",
        status: "Em treino",
    },
    {
        name: "Jogador 2",
        position: "Lateral",
        number: "2",
        injuryRisk: "Alta",
        status: "Em recuperação",
    },
    {
        name: "Jogador 3",
        position: "Lateral",
        number: "6",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 4",
        position: "Zagueiro",
        number: "3",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 5 ",
        position: "Zagueiro",
        number: "4",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 6",
        position: "Zagueiro",
        number: "5",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 7",
        position: "Meio-Campo",
        number: "7",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 8",
        position: "Meio-Campo",
        number: "8",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 9",
        position: "Meio-Campo",
        number: "10",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 10",
        position: "Atacante",
        number: "9",
        injuryRisk: "",
        status: "",
    },
    {
        name: "Jogador 11",
        position: "Atacante",
        number: "11",
        injuryRisk: "",
        status: "",
    },
];

export const categoryOptions = [
    {
        value: "avaliação",
        label: "Avaliação",
        color: "prepaf-red-600",
        textColor: "white",
    },
    { value: "jogo", label: "Jogo", color: "prepaf-green-300" },
    {
        value: "recuperação",
        label: "Recuperação",
        color: "prepaf-cyan-400",
    },
    {
        value: "treino",
        label: "Treino",
        color: "prepaf-yellow-700",
    },
    {
        value: "não categorizado",
        label: "Não Categorizado",
        color: "prepaf-gray-600",
        textColor: "white",
    },
];

export const activitiesDb = [
    {
        day: 1698807600000, // 2023-11-01
        activities: [
            {
                id: "0a162727-6032-40c7-afcb-98058888a7f8",
                title: "Treino",
                category: "treino",
                startTime: "10:00",
                endTime: "12:00",
                players: ["Jogador 1"],
                description: "Treino",
            },
        ],
    },
    {
        day: 1699671600000, //2023-11-11
        activities: [
            {
                id: "acbeb0b3-d1b3-4dd4-9ef3-5531bf676d3d",
                title: "Fisioterapia",
                category: "recuperação",
                startTime: "10:00",
                endTime: "12:00",
                players: [],
                description: "",
            },
        ],
    },
    {
        day: 1699758000000, //2023-11-12
        activities: [
            {
                id: "0530b08b-a099-4f65-a8d4-8fade779707f",
                title: "Avaliação",
                category: "avaliação",
                startTime: "11:00",
                endTime: "11:30",
                players: [],
                description: "",
            },
        ],
    },
    {
        day: 1700794800000, //2023-11-24
        activities: [
            {
                id: "73efafa5-a726-450e-8392-1123b46b948d",
                title: "Jogo",
                category: "jogo",
                startTime: "12:00",
                endTime: "14:00",
                players: [],
                description: "",
            },
        ],
    },
    {
        day: 1700967600000, //2023-11-26
        activities: [
            {
                id: "d6963844-73a9-4a7a-97d2-4cd76e3623f2",
                title: "Recuperação Muscular",
                category: "recuperação",
                startTime: "16:00",
                endTime: "18:00",
                players: [],
                description: "",
            },
        ],
    },
];

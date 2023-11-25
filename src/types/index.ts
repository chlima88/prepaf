export type CreateActivityDTO = {
    title: string;
    category: string;
    startTime: string;
    endTime: string;
    players?: string[];
    description?: string;
};

export type Schedule = {
    date: number;
    activities: Activity[];
};

export type Activity = {
    id: string;
    title: string;
    category: string;
    startTime: string;
    endTime: string;
    players?: string[];
    description?: string;
};

export type SelectOption = {
    value: string;
    label: string;
    color?: string;
};

export type CalendarData = {
    key: number;
    date: number;
    itemsPosition: string;
    filler: boolean;
}[];

export type Player = {
    name?: string;
    position?: string;
    number?: string;
    status?: string;
    injuryRisk?: string;
};

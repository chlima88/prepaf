import { useContext, useState } from "react";
import { GlobalContext } from "contexts/GlobalContext";

type Props = {
    year: number;
    month: number;
    day: number;
};

type Activity = {
    title: string;
    category: string;
    startTime: string;
    endTime: string;
    playerName?: string;
    description?: string;
};

export function CalendarDay({ year, month, day }: Props) {
    const [activities, setActivities] = useState<Activity[]>([]);
    const { showModal, setShowModal } = useContext(GlobalContext);

    const dayIsToday =
        new Date(year, month, day).toDateString() == new Date().toDateString();

    function handleClick() {
        setShowModal(!showModal);

        const activity: Activity = {
            title: "Fisioterapia",
            category: "recuperação",
            startTime: "12:00",
            endTime: "14:00",
        };

        if (activities.length < 2) {
            setActivities([...activities, activity]);
        } else {
            setActivities([]);
        }
    }

    return (
        <>
            <div
                className={`min-w-[50px] h-36 bg-prepaf-gray-200 rounded p-2 hover:bg-prepaf-orange-200/40  ${
                    dayIsToday ? "text-prepaf-red-600" : ""
                }`}
                onClick={handleClick}
            >
                <p className="w-full text-center font-medium">{`${day}`}</p>
                {activities.map((activity) => (
                    <div
                        className={`bg-prepaf-cyan-400 p-1.5 mb-1 rounded hover:cursor-pointer`}
                    >
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-xs">
                            {activity.startTime} - {activity.endTime}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

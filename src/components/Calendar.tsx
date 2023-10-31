import { Icon } from "@iconify/react";
import { useCalendar } from "hooks";

export function Calendar() {
    const { month, setMonth, year, calendar } = useCalendar();

    return (
        <>
            <h1 className="w-full text-2xl mb-8 font-medium text-left">
                Atividades
            </h1>
            <div className="flex gap-2 w-full mb-12 items-center justify-center">
                <button
                    className="w-10 h-10 bg-prepaf-orange-400 rounded hover:cursor-pointer"
                    onClick={() => setMonth(month - 1)}
                >
                    <div className="h-full flex items-center justify-center">
                        <Icon
                            icon="raphael:arrowleft"
                            width="30"
                            className="text-white"
                        />
                    </div>
                </button>
                <div className="flex items-center justify-center w-64 h-10 bg-white border border-gray-200 rounded">
                    <p className="font-semibold">
                        {new Date(year, month).toLocaleString("pt-br", {
                            month: "long",
                            year: "numeric",
                        })}
                    </p>
                </div>
                <button
                    className="w-10 h-10 bg-prepaf-orange-400 rounded"
                    onClick={() => setMonth(month + 1)}
                >
                    <div className="h-full flex items-center justify-center">
                        <Icon
                            icon="raphael:arrowright"
                            width="30"
                            className="text-white"
                        />
                    </div>
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {calendar.map((item) => item)}
            </div>
        </>
    );
}

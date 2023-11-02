import { Icon } from "@iconify/react";

type Props = {
    month: number;
    setter: (value: number) => void;
};

export function CalendarControls({ month, setter }: Props) {
    const year = new Date().getFullYear();

    return (
        <div className="flex gap-2 w-full mb-12 items-center justify-center">
            <button
                className="w-10 h-10 bg-prepaf-orange-400 hover:bg-prepaf-orange-200 transition-colors rounded hover:cursor-pointer"
                onClick={() => setter(month - 1)}
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
                className="w-10 h-10 bg-prepaf-orange-400 hover:bg-prepaf-orange-200 transition-colors rounded"
                onClick={() => setter(month + 1)}
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
    );
}

import { CalendarControls } from "components";
import { useCalendar } from "hooks";

export function Calendar() {
    const { month, setMonth, calendar } = useCalendar();

    return (
        <>
            <CalendarControls month={month} setter={setMonth} />
            <div className="grid grid-cols-7 gap-1 relative select-none">
                {calendar.map((item) => item)}
            </div>
        </>
    );
}

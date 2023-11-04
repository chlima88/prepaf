import { CalendarControls, CalendarGrid } from "components/calendar";
import { useCalendar } from "hooks";

export function Calendar() {
    const { month, setMonth, calendarData } = useCalendar();

    return (
        <>
            <CalendarControls month={month} setter={setMonth} />
            <CalendarGrid data={calendarData} />
        </>
    );
}

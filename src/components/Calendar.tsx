import { CalendarControls, CalendarGrid } from "components";
import { useCalendar } from "hooks";

export function Calendar() {
    const { month, setMonth, calendar } = useCalendar();

    return (
        <>
            <CalendarControls month={month} setter={setMonth} />
            <CalendarGrid calendar={calendar} />
        </>
    );
}

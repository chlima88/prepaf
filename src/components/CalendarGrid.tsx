type Props = {
    calendar: (JSX.Element | React.ReactNode)[];
};

export function CalendarGrid({ calendar }: Props) {
    return (
        <div className="grid grid-cols-7 gap-1 relative select-none">
            {calendar.map((item) => item)}
        </div>
    );
}

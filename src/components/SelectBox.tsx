import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

type Data = {
    label: string;
    value: string;
    color?: string;
    icon?: string;
};

type Props = {
    data: Data[];
    placeholder?: string;
    isMulti?: boolean;
    closeMenuOnSelect?: boolean;
    hideSelectedOptions?: boolean;
    onChange?: any;
};

export function SelectBox({ data, ...props }: Props) {
    const options = [...data];

    const dot = (color = "transparent") => ({
        alignItems: "center",
        display: "flex",

        ":before": {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: "block",
            marginRight: 8,
            height: 10,
            width: 10,
        },
    });

    const dot2 = (color = "transparent") => {
        return ` ${color} before:inline-block before:rounded-full before:content-[' '] before:mr-2 before:h-2.5 before:w-2.5`;
    };

    const styleConfig: StylesConfig<Data> = {
        singleValue: (styles, { data }) => ({
            ...styles,
            ...dot(data.color),
        }),
    };

    return (
        <>
            <Select
                {...props}
                unstyled
                components={animatedComponents}
                options={options.map((data) => data)}
                classNames={{
                    control: () =>
                        "bg-white text-gray-400 pl-5 rounded-md border-2 border-white focus-within:border-prepaf-orange-500",
                    option: ({ isSelected, data }) =>
                        `bg-white px-6 py-2 hover:cursor-pointer hover:bg-prepaf-orange-100  ${
                            isSelected && !data.color
                                ? " before:content-['✔'] before:mr-2.5 before:text-prepaf-green-300"
                                : ` flex items-center ${dot2(data.color)}`
                        } `,
                    menu: () => "drop-shadow-md",
                    singleValue: ({ data }: { data: Data }) =>
                        `flex items-center ${dot2(data.color)}`,
                    multiValue: () =>
                        "mr-1 rounded bg-prepaf-orange-400 text-white font-medium",
                    multiValueRemove: () =>
                        "px-1.5 ml-2 rounded-r transition-colors hover:bg-prepaf-orange-200",
                    multiValueLabel: () => "p-2",
                    indicatorsContainer: () =>
                        "text-white hover:cursor-pointer ",
                    clearIndicator: () =>
                        "flex items-center justify-center px-2 h-full bg-prepaf-orange-400 hover:bg-prepaf-orange-200",
                    dropdownIndicator: () =>
                        "flex items-center justify-center rounded-r px-2 h-full bg-prepaf-orange-400 hover:bg-prepaf-orange-200",
                    indicatorSeparator: () => "bg-white",
                }}
            />
        </>
    );
}

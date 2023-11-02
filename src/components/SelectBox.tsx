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
    value?: any;
    placeholder?: string;
    className?: string;
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
        return ` before:bg-${color} before:inline-block before:rounded-full before:content-[' '] before:mr-2 before:h-2.5 before:w-2.5`;
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
                unstyled
                {...props}
                components={animatedComponents}
                options={options.map((data) => data)}
                classNames={{
                    clearIndicator: () =>
                        "flex items-center justify-center px-2 h-full bg-prepaf-orange-400 hover:bg-prepaf-orange-200",
                    control: () =>
                        "bg-white pl-5 rounded-md border-2 border-white focus-within:border-prepaf-orange-500",
                    dropdownIndicator: () =>
                        "flex items-center justify-center rounded-r px-2 h-full bg-prepaf-orange-400 hover:bg-prepaf-orange-200",
                    indicatorsContainer: () =>
                        "text-white hover:cursor-pointer ",
                    indicatorSeparator: () => "bg-white",
                    menu: () => "drop-shadow-md",
                    multiValue: () =>
                        "mr-1 rounded bg-prepaf-orange-400 text-white font-medium",
                    multiValueLabel: () => "p-2",
                    multiValueRemove: () =>
                        "px-1.5 ml-2 rounded-r transition-colors hover:bg-prepaf-orange-200",
                    option: ({ isSelected, data }) =>
                        `bg-white px-6 py-2 hover:cursor-pointer hover:bg-prepaf-orange-100  ${
                            isSelected && !data.color
                                ? " before:content-['✔'] before:mr-2.5 before:text-prepaf-green-300"
                                : ` flex items-center ${dot2(data.color)}`
                        } `,
                    placeholder: () => "text-gray-400",
                    singleValue: ({ data }: { data: Data }) =>
                        `flex items-center ${dot2(data.color)}`,
                }}
            />
        </>
    );
}

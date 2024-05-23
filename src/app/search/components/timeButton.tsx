interface Props {
    data: {
        month: number;
    };
    onClick: () => void;
    isSelected: boolean;
}

export const TimeButton = ({ data, onClick, isSelected }: Props) => {
    return (
        <button
            className={`pt-[0.75rem] pb-[0.687rem] pr-[2.875rem] pl-[2.937rem] flex z-[4] border-[1px] border-solid rounded-3xl font-semibold mr-2 ${
                isSelected ? "bg-main text-white" : "bg-white text-black"
            }`}
            onClick={onClick}
        >
            {data.month}개월
        </button>
    );
};

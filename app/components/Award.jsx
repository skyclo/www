import toMonthYearString from "~/utils/toMonthYearString"

export default function Award({ item: award, ...props }) {
    return (
        <div className="flex w-full flex-grow flex-row rounded-md px-4 pb-3 pt-4 ring-1 ring-gray-50 ring-opacity-20 hover:ring-opacity-30">
            <img
                src={award?.organization?.image}
                alt={award?.organization?.name + " Logo"}
                className="h-12 w-12 flex-shrink-0 rounded-md"
            />
            <div className="ml-4 mr-auto flex flex-col">
                <h4 className="">{award?.name}</h4>
                <div className="group-subheader">
                    {award?.date && toMonthYearString(award?.date)}
                    {award?.organization?.name && (
                        <span className="group-subheader-divider">•</span>
                    )}
                    {award?.organization?.name}
                </div>
            </div>
        </div>
    )
}

import toMonthYearString from "~/utils/toMonthYearString"

export default function Certification({ item: cert, ...props }) {
    return (
        <div className="flex w-full flex-shrink-0 flex-grow flex-row rounded-md px-4 pb-3 pt-4 ring-1 ring-gray-50 ring-opacity-20">
            <img
                src={cert?.organization?.image}
                alt={cert?.organization?.name + " Logo"}
                className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 mr-auto flex flex-col">
                <h4 className="">{cert?.name}</h4>
                <div className="group-subheader">
                    {cert?.date && toMonthYearString(cert?.date)}
                    {cert?.organization?.name && <span className="group-subheader-divider">•</span>}
                    {cert?.organization?.name}
                </div>
            </div>
        </div>
    )
}

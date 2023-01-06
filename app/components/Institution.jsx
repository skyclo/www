import toMonthYearString from "~/utils/toMonthYearString"

export default function Institution({ item: institution, ...props }) {
    return (
        <div className="w-full" {...props}>
            <h3 className="mt-8 w-full">{institution.name}</h3>
            <div className="w-full border-b border-gray-50 border-opacity-20 pb-2 text-xs font-medium opacity-60">
                {toMonthYearString(institution.date.from)} -{" "}
                {toMonthYearString(institution.date.to)}
                <span className="mx-3">•</span>
                {institution.location}
                {institution.degree && <span className="mx-3">•</span>}
                {institution.degree}
                {institution.gpa && <span className="mx-3">•</span>}
                {institution.gpa && "GPA: " + institution.gpa}
            </div>
            <div className="mt-2 flex w-full flex-row space-x-8">
                <div className="flex w-1/2 flex-col">
                    <h4>Relevant Coursework</h4>
                    <ul className="ml-4 list-inside list-disc">
                        {institution.courses.map(({ name, code }, i) => {
                            if (!name) return null
                            return (
                                <li key={i}>
                                    {name}
                                    {code && " (" + code + ")"}{" "}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex w-1/2 flex-col">
                    <h4>Clubs and Involvement</h4>
                    <ul className="ml-4 list-inside list-disc">
                        {institution.clubs.map(({ org, role }, i) => {
                            if (!org) return null
                            return (
                                <li key={i}>
                                    {org}
                                    {role && ", " + role}{" "}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

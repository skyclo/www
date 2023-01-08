import toMonthYearString from "~/utils/toMonthYearString"

export default function Institution({ item: institution, ...props }) {
    return (
        <div className="" {...props}>
            <h3 className="group-header">{institution.name}</h3>
            <div className="group-subheader group-divider">
                {toMonthYearString(institution.date.from)} -{" "}
                {toMonthYearString(institution.date.to)}
                <span className="group-subheader-divider">•</span>
                {institution.location}
                {institution.degree && <span className="group-subheader-divider">•</span>}
                {institution.degree}
                {institution.gpa && <span className="group-subheader-divider">•</span>}
                {institution.gpa && "GPA: " + institution.gpa}
            </div>
            <div className="flex w-full flex-col sm:flex-row sm:space-x-8">
                <div className="flex w-full flex-col sm:w-1/2">
                    <h4 className="group-subsection-header">Relevant Coursework</h4>
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
                <div className="flex w-full flex-col sm:w-1/2">
                    <h4 className="group-subsection-header">Clubs and Involvement</h4>
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

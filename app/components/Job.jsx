import toMonthYearString from "~/utils/toMonthYearString"
import dateLength from "~/utils/dateLength"

export default function Job({ item: job, ...props }) {
    return (
        <div className="" {...props}>
            <h3 className="group-header">{job.role}</h3>
            <div className="group-subheader group-divider">
                {toMonthYearString(job.date.from)} - {toMonthYearString(job.date.to)}
                {" (" +
                    dateLength(job.date.from, job.date.to == "Present" ? null : job.date.to) +
                    ")"}
                {job.location && <span className="group-subheader-divider">•</span>}
                {job.location}
                {job.company && <span className="group-subheader-divider">•</span>}
                {job.company}
            </div>
            <div className="flex flex-col">
                <h4 className="group-subsection-header">Responsibilities</h4>
                <ul className="ml-4 list-inside list-disc">
                    {job.description.map((item, i) => {
                        if (!item?.length) return null
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

import toMonthYearString from "~/utils/toMonthYearString"
import dateLength from "~/utils/dateLength"

export default function Job({ item: job, ...props }) {
    return (
        <div className="w-full" {...props}>
            <h3 className="mt-8 w-full">{job.role}</h3>
            <div className="w-full border-b border-gray-50 border-opacity-20 pb-2 text-xs font-medium opacity-60">
                {toMonthYearString(job.date.from)} - {toMonthYearString(job.date.to)}
                {" (" +
                    dateLength(job.date.from, job.date.to == "Present" ? null : job.date.to) +
                    ")"}
                {job.location && <span className="mx-3">•</span>}
                {job.location}
                {job.company && <span className="mx-3">•</span>}
                {job.company}
            </div>
            <div className="mt-2 flex flex-col">
                <h4>Responsibilities</h4>
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

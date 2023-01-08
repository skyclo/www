import { ExternalLinkIcon } from "lucide-react"
import dateLength from "~/utils/dateLength"
import toMonthYearString from "~/utils/toMonthYearString"

export default function Project({ item: project, ...props }) {
    return (
        <div className="flex w-full flex-grow flex-row rounded-md px-4 py-4 ring-1 ring-gray-50 ring-opacity-20 hover:ring-opacity-30">
            {project?.link ? (
                <a href={project.link}>
                    <img
                        src={project?.image}
                        alt={project?.name + " Logo"}
                        className="h-12 w-12 flex-shrink-0 rounded-md"
                    />
                </a>
            ) : (
                <img
                    src={project?.image}
                    alt={project?.name + " Logo"}
                    className="h-12 w-12 flex-shrink-0 rounded-md"
                />
            )}
            <div className="ml-4 flex w-full flex-col">
                <div className="flex w-full flex-row">
                    <div className="flex flex-col">
                        {project?.link ? (
                            <h4 className="hover:underline">
                                <a href={project.link}>{project?.name}</a>
                            </h4>
                        ) : (
                            <h4>{project?.name}</h4>
                        )}
                        <div className="group-subheader">
                            {toMonthYearString(project?.date?.from)} -{" "}
                            {toMonthYearString(project?.date?.to)}
                            {" (" +
                                dateLength(
                                    project?.date?.from,
                                    project?.date?.to == "Present" ? null : project?.date?.to
                                ) +
                                ")"}
                        </div>
                    </div>
                    {project?.link && (
                        <ExternalLinkIcon
                            className="my-auto ml-auto mr-4 h-4 w-4 cursor-pointer stroke-current stroke-2 text-gray-50 opacity-50 hover:opacity-100 md:h-5 md:w-5"
                            onClick={e => {
                                e.preventDefault()
                                window.open(project.link, "_blank")
                            }}
                            title={project.name}
                        />
                    )}
                </div>
                <div className="flex flex-row space-x-2">
                    {project?.stack?.map(({ icon, name, color }, j) => {
                        if (!icon || !name) return null
                        const Icon = icon
                        return (
                            <div key={j} className="flex flex-shrink-0 flex-row">
                                <Icon title={name} className="h-3 w-3" color={color} />
                            </div>
                        )
                    })}
                </div>
                <ul className="ml-4 mt-2 list-inside list-disc">
                    {project?.description?.map((item, i) => {
                        if (!item?.length) return null
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default function Skill({ item: skillGroup, ...props }) {
    return (
        <div className="" {...props}>
            <h3 className="group-header group-divider text-left">{skillGroup?.title}</h3>
            <div className="mt-1 flex flex-row flex-wrap gap-x-4 gap-y-1 sm:mb-2 md:mt-2 md:mb-4 md:gap-x-8 md:gap-y-3">
                {skillGroup?.items?.map(({ icon, name, color }, j) => {
                    if (!icon || !name) return null
                    const Icon = icon
                    return (
                        <div key={j} className="flex flex-shrink-0 flex-row">
                            <Icon title={name} className="h-3 w-3 md:h-4 md:w-4" color={color} />
                            <div className="my-auto ml-1 text-xs font-medium text-gray-50 md:ml-2 md:text-sm">
                                {name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

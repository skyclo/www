export default function Skill({ item: skill, ...props }) {
    return (
        <div className="w-full" {...props}>
            <h3 className="mt-8 w-full border-b border-gray-50 border-opacity-20 text-left">
                {skill.title}
            </h3>
            <div className="mt-2 mb-6 mr-auto flex flex-row flex-wrap space-x-8">
                {skill.skills.map(({ icon, name, color }, j) => {
                    if (!icon || !name) return null
                    const Icon = icon
                    return (
                        <div key={j} className="flex flex-row">
                            <Icon title={name} className="h-4 w-4" color={color} />
                            <div className="my-auto ml-2 text-sm font-medium text-gray-50">
                                {name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

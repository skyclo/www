import rxJSON from "~/components/rx"

export default function Intro() {
    return (
        <>
            <h1 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                Hello, my name is {rxJSON?.name?.split(" ")?.[0]}.
            </h1>
            <div className="text-md mt-3 space-x-6 text-center font-sans font-normal uppercase tracking-wider text-gray-50 opacity-60">
                {rxJSON?.tagline?.split(", ")?.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>
            <div className="mx-auto mt-4 flex flex-row space-x-6">
                {rxJSON?.socials?.map(({ platform, icon, link }, i) => {
                    if (!platform || !icon || !link) return null
                    const Icon = icon
                    return (
                        <Icon
                            key={i}
                            className="h-5 w-5 cursor-pointer stroke-current stroke-2 text-gray-50 opacity-50 hover:opacity-100"
                            onClick={e => {
                                e.preventDefault()
                                window.open(link, "_blank")
                            }}
                            title={platform}
                        />
                    )
                })}
            </div>
        </>
    )
}

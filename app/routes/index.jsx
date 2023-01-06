import { useEffect, useRef, useState } from "react"
import rxJSON from "~/components/rx"
import dateLength from "~/utils/dateLength"
import toMonthYearString from "~/utils/toMonthYearString"

let sections = ["intro", "skills", "education", "experience"]

export default function Index() {
    let [currentSection, setCurrentSection] = useState(null)
    let [navVisible, setNavVisible] = useState(false)
    let timeout = useRef(null)
    let i = 0

    useEffect(() => {
        const observer = new IntersectionObserver(
            sections =>
                sections.forEach(
                    s => s.isIntersecting && setTimeout(() => setCurrentSection(s.target.id), 100)
                ),
            { threshold: 0.5 }
        )
        sections.forEach(section => observer.observe(document.querySelector("#" + section)))
    }, [])

    return (
        <>
            <nav
                className={
                    "absolute top-0 right-0 flex h-full flex-col " +
                    (navVisible ? "opacity-100" : "opacity-0")
                }>
                <div className="my-auto flex flex-col space-y-4 bg-[radial-gradient(at_right_center,_theme(colors.purple.500/28%)_0%,_#00000000_65%)] px-8 py-28">
                    {sections.map((section, i) => (
                        <div
                            key={i}
                            className={
                                "w-2 cursor-pointer rounded-full " +
                                (currentSection == section
                                    ? "bg-gradient-multi h-6"
                                    : "h-2 bg-gray-500")
                            }
                            onClick={e => {
                                e.preventDefault()
                                document.querySelector("#" + section)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                    inline: "nearest",
                                })
                            }}
                            title={section}></div>
                    ))}
                </div>
            </nav>
            <main
                className="glowback h-screen w-screen snap-y snap-mandatory overflow-scroll bg-black bg-no-repeat"
                onScroll={() => {
                    setNavVisible(true)
                    clearTimeout(timeout.current)
                    timeout.current = setTimeout(() => setNavVisible(false), 2000)
                }}>
                <section
                    id={sections[i++]}
                    className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-gradient-to-b from-black/0 to-black/100">
                    <h1 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                        Hello, my name is {rxJSON?.name?.split(" ")?.[0]}.
                    </h1>
                    <div className="text-md mt-3 space-x-6 text-center font-sans font-normal uppercase tracking-wider text-gray-50 opacity-60">
                        {rxJSON?.tagline?.split(", ")?.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-row space-x-6">
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
                </section>
                <section
                    id={sections[i++]}
                    className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-black">
                    <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                        Skills
                    </h2>
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {rxJSON?.skills?.map(({ title, skills }, i) => {
                            if (!title || !skills) return null
                            return (
                                <div key={i} className="w-full">
                                    <h3 className="mt-8 w-full border-b border-gray-50 border-opacity-20 text-left">
                                        {title}
                                    </h3>
                                    <div className="mt-2 mb-6 mr-auto flex flex-row flex-wrap space-x-8">
                                        {skills.map(({ icon, name, color }, j) => {
                                            if (!icon || !name) return null
                                            const Icon = icon
                                            return (
                                                <div key={j} className="flex flex-row">
                                                    <Icon
                                                        title={name}
                                                        className="h-4 w-4"
                                                        color={color}
                                                    />
                                                    <div className="my-auto ml-2 text-sm font-medium text-gray-50">
                                                        {name}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section
                    id={sections[i++]}
                    className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-black">
                    <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                        Education
                    </h2>
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {rxJSON?.education?.map(
                            ({ name, date, location, degree, gpa, courses, clubs }, i) => {
                                if (!name || !date || !location || !courses || !clubs) return null

                                return (
                                    <div key={i} className="w-full">
                                        <h3 className="mt-8 w-full">{name}</h3>
                                        <div className="w-full border-b border-gray-50 border-opacity-20 pb-2 text-xs font-medium opacity-60">
                                            {toMonthYearString(date.from)} -{" "}
                                            {toMonthYearString(date.to)}
                                            <span className="mx-3">•</span>
                                            {location}
                                            {degree && <span className="mx-3">•</span>}
                                            {degree}
                                            {gpa && <span className="mx-3">•</span>}
                                            {gpa && "GPA: " + gpa}
                                        </div>
                                        <div className="mt-2 flex w-full flex-row space-x-8">
                                            <div className="flex w-1/2 flex-col">
                                                <h4>Relevant Coursework</h4>
                                                <ul className="ml-4 list-inside list-disc">
                                                    {courses.map(({ name, code }, i) => {
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
                                                    {clubs.map(({ org, role }, i) => {
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
                        )}
                    </div>
                </section>
                <section
                    id={sections[i++]}
                    className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-black">
                    <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                        Work Experience
                    </h2>
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {rxJSON?.experience?.map(
                            ({ role, date, location, company, description }, i) => {
                                if (!role || !date || !location || !description) return null

                                return (
                                    <div key={i} className="w-full">
                                        <h3 className="mt-8 w-full">{role}</h3>
                                        <div className="w-full border-b border-gray-50 border-opacity-20 pb-2 text-xs font-medium opacity-60">
                                            {toMonthYearString(date.from)} -{" "}
                                            {toMonthYearString(date.to)}
                                            {" (" +
                                                dateLength(
                                                    date.from,
                                                    date.to == "Present" ? null : date.to
                                                ) +
                                                ")"}
                                            {location && <span className="mx-3">•</span>}
                                            {location}
                                            {company && <span className="mx-3">•</span>}
                                            {company}
                                        </div>
                                        <div className="mt-2 flex flex-col">
                                            <h4>Responsibilities</h4>
                                            <ul className="ml-4 list-inside list-disc">
                                                {description.map((item, i) => {
                                                    if (!item?.length) return null
                                                    return <li key={i}>{item}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

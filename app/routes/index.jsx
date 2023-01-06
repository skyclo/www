import { useEffect, useRef, useState } from "react"
import rxJSON from "~/components/rx"
import Section from "~/components/Section"
import dateLength from "~/utils/dateLength"
import toMonthYearString from "~/utils/toMonthYearString"

let sections = [
    {
        id: "intro",
        bg: "gradient-in",
        children: () => (
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
        ),
    },
    {
        id: "skills",
        header: "Skills",
        mappedComponent: (skill, i) => (
            <div key={i} className="w-full">
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
        ),
    },
    {
        id: "education",
        header: "Education",
        mappedComponent: (institution, i) => (
            <div key={i} className="w-full">
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
        ),
    },
    {
        id: "experience",
        header: "Work Experience",
        mappedComponent: (job, i) => (
            <div key={i} className="w-full">
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
        ),
    },
]

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
        sections.forEach(section => observer.observe(document.querySelector("#" + section.id)))
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
                                (currentSection == section.id
                                    ? "bg-gradient-multi h-6"
                                    : "h-2 bg-gray-500")
                            }
                            onClick={e => {
                                e.preventDefault()
                                document.querySelector("#" + section.id)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                    inline: "nearest",
                                })
                            }}
                            title={section.header}></div>
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
                {sections.map((section, i) => (
                    <Section key={i} id={section.id} bg={section?.bg} header={section?.header}>
                        {section?.children && section.children()}
                        {section?.mappedComponent &&
                            rxJSON?.[section?.id]?.map((item, i) => {
                                if (!item) return null
                                return section.mappedComponent(item, i)
                            })}
                    </Section>
                ))}
            </main>
        </>
    )
}

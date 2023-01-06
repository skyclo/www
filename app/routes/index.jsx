import { useEffect, useRef, useState } from "react"
import Institution from "~/components/Institution"
import Intro from "~/components/Intro"
import Job from "~/components/Job"
import rxJSON from "~/components/rx"
import Skill from "~/components/Skill"

let sections = [
    {
        id: "intro",
        bg: "gradient-in",
        children: Intro,
    },
    {
        id: "skills",
        header: "Skills",
        mappedComponent: Skill,
    },
    {
        id: "education",
        header: "Education",
        mappedComponent: Institution,
    },
    {
        id: "experience",
        header: "Work Experience",
        mappedComponent: Job,
    },
]

export default function Index() {
    let [currentSection, setCurrentSection] = useState(null)
    let [navVisible, setNavVisible] = useState(false)
    let timeout = useRef(null)

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
                    <section
                        key={i}
                        id={section.id}
                        bg={section?.bg}
                        header={section?.header}
                        className={
                            "flex h-screen w-screen snap-start snap-always flex-col items-center justify-center " +
                            (section?.bg === "gradient-in"
                                ? "bg-gradient-to-b from-black/0 to-black/100"
                                : section?.bg === "gradient-out"
                                ? "bg-gradient-to-t from-black/0 to-black/100"
                                : "bg-black")
                        }>
                        {section?.header && (
                            <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                                {section?.header}
                            </h2>
                        )}
                        <div className="mx-auto flex max-w-7xl flex-col">
                            {section?.children && <section.children />}
                            {section?.mappedComponent &&
                                rxJSON?.[section?.id]?.map((item, i) => {
                                    if (!item) return null
                                    let MappedComponent = section?.mappedComponent
                                    return <MappedComponent item={item} key={i} />
                                })}
                        </div>
                    </section>
                ))}
            </main>
        </>
    )
}

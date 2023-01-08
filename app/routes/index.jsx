import { useEffect, useRef, useState } from "react"
import Certification from "~/components/Certification"
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
    {
        id: "certifications",
        header: "Certifications",
        grid: true,
        mappedComponent: Certification,
    },
    {
        id: "contact",
        bg: "gradient-out",
        header: "Contact",
        children: () => <p className="mt-8">Coming Soon</p>,
    },
]

export default function Index() {
    let [currentSection, setCurrentSection] = useState(sections?.[0]?.id)
    let [navVisible, setNavVisible] = useState(false)
    let timeout = useRef(null)

    useEffect(
        () =>
            document.querySelector("#" + sections?.[0]?.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            }),
        []
    )

    return (
        <>
            <nav
                className={
                    "absolute top-0 right-0 hidden h-full flex-col md:flex " +
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
                                setCurrentSection(section.id)

                                setTimeout(
                                    () =>
                                        document.querySelector("#" + section.id)?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                            inline: "nearest",
                                        }),
                                    200
                                )
                            }}
                            title={section.header}></div>
                    ))}
                </div>
            </nav>
            <main
                className="glowback h-screen w-screen snap-y snap-mandatory overflow-hidden bg-black bg-no-repeat"
                onWheel={e => {
                    let sectionIndex = sections?.findIndex(sect => sect?.id == currentSection)
                    if (sectionIndex == -1) return

                    let nextSectionIndex = (e.deltaY < 0 ? -1 : 1) + sectionIndex
                    if (nextSectionIndex < 0 || nextSectionIndex >= sections.length) return

                    setCurrentSection(sections?.[nextSectionIndex]?.id)

                    setTimeout(
                        () =>
                            document
                                .querySelector("#" + sections?.[nextSectionIndex]?.id)
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                    inline: "nearest",
                                }),
                        200
                    )

                    setNavVisible(true)
                    clearTimeout(timeout.current)
                    timeout.current = setTimeout(() => setNavVisible(false), 2000)
                }}>
                {sections.map((section, i) => (
                    <section
                        key={i}
                        id={section.id}
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
                        {section?.children && <section.children />}
                        <div
                            className={
                                "mt-3 flex px-4 md:mt-4 md:px-12 lg:mt-6 lg:max-w-7xl lg:px-0 " +
                                (section?.grid
                                    ? "grid auto-cols-fr grid-flow-row auto-rows-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2"
                                    : "flex flex-col space-y-3 md:space-y-6 lg:space-y-8")
                            }>
                            {section?.mappedComponent &&
                                rxJSON?.[section?.id]?.map((item, i) => {
                                    if (!item) return null
                                    let MappedComponent = section?.mappedComponent
                                    return <MappedComponent item={item} key={i} />
                                })}
                        </div>
                    </section>
                ))}
                <div className="relative bottom-0 mx-auto -mt-28 flex w-full flex-col py-12 text-center text-xs font-semibold opacity-20">
                    (C) 2018-2022 Conor Daly (Skyclo)
                </div>
            </main>
        </>
    )
}

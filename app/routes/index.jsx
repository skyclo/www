import { useEffect, useRef, useState } from "react"
import rx from "~/components/rx"

export default function Index() {
    let [currentSection, setCurrentSection] = useState(0)
    let [navVisible, setNavVisible] = useState(false)
    let timeout = useRef(null)

    useEffect(
        () =>
            document.querySelector("#" + rx?.[0]?.id)?.scrollIntoView({
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
                <div
                    className="my-auto flex flex-col space-y-4 bg-[radial-gradient(at_right_center,_theme(colors.purple.500/28%)_0%,_#00000000_65%)] px-8 py-28"
                    onMouseOver={() => {
                        clearTimeout(timeout.current)
                        setNavVisible(true)
                    }}
                    onMouseLeave={() => {
                        if (!navVisible) return

                        clearTimeout(timeout.current)
                        timeout.current = setTimeout(() => setNavVisible(false), 2000)
                    }}>
                    {rx.map((section, i) => (
                        <div
                            key={i}
                            className={
                                "w-2 cursor-pointer rounded-full " +
                                (currentSection == i ? "bg-gradient-multi h-6" : "h-2 bg-gray-500")
                            }
                            onClick={e => {
                                e.preventDefault()
                                setCurrentSection(i)

                                setTimeout(
                                    () =>
                                        document.querySelector("#" + section?.id)?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                            inline: "nearest",
                                        }),
                                    200
                                )
                            }}
                            title={section?.data?.header}></div>
                    ))}
                </div>
            </nav>
            <main
                className="glowback h-screen w-screen snap-y snap-mandatory overflow-hidden bg-black bg-no-repeat"
                onWheel={e => {
                    if (currentSection == -1) return

                    let nextSectionIndex = (e.deltaY < 0 ? -1 : 1) + currentSection
                    if (nextSectionIndex < 0 || nextSectionIndex >= rx.length) return

                    setCurrentSection(nextSectionIndex)

                    setTimeout(
                        () =>
                            document
                                .querySelector("#" + rx?.[nextSectionIndex]?.id)
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
                {rx.map((section, i) => (
                    <section
                        key={i}
                        id={section?.id}
                        className={
                            "flex h-screen w-screen snap-start snap-always flex-col items-center justify-center " +
                            (section?.styles?.bg === "gradient-in"
                                ? "bg-gradient-to-b from-black/0 to-black/100"
                                : section?.styles?.bg === "gradient-out"
                                ? "bg-gradient-to-t from-black/0 to-black/100"
                                : "bg-black")
                        }>
                        {section?.data?.header && (
                            <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                                {section?.data?.header}
                            </h2>
                        )}
                        {section?.children && <section.children data={section?.data} />}
                        <div
                            className={
                                "mt-3 px-4 md:mt-4 md:px-12 lg:mt-6 2xl:max-w-7xl 2xl:px-0 " +
                                (section?.styles?.grid
                                    ? "grid auto-cols-fr grid-flow-row auto-rows-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 "
                                    : "flex flex-col space-y-3 md:space-y-6 lg:space-y-8 ")
                            }>
                            {section?.mappedComponent &&
                                section?.data?.[section?.id || "items"]?.map((item, i) => {
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

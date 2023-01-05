import { Github, LinkedinIcon, TwitterIcon } from "lucide-react"
import {
    Adobe,
    Amazonaws,
    C,
    Circleci,
    Cloudflare,
    Csharp,
    CssThree,
    Docker,
    Firebase,
    Git,
    Github as GithubIcon,
    Googlecloud,
    Heroku,
    Html5,
    Inkscape,
    Javascript,
    Jest,
    Microsoftoffice,
    Mongodb,
    Nodedotjs,
    Openjdk,
    Postgresql,
    ReactJs,
    Sqlite,
    Supabase,
    Typescript,
    Webassembly,
} from "@icons-pack/react-simple-icons"
import { useEffect, useState } from "react"

let sections = ["intro", "skills"]

export default function Index() {
    let [currentSection, setCurrentSection] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.5,
            }
        )
        sections.forEach(section => observer.observe(document.querySelector("#" + section)))
    }, [])

    return (
        <>
            <nav className="absolute top-1/2 right-8 flex flex-col space-y-4">
                {sections.map((section, i) => (
                    <div
                        key={i}
                        className={
                            "h-2 w-2 cursor-pointer rounded-full " +
                            (currentSection == section ? "bg-gradient-multi" : "bg-gray-500")
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
            </nav>
            <main className="glowback h-screen w-screen snap-y snap-mandatory overflow-scroll bg-black bg-no-repeat">
                <section
                    id={sections[0]}
                    className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-gradient-to-b from-black/0 to-black/100">
                    <h1 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                        Hello, my name is Conor.
                    </h1>
                    <div className="text-md mt-3 space-x-6 text-center font-sans font-normal uppercase tracking-wider text-gray-50 opacity-60">
                        <span>Programmer</span>
                        <span>Designer</span>
                        <span>Entrepreneur</span>
                    </div>
                    <div className="mt-4 flex flex-row space-x-6">
                        {[
                            {
                                platform: "Github",
                                icon: Github,
                                link: "https://github.com/skyclo",
                            },
                            {
                                platform: "Twitter",
                                icon: TwitterIcon,
                                link: "https://twitter.com/skyclo_",
                            },
                            {
                                platform: "LinkedIn",
                                icon: LinkedinIcon,
                                link: "https://linkedin.com/in/skyclo",
                            },
                        ].map(({ platform, icon, link }) => {
                            if (!platform || !icon || !link) return null
                            const Icon = icon
                            return (
                                <Icon
                                    key={platform}
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
                    id={sections[1]}
                    className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-black">
                    <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                        Skills
                    </h2>
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {[
                            {
                                title: "Web Dev",
                                skills: [
                                    { icon: Javascript, name: "Javascript", color: "#F7DF1E" },
                                    { icon: Html5, name: "HTML", color: "#E34F26" },
                                    { icon: CssThree, name: "CSS", color: "#1572B6" },
                                    { icon: ReactJs, name: "React", color: "#61DAFB" },
                                    { icon: Typescript, name: "Typescript", color: "#3178C6" },
                                    { icon: Nodedotjs, name: "Node.js", color: "#339933" },
                                    {
                                        icon: Webassembly,
                                        name: "WebAssembly (WASM)",
                                        color: "#654FF0",
                                    },
                                ],
                            },
                            {
                                title: "Object Oriented & Procedural",
                                skills: [
                                    { icon: C, name: "C", color: "#A8B9CC" },
                                    { icon: Openjdk, name: "Java", color: "#FFFFFF" },
                                    { icon: Csharp, name: "C#", color: "#239120" },
                                ],
                            },
                            {
                                title: "Databases",
                                skills: [
                                    { icon: Mongodb, name: "MongoDB", color: "#47A248" },
                                    { icon: Postgresql, name: "PostgreSQL", color: "#4d77f7" },
                                    { icon: Sqlite, name: "SQLite", color: "#029ce3" },
                                    { icon: Firebase, name: "Firebase", color: "#FFCA28" },
                                    { icon: Supabase, name: "Supabase", color: "#3ECF8E" },
                                ],
                            },
                            {
                                title: "Technical",
                                skills: [
                                    { icon: Git, name: "Git", color: "#F05032" },
                                    { icon: Circleci, name: "CI and QA", color: "#cbcbcb" },
                                    { icon: Docker, name: "Docker", color: "#2496ED" },
                                    { icon: Jest, name: "Testing", color: "#C21325" },
                                ],
                            },
                            {
                                title: "Cloud",
                                skills: [
                                    { icon: Cloudflare, name: "Cloudflare", color: "#F38020" },
                                    {
                                        icon: Amazonaws,
                                        name: "Amazon Web Services",
                                        color: "#FF9900",
                                    },
                                    { icon: Googlecloud, name: "Google Cloud", color: "#4285F4" },
                                    { icon: Heroku, name: "Heroku", color: "#8628fc" },
                                ],
                            },
                            {
                                title: "Misc",
                                skills: [
                                    {
                                        icon: GithubIcon,
                                        name: "Open Source & Project Management",
                                        color: "#ecebeb",
                                    },
                                    {
                                        icon: Microsoftoffice,
                                        name: "Microsoft Office 365",
                                        color: "#D83B01",
                                    },
                                    { icon: Adobe, name: "Adobe Creative Suite", color: "#FF0000" },
                                    { icon: Inkscape, name: "Inkscape", color: "#ecebeb" },
                                ],
                            },
                        ].map(({ title, skills }, i) => {
                            if (!title || !skills) return null
                            return (
                                <div key={i}>
                                    <h3 className="mt-3 w-full border-b border-gray-50 border-opacity-20 text-left">
                                        {title}
                                    </h3>
                                    <div className="mt-3 mb-6 mr-auto flex flex-row flex-wrap space-x-8">
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
                <section className="flex h-screen w-screen snap-start snap-always flex-col items-center justify-center bg-black">
                    <h1>Index</h1>
                </section>
            </main>
        </>
    )
}

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
    Nextdotjs,
    Openjdk,
    Postgresql,
    ReactJs,
    Remix,
    Sqlite,
    Supabase,
    Tailwindcss,
    Typescript,
    Webassembly,
} from "@icons-pack/react-simple-icons"
import { useEffect, useState } from "react"

let sections = ["intro", "skills", "education", "experience"]
let rxJSON = {
    name: "Conor Daly",
    tagline: "Programmer, Designer, Entrepreneur",
    socials: [
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
    ],
    skills: [
        {
            title: "Web Dev",
            skills: [
                { icon: Javascript, name: "Javascript", color: "#F7DF1E" },
                { icon: Html5, name: "HTML", color: "#E34F26" },
                { icon: CssThree, name: "CSS", color: "#1572B6" },
                { icon: Tailwindcss, name: "TailwindCSS", color: "#06B6D4" },
                { icon: ReactJs, name: "React", color: "#61DAFB" },
                { icon: Remix, name: "Remix", color: "#FFFFFF" },
                { icon: Nextdotjs, name: "Next.js", color: "#FFFFFF" },
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
                { icon: Typescript, name: "Typescript", color: "#3178C6" },
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
    ],
    education: [
        {
            name: "University of Central Florida",
            date: {
                from: "Aug 2021",
                to: "Present",
            },
            location: "Orlando, FL",
            degree: "Computer Science (B.S.)",
            gpa: null,
            courses: [
                { name: "Computer Organization", code: "CDA 3103" },
                { name: "Intro to C", code: "COP 3223C" },
                { name: "Security in Computing", code: "CIS 3360" },
                { name: "Intro to Discrete Structures", code: "COT 3100" },
                {
                    name: "Object Oriented Programming (Java)",
                    code: "COP 3330",
                },
                { name: "Computer Science I (C)", code: "COP 3502" },
                { name: "Computer Science II (Java)", code: "COP 3503" },
            ],
            clubs: [
                { org: "UCF Excel Program", role: "Member" },
                {
                    org: "UCF KnightHacks",
                    role: "Fall 2021 Team #12 Project Lead",
                },
                { org: "UCF Model UN", role: "Former Member" },
            ],
        },
        {
            name: "High School",
            date: {
                from: "Aug 2017",
                to: "May 2021",
            },
            location: "Orlando, FL",
            degree: "Name available upon request",
            gpa: 4.26,
            courses: [
                { name: "Modeling and Simulation I-IV", code: null },
                { name: "AP Computer Science Principles", code: "Score: 4" },
                { name: "AP Computer Science A", code: "Score: 4" },
                { name: "AP Calculus AB", code: "Score: 3" },
                { name: "AP Calculus BC", code: "Score: 5" },
            ],
            clubs: [
                {
                    org: "Modeling and Simulation Club",
                    role: "Project Team Lead",
                },
                {
                    org: "FIRST FTC Team 4717",
                    role: "Assistant Programmer and Electrical Services",
                },
                { org: "Student Government", role: "Senior Senator" },
                { org: "Business Professionals of America", role: null },
                { org: "Science National Honors Society", role: "Member" },
                { org: "Key Club", role: "Member" },
            ],
        },
    ],
    experience: [
        {
            role: "Junior Software Developer (Techranger)",
            date: {
                from: "Oct 2021",
                to: "Mar 2022",
            },
            location: "Orlando, FL",
            company: "UCF Center for Distributed Learning",
            description: [
                "Cataloged and QA-ed 170 chapters of the University's official Chemistry Textbook",
                "Created a suite of 4 automation tools for CDL projects to conduct QA tests and track project progress",
            ],
        },
        {
            role: "Freelance Developer",
            date: {
                from: "2018",
                to: "2019",
            },
            location: "Orlando, FL",
            company: null,
            description: [
                "Developed a customer service ticketing and management system for a local business",
                "Completed over 14 contracts for website design, software development, OSINT research, etc.",
            ],
        },
        {
            role: "Summer Intern",
            date: {
                from: "Jun 2019",
                to: "Aug 2019",
            },
            location: "Orlando, FL",
            company: "Gizmo Productions",
            description: [
                "Maintained critical computer services and designed mockups for a company website redesign",
                "Worked directly with 4 clients to coordinate projects and created a final project with fellow interns",
            ],
        },
    ],
}

export default function Index() {
    let [currentSection, setCurrentSection] = useState(null)
    let i = 0

    useEffect(() => {
        const observer = new IntersectionObserver(
            sects =>
                sects.forEach(sect => sect.isIntersecting && setCurrentSection(sect.target.id)),
            { threshold: 0.5 }
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
                                            {date.from} - {date.to}
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
                                            {date.from} - {date.to}
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

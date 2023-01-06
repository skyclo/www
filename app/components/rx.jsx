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

export default {
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
                from: "2021-08",
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
                from: "2017-08",
                to: "2021-05",
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
                from: "2021-10",
                to: "2022-03",
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
                from: "2019-06",
                to: "2019-08",
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

import { GithubIcon, LinkedinIcon, Mails, TwitterIcon } from "lucide-react"
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
    Github,
    Googlecloud,
    Html5,
    Javascript,
    Jest,
    Kubernetes,
    Linkedin,
    Linux,
    Microsoftoffice,
    Microsoftsqlserver,
    Mongodb,
    Mysql,
    Nextdotjs,
    Openjdk,
    Oracle,
    Postgresql,
    Proxmox,
    Python,
    Qemu,
    ReactJs,
    Remix,
    Sqlite,
    Supabase,
    Tailwindcss,
    Twitter,
    Typescript,
    Webassembly,
} from "@icons-pack/react-simple-icons"
import Intro from "~/components/Intro"
import Skill from "~/components/Skill"
import Institution from "~/components/Institution"
import Job from "~/components/Job"
import Certification from "~/components/Certification"
import Project from "~/components/Project"
import Award from "~/components/Award"
import Social from "~/components/Social"

export default [
    {
        id: "intro",
        styles: {
            bg: "gradient-in",
        },
        children: Intro,
        mappedComponent: null,
        data: {
            header: null,
            name: "Conor Daly",
            tagline: "Welcome to my digital portfolio",
            items: [
                {
                    platform: "Github",
                    icon: GithubIcon,
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
        },
    },
    {
        id: "skills",
        styles: {},
        children: null,
        mappedComponent: Skill,
        data: {
            header: "Skills",
            skills: [
                {
                    title: "Web Dev",
                    items: [
                        { icon: Javascript, name: "Javascript", color: "#F7DF1E" },
                        { icon: Html5, name: "HTML", color: "#E34F26" },
                        { icon: CssThree, name: "CSS", color: "#1572B6" },
                        { icon: Tailwindcss, name: "TailwindCSS", color: "#06B6D4" },
                        { icon: ReactJs, name: "React", color: "#61DAFB" },
                        { icon: Remix, name: "Remix", color: "#FFFFFF" },
                        { icon: Nextdotjs, name: "Next.js", color: "#FFFFFF" },
                        {
                            icon: Webassembly,
                            name: "WebAssembly",
                            color: "#654FF0",
                        },
                    ],
                },
                {
                    title: "Object Oriented & Procedural",
                    items: [
                        { icon: C, name: "C", color: "#A8B9CC" },
                        { icon: Openjdk, name: "Java", color: "#FFFFFF" },
                        { icon: Csharp, name: "C#", color: "#239120" },
                        { icon: Typescript, name: "Typescript", color: "#3178C6" },
                        { icon: Python, name: "Python", color: "#3776AB" },
                    ],
                },
                {
                    title: "Databases",
                    items: [
                        { icon: Mongodb, name: "MongoDB", color: "#47A248" },
                        { icon: Postgresql, name: "PostgreSQL", color: "#4d77f7" },
                        { icon: Sqlite, name: "SQLite", color: "#029ce3" },
                        { icon: Firebase, name: "Firebase", color: "#FFCA28" },
                        { icon: Supabase, name: "Supabase", color: "#3ECF8E" },
                        { icon: Mysql, name: "MySQL", color: "#4479A1" },
                        { icon: Microsoftsqlserver, name: "MSSQL", color: "#CC2927" },
                    ],
                },
                {
                    title: "Technical",
                    items: [
                        { icon: Git, name: "Git", color: "#F05032" },
                        { icon: Circleci, name: "CI and QA", color: "#cbcbcb" },
                        { icon: Docker, name: "Docker", color: "#2496ED" },
                        { icon: Kubernetes, name: "Kubernetes", color: "#326CE5" },
                        { icon: Jest, name: "Testing", color: "#C21325" },
                    ],
                },
                {
                    title: "Cloud",
                    items: [
                        { icon: Cloudflare, name: "Cloudflare", color: "#F38020" },
                        {
                            icon: Amazonaws,
                            name: "Amazon Web Services",
                            color: "#FF9900",
                        },
                        { icon: Googlecloud, name: "Google Cloud", color: "#4285F4" },
                        { icon: Oracle, name: "Oracle Cloud", color: "#F80000" },
                    ],
                },
                {
                    title: "Misc",
                    items: [
                        {
                            icon: Github,
                            name: "Open Source & Project Management",
                            color: "#ecebeb",
                        },
                        {
                            icon: Microsoftoffice,
                            name: "Microsoft Office 365",
                            color: "#D83B01",
                        },
                        { icon: Adobe, name: "Adobe Creative Suite", color: "#FF0000" },
                        { icon: Proxmox, name: "Server Administration", color: "#8B0000" },
                    ],
                },
            ],
        },
    },
    {
        id: "projects",
        styles: {},
        children: null,
        mappedComponent: Project,
        data: {
            header: "Projects",
            projects: [
                {
                    name: "Agentic Toolkit for Heuristic Enhanced Network Analysis",
                    date: {
                        from: "2022-04",
                        to: "Present",
                    },
                    link: null,
                    image: "/images/athena.png",
                    description: [
                        "An intelligent data aggregation and big data analysis agentic platform",
                        "Developed to work at scale on a hyperconverged private cloud",
                        "Leverages technologies like Kubernetes, vLLM, RoCE",
                        "Written in TypeScript and Python",
                        "Powered by LLaMA 3, LangChain, ArcadeDB, and vLLM",
                    ],
                    stack: [
                        { icon: Typescript, name: "TypeScript", color: "#3178C6" },
                        { icon: Python, name: "Python", color: "#3776AB" },
                        { icon: Kubernetes, name: "Kubernetes", color: "#326CE5" },
                    ],
                },
                {
                    name: "WebEmu",
                    date: {
                        from: "2021-08",
                        to: "Present",
                    },
                    link: null,
                    image: "/images/webemu.png",
                    description: [
                        "A web-based containerized Linux emulator that bridges the gap between the browser and virtualization",
                        "Written in JavaScript, C, and WebAssembly",
                    ],
                    stack: [
                        { icon: Javascript, name: "JavaScript", color: "#F7DF1E" },
                        { icon: C, name: "C", color: "#A8B9CC" },
                        { icon: Webassembly, name: "WebAssembly", color: "#654FF0" },
                        { icon: Linux, name: "Linux", color: "#FFFFFF" },
                        { icon: Qemu, name: "QEMU", color: "#FF6600" },
                    ],
                },
                {
                    name: "Ideoxan",
                    date: {
                        from: "2020-03",
                        to: "2023-10",
                    },
                    link: "https://ideoxan.com",
                    image: "/images/ideoxan.png",
                    description: [
                        "SaaS Edtech platform offering free content for aspiring programmers at K-12 institutions",
                        "Written in Remix.run (React) and uses Supabase. Hosted on Cloudflare Workers and AWS.",
                        "Maintaining an open-source repository for website with over 30 stars and a dozen contributors",
                    ],
                    stack: [
                        { icon: ReactJs, name: "React", color: "#61DAFB" },
                        { icon: Javascript, name: "JavaScript", color: "#F7DF1E" },
                        { icon: Remix, name: "Remix", color: "#FFFFFF" },
                        { icon: Supabase, name: "Supabase", color: "#FFFFFF" },
                        { icon: Cloudflare, name: "Cloudflare", color: "#F38020" },
                        { icon: Amazonaws, name: "AWS", color: "#FF9900" },
                    ],
                },
                /* {
                    name: "node-scdl",
                    date: {
                        from: "2020-04",
                        to: "2021-05",
                    },
                    link: "https://github.com/skyclo/node-scdl",
                    image: "/images/node-scdl.png",
                    description: [
                        "An easy to use, minimal dependency Soundcloud song downloader.",
                        "Makes use of the SoundcloudAPI v1 and fetches the song based on provided metadata",
                        "Over 600 downloads on NPM",
                    ],
                    stack: [{ icon: Javascript, name: "JavaScript", color: "#F7DF1E" }],
                }, */
            ],
        },
    },
    {
        id: "jobs",
        styles: {},
        children: null,
        mappedComponent: Job,
        data: {
            header: "Experience",
            jobs: [
                {
                    role: "CWEP Software Engineer",
                    date: {
                        from: "2023-06",
                        to: "Present",
                    },
                    location: "Orlando, FL",
                    company: "Lockheed Martin",
                    description: [
                        "Created a new internal tool for generating powerpoint presentations for 30 programs",
                        "Added 7 features to 4 internal program support and contract management tools",
                        "Overhauled legacy build systems to use modern CI/CD practices for 5 internal tools",
                        "Introduced a new local linux-based (WSL) development workflow, reducing local build times by over 80%",
                        "Created a web directory for 6 internal web applications to be used by over 20 employees",
                    ],
                },
                {
                    role: "Techranger SWE",
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
                        from: "2017",
                        to: "2019",
                    },
                    location: "Orlando, FL",
                    company: null,
                    description: [
                        "Developed a customer service ticketing and management system for a local business",
                        "Completed over 14 contracts for website design, software development, OSINT research, etc.",
                    ],
                },
                /* {
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
                }, */
            ],
        },
    },
    {
        id: "education",
        styles: {},
        children: null,
        mappedComponent: Institution,
        data: {
            header: "Education",
            education: [
                {
                    name: "University of Central Florida",
                    date: {
                        from: "2021-08",
                        to: "Present",
                    },
                    location: "Orlando, FL",
                    degree: "Major: Computer Science (B.S.)",
                    gpa: null,
                    courses: [
                        { name: "Artificial Intelligence", code: "CAP 4360" },
                        { name: "Creativity and Entrepreneurship", code: "ENT 3613" },
                        { name: "Secure Operating Systems and Administration", code: "CIS 4361" },
                        { name: "Parallel and Distributed Processing", code: "COP 4520" },
                        { name: "Digital Forensics", code: "CIS 4203C" },
                        { name: "Database Systems", code: "COP 4710" },
                        { name: "Cyber Defense Analysis", code: "CIS 4364" },
                    ],
                    clubs: [
                        { org: "UCF Excel Program", role: "Member" },
                        { org: "UCF KnightHacks", role: "Member" },
                        { org: "UCF SPCB", role: "Member" },
                        {
                            org: "UCF KnightHacks",
                            role: "Fall 2021 Team #12 Project Lead",
                        },
                        { org: "UCF Model UN", role: "Former Member" },
                    ],
                },
                /* {
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
                },*/
            ],
        },
    },
    {
        id: "certifications",
        styles: {
            grid: true,
        },
        children: null,
        mappedComponent: Certification,
        data: {
            header: "Certifications",
            certifications: [
                {
                    name: "CompTIA CyberDefense Pro",
                    date: "2024-12",
                    organization: {
                        name: "CompTIA",
                        image: "/images/comptia.jpeg",
                    },
                },
                {
                    name: "Modeling and Simulation Certification",
                    date: "2021-03",
                    organization: {
                        name: "National Center for Simulation",
                        image: "/images/ncs.jpeg",
                    },
                },
                {
                    name: "Adobe Certified Associate",
                    date: "2020-03",
                    organization: {
                        name: "Adobe",
                        image: "/images/adobe.jpeg",
                    },
                },
                {
                    name: "IC3 Digital Literacy Certification",
                    date: "2016-03",
                    organization: {
                        name: "Certiport",
                        image: "/images/certiport.jpeg",
                    },
                },
                {
                    name: "Office 365 Certified Associate",
                    date: "2016-03",
                    organization: {
                        name: "Microsoft",
                        image: "/images/microsoft.jpeg",
                    },
                },
            ],
        },
    },
    {
        id: "awards",
        styles: {
            grid: true,
        },
        children: null,
        mappedComponent: Award,
        data: {
            header: "Awards and Recognition",
            awards: [
                {
                    name: "2021 AP Scholar with Distinction",
                    date: "2021-06",
                    organization: {
                        name: "Collegeboard",
                        image: "/images/collegeboard.jpeg",
                    },
                },
                {
                    name: "2021 Graphic Design Competition, 5th Place",
                    date: "2021-01",
                    organization: {
                        name: "Business Professionals of America",
                        image: "/images/bpa.jpeg",
                    },
                },
                {
                    name: "Best in Show Award, 5th Place",
                    date: "2020-11",
                    organization: {
                        name: "National Scholastic Press Association",
                        image: "/images/nationalscholasticpressassociation.jpeg",
                    },
                },
                {
                    name: "2020 AP Scholar with Distinction",
                    date: "2020-05",
                    organization: {
                        name: "Collegeboard",
                        image: "/images/collegeboard.jpeg",
                    },
                },
                {
                    name: "NCS Team Orlando Day Competition, 4th Place",
                    date: "2020-02",
                    organization: {
                        name: "National Center for Simulation",
                        image: "/images/ncs.jpeg",
                    },
                },
                {
                    name: "2018 World Championship, Design Award",
                    date: "2018-03",
                    organization: {
                        name: "FIRST FTC Robotics Competition",
                        image: "/images/first.jpeg",
                    },
                },
                {
                    name: "2018 Florida Championship, Inspire Award",
                    date: "2018-01",
                    organization: {
                        name: "FIRST FTC Robotics Competition",
                        image: "/images/first.jpeg",
                    },
                },
                {
                    name: "Presidential Award for Academic Excellence",
                    date: "2016-04",
                    organization: {
                        name: "US Department of Education",
                        image: "/images/usdoe.jpeg",
                    },
                },
            ],
        },
    },
    {
        id: "contact",
        styles: {
            bg: "gradient-out",
            grid: true,
        },
        children: null,
        mappedComponent: Social,
        data: {
            header: "Contact",
            items: [
                {
                    name: "Email",
                    link: "mailto:hello@skyclo.dev",
                    icon: {
                        name: Mails,
                        color: "#FFFFFF",
                    },
                },
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/skyclo/",
                    icon: {
                        name: Linkedin,
                        color: "#0A66C2",
                    },
                },
                {
                    name: "GitHub",
                    link: "https://github.com/skyclo",
                    icon: {
                        name: Github,
                        color: "#ecebeb",
                    },
                },
                {
                    name: "Twitter",
                    link: "https://twitter.com/skyclo_",
                    icon: {
                        name: Twitter,
                        color: "#1DA1F2",
                    },
                },
            ],
        },
    },
]

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

// TailwindCSS
import styles from "app/styles/app.css"

export const links = () => [{ rel: "stylesheet", href: styles }]

export const meta = () => ({
    title: "Conor Daly - skyclo.dev",
    description: "Conor's interactive, online portfolio.",
    keywords: "conor,daly,website,portfolio,resume,software,technology,programming,coding,skyclo",
    author: "Conor Daly",
    image: "/images/og_embed.png",

    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    language: "en-us",
    robots: "index, follow",

    "twitter:card": "summary_large_image",
    "twitter:url": "https://skyclo.dev",
    "twitter:title": "Conor Daly - skyclo.dev",
    "twitter:description": "Conor's interactive, online portfolio.",
    "twitter:image": "/images/og_embed.png",

    "og:type": "website",
    "og:url": "https://skyclo.dev",
    "og:title": "Conor Daly - skyclo.dev",
    "og:description": "Conor's interactive, online portfolio.",
    "og:image": "/images/og_embed.png",

    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
})

const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Conor Daly",
    url: "https://skyclo.dev/",
    image: "",
    sameAs: [
        "https://twitter.com/skyclo_",
        "https://linkedin.com/in/skyclo",
        "https://github.com/skyclo",
        "https://skyclo.dev/",
    ],
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            </head>
            <body className="bg-black">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

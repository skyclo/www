import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

// TailwindCSS
import styles from "app/styles/app.css"

export const links = () => [{ rel: "stylesheet", href: styles }]

export const meta = () => ({
    charset: "utf-8",
    title: "Conor Daly - skyclo.dev",
    viewport: "width=device-width,initial-scale=1",

    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
})

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
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

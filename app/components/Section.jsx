export default function Section({ children, header, bg, ...props }) {
    return (
        <section
            className={
                "flex h-screen w-screen snap-start snap-always flex-col items-center justify-center " +
                (bg === "gradient-in"
                    ? "bg-gradient-to-b from-black/0 to-black/100"
                    : bg === "gradient-out"
                    ? "bg-gradient-to-t from-black/0 to-black/100"
                    : "bg-black")
            }
            {...props}>
            {header && (
                <h2 className="bg-gradient-multi text-glow bg-clip-text text-center text-transparent">
                    {header}
                </h2>
            )}
            <div className="mx-auto flex max-w-7xl flex-col">{children}</div>
        </section>
    )
}

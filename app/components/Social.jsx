export default function Social({ item: social, ...props }) {
    console.log(social)
    if (!social?.icon?.name) return null

    return (
        <div
            className="flex w-full flex-grow cursor-pointer flex-row rounded-md px-4 pb-4 pt-4 ring-1 ring-gray-50 ring-opacity-20 hover:ring-opacity-30 "
            onClick={() => window.open(social?.link || "", "_blank")}>
            <social.icon.name
                title={social?.name}
                className="max-w-12 max-h-12 flex-shrink-0"
                color={social?.icon?.color}
            />
            <div className="ml-4 mr-auto flex flex-col">
                <h4 className="">{social?.name}</h4>
            </div>
        </div>
    )
}

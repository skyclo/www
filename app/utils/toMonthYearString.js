export default date => {
    if (date == null || date == "Present") return date
    return new Date(date).toLocaleString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    })
}

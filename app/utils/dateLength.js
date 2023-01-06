// Finds the interval between two Date objects and returns a string
// Ex:
//      "2 months"
//      "1 year"
//      "2 years, 3 months"
export default (from, to) => {
    from = new Date(from)

    if (to == null || to == "Present") to = new Date()
    else to = new Date(to)

    from.setUTCHours(0, 0, 0, 0)
    to.setUTCHours(0, 0, 0, 0)

    let years = to.getUTCFullYear() - from.getUTCFullYear()
    let months = to.getUTCMonth() - from.getUTCMonth()
    if (months < 0) {
        years--
        months += 12
    }

    let str = ""
    if (years > 0) str += years + " yr" + (years > 1 ? "s" : "")
    if (months > 0) str += (str ? ", " : "") + months + " mo" + (months > 1 ? "s" : "")
    return str
}

export function capitalize(string) {
    string = string.trim()

    if (string.length === 0) return ''

    if (!isCharLetter(string[0])) return 'Wrong input'

    const firstLetter = string[0].toUpperCase()
    const rest = string.slice(1, string.length)

    return firstLetter + rest
}

function isCharLetter(char) {
    return !(char.toLowerCase() === char.toUpperCase())
}
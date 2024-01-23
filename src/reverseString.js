export function reverseString(string) {
    const sentence = string.trim()

    let result = ''

    for (let i = sentence.length - 1; i >= 0; i--) {
        result += sentence[i]
    }

    return result
}
const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', ',', '!', '?', '-', '\'']
const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '.', ',', '!', '?', '-', '\'']

export function caesarCipher(string, shift) {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        result += getShiftedChar(string[i], shift);
    }

    return result
}

function getShiftedChar(char, shift) {
    if (char === ' ') return char

    if (char.toLowerCase() === char) {
        const charIndex = alphabetLower.findIndex(symbol => symbol === char)
        if (charIndex + shift > alphabetLower.length) {
            return alphabetLower[charIndex + shift - alphabetLower.length]
        } else {
            return alphabetLower[charIndex + shift]
        }
    } else {
        const charIndex = alphabetUpper.findIndex(symbol => symbol === char)
        if (charIndex + shift > alphabetUpper.length) {
            return alphabetUpper[charIndex + shift - alphabetUpper.length]
        } else {
            return alphabetUpper[charIndex + shift]
        }
    }
}
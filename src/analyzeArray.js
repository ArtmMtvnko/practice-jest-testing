export function analyzeArray(array) {
    let sum = 0
    let counterOfNumbers = 0
    let min = array[0]
    let max = array[0]

    for (const number of array) {
        if (number === null) continue

        sum += number
        counterOfNumbers++
        if (number < min) min = number
        if (number > max) max = number
    }

    return {
        average: Number((sum / counterOfNumbers).toFixed(2)),
        min: min,
        max: max,
        length: counterOfNumbers
    }
}
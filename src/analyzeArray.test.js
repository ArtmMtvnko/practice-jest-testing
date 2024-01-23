import { analyzeArray } from "./analyzeArray";

test('Basic scenario of analyzing array', () => {
    expect(analyzeArray([2, 1, 5, 7, 10]))
        .toEqual({
            average: 5,
            min: 1,
            max: 10,
            length: 5
        })
})

test('Analyzing array: float numbers', () => {
    expect(analyzeArray([2.5, 1.1, 5.3, 7.2, 10, 4.2]))
        .toEqual({
            average: 5.05,
            min: 1.1,
            max: 10,
            length: 6
        })
})

test('Analyzing array: null amoung numbers', () => {
    expect(analyzeArray([2.5, 1.1, null, 7.2, 11, 4.2]))
        .toEqual({
            average: 5.2,
            min: 1.1,
            max: 11,
            length: 5
        })
})

test('Analyzing array: negative numbers', () => {
    expect(analyzeArray([2.5, 1.1, -5, 7.2, 11, 4.2]))
        .toEqual({
            average: 3.5,
            min: -5,
            max: 11,
            length: 6
        })
})
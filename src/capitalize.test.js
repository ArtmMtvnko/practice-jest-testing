import { capitalize } from './capitalize.js'

test('Basic case', () => {
    expect(capitalize('hello world!')).toBe('Hello world!')
})

test('First letter has already capitalized', () => {
    expect(capitalize('Javascript')).toBe('Javascript')
})

test('First characters are not letter', () => {
    expect(capitalize('124& 3car))')).toBe('Wrong input')
})

test('Word contains numbers, but it not in the start of word', () => {
    expect(capitalize('wat4')).toBe('Wat4')
})

test('String has spaces before word', () => {
    expect(capitalize('   trim')).toBe('Trim')
})

test('Empty string', () => {
    expect(capitalize('')).toBe('')
})

test('On;y spaces in string', () => {
    expect(capitalize('   ')).toBe('')
})
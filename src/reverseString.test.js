import { reverseString } from './reverseString'

test('Basic scenario', () => {
    expect(reverseString('Hello world!')).toBe('!dlrow olleH')
})

test('Empty string', () => {
    expect(reverseString('')).toBe('')
})

test('Contains extra spaces', () => {
    expect(reverseString('   JavaScript  ')).toBe('tpircSavaJ')
})
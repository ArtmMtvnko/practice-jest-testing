import { caesarCipher } from "./caesarCipher";

test('Basic scenario of Ceasar Cipher', () => {
    expect(caesarCipher('javascript', 3)).toBe('mdydvfulsw')
})

test('Ceasar Cipher: using upper case letters', () => {
    expect(caesarCipher('HeLLo', 2)).toBe('JgNNq')
})

test('Ceasar Cipher: using upper case letters and spaces', () => {
    expect(caesarCipher('HeLLo World', 2)).toBe('JgNNq Yqtnf')
})
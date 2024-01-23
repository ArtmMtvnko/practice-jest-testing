import { Calculator } from "./calculator";

const calculator = new Calculator()

// ADD

test('Add: Basic scenario', () => {
    expect(calculator.add(2, 5)).toBe(7)
})

test('Add: fractional numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
})

test('Add: integer and fractional numbers', () => {
    expect(calculator.add(2, 0.3)).toBeCloseTo(2.3)
})

test('Add: negative numbers', () => {
    expect(calculator.add(2, -3)).toBe(-1)
})

test('Add: parametrs are strings (integer)', () => {
    expect(calculator.add('2', '-3')).toBe(-1)
})

test('Add: parametrs are strings (float)', () => {
    expect(calculator.add('0.4', '-0.1')).toBeCloseTo(0.3)
})

// SUBTRACT

test('Subtract: Basic scenario', () => {
    expect(calculator.subtract(9, 2)).toBe(7)
})

test('Subtract: fractional numbers', () => {
    expect(calculator.subtract(0.5, 0.2)).toBeCloseTo(0.3)
})

test('Subtract: integer and fractional numbers', () => {
    expect(calculator.subtract(0.4, 3)).toBeCloseTo(-2.6)
})

test('Subtract: negative numbers', () => {
    expect(calculator.subtract(-2, -3)).toBe(1)
})

test('Subtract: parametrs are strings (integer)', () => {
    expect(calculator.subtract('2', '3')).toBe(-1)
})

test('Subtract: parametrs are strings (float)', () => {
    expect(calculator.subtract('0.4', '-0.1')).toBeCloseTo(0.5)
})

// MULTIPLY

test('Multiply: Basic scenario', () => {
    expect(calculator.multiply(4, 5)).toBe(20)
})

test('Multiply: fractional numbers', () => {
    expect(calculator.multiply(0.2, 0.3)).toBeCloseTo(0.06)
})

test('Multiply: integer and fractional numbers', () => {
    expect(calculator.multiply(2, 0.3)).toBeCloseTo(0.6)
})

test('Multiply: negative numbers', () => {
    expect(calculator.multiply(2, -3)).toBe(-6)
})

test('Multiply: parametrs are strings (integer)', () => {
    expect(calculator.multiply('2', '-3')).toBe(-6)
})

test('Multiply: parametrs are strings (float)', () => {
    expect(calculator.multiply('0.4', '-0.1')).toBeCloseTo(-0.04)
})

// DIVIDE

test('Divide: Basic scenario', () => {
    expect(calculator.divide(8, 2)).toBe(4)
})

test('Divide: fractional numbers', () => {
    expect(calculator.divide(1.6, 0.2)).toBeCloseTo(8)
})

test('Divide: integer and fractional numbers', () => {
    expect(calculator.divide(2, 0.8)).toBeCloseTo(2.5)
})

test('Divide: negative numbers', () => {
    expect(calculator.divide(2, -0.8)).toBe(-2.5)
})

test('Divide: parametrs are strings (integer)', () => {
    expect(calculator.divide('2', '-4')).toBeCloseTo(-0.5)
})

test('Divide: parametrs are strings (float)', () => {
    expect(calculator.divide('0.4', '0.1')).toBeCloseTo(4)
})
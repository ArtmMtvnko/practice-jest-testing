console.log(parseInt('a'))

class Calculator {
    add(a, b, ...rest) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }
    
    divide(numerator, denominator) {
        return numerator / denominator
    }
    
    multiply(a, b, ...rest) {
        return a * b
    }
}

const calc = new Calculator()

console.log(calc.add(1, 2, 3, 4, 5))
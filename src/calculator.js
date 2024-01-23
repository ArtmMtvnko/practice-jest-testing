export class Calculator {
    add(a, b) {
        a = this.toNumber(a)
        b = this.toNumber(b)
        return a + b
    }

    subtract(a, b) {
        a = this.toNumber(a)
        b = this.toNumber(b)
        return a - b
    }
    
    divide(numerator, denominator) {
        numerator = this.toNumber(numerator)
        denominator = this.toNumber(denominator)
        return numerator / denominator
    }
    
    multiply(a, b) {
        a = this.toNumber(a)
        b = this.toNumber(b)
        return a * b
    }

    toNumber(num) {
        if (typeof(num) !== 'string') return num

        if (num.includes('.')) {
            return parseFloat(num)
        } else {
            return parseInt(num)
        }
    }
}
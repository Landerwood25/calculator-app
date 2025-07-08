export const calculate = (numbers: number[], nonNumbers: string[]) => {
return performOperation(numbers, nonNumbers[0]);

};
const performOperation = (numbers: number[], operand: string) => {
    switch (operand) {
        case "+":
            return doAddition(numbers);
        case "-":
            return doSubtraction(numbers[0], numbers[1]);
        case "*":
            return doMultiplication(numbers);
        case "/":
            return doDivision(numbers[0], numbers[1]);
    }
}
const doAddition = (addends: number[]) => {
    // let sum = 0;
    // addends.forEach((addend: number) => {
        // sum += addend;
    // });
    // return sum;    
    return addends[0] + addends[1];
};
const doSubtraction = (minuend: number, subtrahend: number) => {
    // let difference = minuend;
    // subtrahends.forEach((subtrahend: number) => {
        // difference -= subtrahend;
    // });
    // return difference;
    return minuend -= subtrahend;
};
const doMultiplication = (factors: number[]) => {
    // let product = 1;
    // factors.forEach((factor: number) => {
    //     product = product * factor;
    // });
    // return product;
    return factors[0] * factors[1];
};
const doDivision = (dividend: number, divisor: number) => {
    // let quotient = dividend;
    // divisors.forEach((divisor: number) => {
        // quotient = quotient / divisor;
    // });
    // return quotient;
    return dividend / divisor;
};
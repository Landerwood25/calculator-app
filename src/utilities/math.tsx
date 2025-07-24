export const calculate = (input: string) => {
  const numbers = input.split(/[\+\-\*\/]/g);
  const op = input.split(/\d\.?\d*/g).filter(Boolean);

  let result = parseFloat(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    try {
      let outCome = performOperation(
        [result, parseFloat(numbers[i])],
        op[i - 1]
      );
      result = outCome ? outCome : parseFloat(numbers[i - 1]);
    } catch (error) {
      console.error(error);
    }
  }

  return result.toString();
};

const performOperation = (numbers: number[], operand: string) => {
  switch (operand) {
    case "+":
      return numbers[0] + numbers[1];
    case "-":
      return numbers[0] - numbers[1];
    case "*":
      return numbers[0] * numbers[1];
    case "/":
      if (numbers[1] === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return numbers[0] / numbers[1];
  }
};

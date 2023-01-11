beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Addition", () => {
  test("The sum of the numbers 1 to 20 must be printed in the terminal", () => {
    const solution = require("../solution");
    const consoleOutput = consoleSpy.mock.calls.join()
    expect(consoleOutput).toContain(`${210}`);
  });
});

describe("2. Bottles on the Wall", () => {
  test("`There are i bottles of beer on the wall` must be printed 5 times in the terminal where i equals each number from 1 to 5", () => {
    const solution = require("../solution");
    for (let i = 1; i <= 5; i++) {
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`${i} bottle`));
    }
  });
});

describe("3. Odd/Even", () => {
  test("Each number between 0 and 20 must be printed in the terminal using the correct form ('i is even' or 'i is odd')", () => {
    const solution = require("../solution");
    for (let i = 0; i <= 20; i++) {
      if (i % 2 == 0) {
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`${i} is even`));
      } else {
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`${i} is odd`));
      }
    }
  });
});

describe("4. Multiplication Tables", () => {
  test("Multiplication result of each number between 1 and 10 by 9 must be printed in the terminal", () => {
    const solution = require("../solution");
    const consoleOutput = consoleSpy.mock.calls.join()
    for (let i = 0; i <= 10; i++) {
      expect(consoleOutput).toContain(`${i * 9}`)
    }
  });
});

describe("5. Fizz Buzz", () => {
  test("'Fizz', 'Buzz' and 'FizzBuzz' are printed correct number of times", () => {
    const solution = require("../solution");
    const ConsoleLogsArr = consoleSpy.mock.calls
    expect(ConsoleLogsArr.filter(x => x.join("") == "FizzBuzz").length).toEqual(6);
    expect(ConsoleLogsArr.filter(x => x.join("") == "Fizz").length).toEqual(27);
    expect(ConsoleLogsArr.filter(x => x.join("") == "Buzz").length).toEqual(14);
  });
});

describe("6. Sum of Multiple", () => {
  test("Sum of Multiples of 3 and 5 until 1000 is printed in the terminal", () => {
    const solution = require("../solution");
    expect(consoleSpy.mock.calls.join()).toContain('33165');
  });
});
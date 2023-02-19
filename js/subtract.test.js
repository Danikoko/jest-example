const subtract = require('./subtract');

test('properly subtracting two numbers', () => {
    expect(
        subtract(1,4)
    ).toBe(-3);
});
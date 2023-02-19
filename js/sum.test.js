const sum = require('./sum');

test('properly adds two numbers', () => {
    expect(
        sum(1,4)
    ).toBe(5);
});
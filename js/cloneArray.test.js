const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const numberArray = [1, 2, 3]
    expect(
        cloneArray(numberArray)
    ).toEqual(numberArray);
});
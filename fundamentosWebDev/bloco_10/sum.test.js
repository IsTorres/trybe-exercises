const sum = require('./sum');

describe('sum', () => {
  test('4 plus 5 is 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('0 plus 0 is 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('message of error is "parameters must be numbers"', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  })

  test('Throw a error if any element arent a number', () => {
    expect(() => sum('a','b')).toThrow();
  });
})
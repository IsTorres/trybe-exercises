const fizzbuzz = require('./fizzBuzz');

describe('FizzBuzz', () => {
  test('test if the returt is fizzbuzz', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });

  test('test fizz, divisible by 3', () => {
    expect(fizzbuzz(9)).toEqual('fizz');
  });

  test('test buzz, divisible by 5', () => {
    expect(fizzbuzz(10)).toEqual('buzz');
  });

  test('test a number not divisible by 3 or 5', () => {
    expect(fizzbuzz(13)).toEqual(13);
  });

  test('test not a number', () => {
    expect(fizzbuzz('a')).toEqual(false);
  });
})
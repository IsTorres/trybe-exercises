const fizzbuzz = require('./fizzBuzz');

describe('FizzBuzz', () => {
  test('test if the returt is fizzbuzz', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  })
})
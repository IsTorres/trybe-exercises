const myRemove = require('./myRemove');

describe('myRemove', () => {
  test('verify if myRemove remove the element', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('verify if myRemove not mantain the same array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('verify if the array passed in parameter stil the same', () => {
    const myArr = [5, 6, 7, 8];
    myRemove(myArr, 5);
    expect(myArr).toEqual([5, 6, 7, 8]);
  })

  test('verify the array return the right format', ()=> {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})
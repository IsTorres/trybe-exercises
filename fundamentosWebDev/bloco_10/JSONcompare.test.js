const obj1 = require('./JSONcompare');
const obj2 = require('./JSONcompare');
const obj3 = require('./JSONcompare');

describe('obj1 description is equal obj 2 discription', () => {
  test('obj1 description is equal obj2 description', () => {
    expect(obj1.description === obj2.description).toEqual(true);
  });

  test('obj1 description is equal obj3 description', () => {
    expect(obj1.description === obj3.description).toEqual(true);
  });

  test('obj2 description is equal obj3 description', () => {
    expect(obj2.description === obj3.description).toEqual(true);
  });

  test('obj1 title is equal obj 2 title', () => {
    expect(obj1.title === obj2.title).toEqual(true);
  });

  test('obj1 title is equal obj 3 title', () => {
    expect(obj1.title !== obj3.title).toEqual(false);
  });

  test('obj2 title is equal obj 3 title', () => {
    expect(obj2.title !== obj3.title).toEqual(false);
  });
})
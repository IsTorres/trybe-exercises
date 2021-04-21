const {
  uppercase,
  getUserName,
 } = require('./exercises');

// 1:
describe('Tests for uppercase function', () => {
  it('test with uppercase return TEST', () => { // (done)
    uppercase('test', (str) => expect(str).toBe('TEST'));
    // done();
  });
});

// 2:
describe('Tests for getUseName function', () => {
  it('find the user with ID 4', async () => {
    await expect(getUserName(4)).resolves.toEqual('Mark');
  });

  it('find the user with ID 5', async () => {
    await expect(getUserName(5)).resolves.toEqual('Paul');
  });

  it('not find the user', async () => {
    // const id = 1;
    // await expect(getUserName(id)).rejects.toMatch({ error: `User with ${id} not found.` });
    expect.assertions(1);
    await expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.'})
  });
});
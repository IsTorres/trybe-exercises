const uppercase = require('./exercises');

describe('Tests for uppercase function', () => {
  it('test word test', () => { // (done)
    uppercase('test', (str) => expect(str).toBe('TEST'));
    // done();
  })
})
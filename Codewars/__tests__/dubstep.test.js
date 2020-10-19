const songDecoder = require('../dubstep');

describe('(Codewars) dubstep song decoder', () => {
  it('test #1:', () => {
    const test1 = songDecoder('AWUBBWUBC');
    const result = 'A B C';
    expect(test1).toBe(result);
  });

  it('test #2, only 1 space should be found', () => {
    const test2 = songDecoder('AWUBWUBWUBBWUBWUBWUBC');
    const result = 'A B C';
    expect(test2).toBe(result);
  });

  it('test #3: no extra space at the first line or last line', () => {
    const test3 = songDecoder("WUBAWUBBWUBCWUB");
    const result = 'A B C';
    expect(test3).toBe(result);
  });
});

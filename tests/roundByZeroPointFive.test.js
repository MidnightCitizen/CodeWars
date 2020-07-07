const roundByZeroPointFive = require('../exercices/roundByZeroPointFive');

test('Four point 2 is close to Four', () => {
    expect(roundByZeroPointFive(4.2)).toBe(4);
});

test('Four point 3 is close to four point five', () => {
    expect(roundByZeroPointFive(4.3)).toBe(4.5);
});
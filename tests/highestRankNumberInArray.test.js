const highestRank = require('../exercices/highestRank');

test('Return the most frequent number', () => {
    expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).toBe(12);
});

test('Tie, return the largest number', () => {
    expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])).toBe(12);
});
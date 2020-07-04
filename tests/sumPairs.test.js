const sum_pairs = require('../exercices/sumPairs');

test('1) Return first sum value', () => {
    expect(sum_pairs([11, 3, 7, 5], 10)).toEqual([3, 7]);
});

test('2) Return first sum value', () => {
    expect(sum_pairs([1,2,3,4,1,0], 2)).toEqual([1, 1]);
});

test('3) Return first sum value', () => {
    expect(sum_pairs([10,5,2,3,7,5], 10)).toEqual([3, 7]);
});

test('4) Return first sum value', () => {
    expect(sum_pairs([4, 3, 2, 3, 4], 6)).toEqual([4, 2]);
});
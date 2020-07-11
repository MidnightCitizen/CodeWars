// Examples 

/* 
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/

const { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = require('../exercices/calculatingWithFunctions');

test('7 * 5 = 35', () => {
    expect(seven(times(five()))).toBe(35);
});

test('4 + 9 = 13', () => {
    expect(four(plus(nine()))).toBe(13);
});

test('8 - 3 = 5', () => {
    expect(eight(minus(three()))).toBe(5);
});

test('6 / 2 = 3', () => {
    expect(six(dividedBy(two()))).toBe(3);
});

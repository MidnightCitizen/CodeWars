const abbreviate = require('../exercices/abbreviate');


test('world less than 4 lengths : are -> are', () => {
    expect(abbreviate("are")).toEqual("are");
});

test('world with no special case : internationalization -> i18n', () => {
    expect(abbreviate("internationalization")).toEqual("i18n");
});

test('world with no special case : accessibility -> a11y', () => {
    expect(abbreviate("accessibility")).toEqual("a11y");
});

test('world with upper case : Accessibility -> A11y', () => {
    expect(abbreviate("Accessibility")).toEqual("A11y");
});

test('word with hyphen', () => {
    expect(abbreviate("elephant-ride")).toEqual("e6t-r2e");
});

test('word with space', () => {
    expect(abbreviate("elephant ride")).toEqual("e6t r2e");
});




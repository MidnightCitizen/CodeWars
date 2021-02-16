const autocomplete = require('../exercices/autocomplete');

test('return two words from an array of five', () => {
    expect(autocomplete('ai', ['airplane','airport','apple','ball', 'moon'])).toEqual(['airplane','airport']);
});

test('string should be considered empty, return empty array', () => {
    expect(autocomplete('$%^', ['airplane','airport','apple','ball'])).toEqual([]);
});

test('should treat only letters and return good results', () => {
    expect(autocomplete('co$m^', ['airplane','airport','communicate','ball', 'creature', 'common'])).toEqual(['communicate', 'common']);
});


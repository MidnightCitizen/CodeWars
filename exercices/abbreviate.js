/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
*/


function abbreviate(string) {
  if(string.length < 4)   return string;
  if(!/^[a-zA-Z0-9]*$/.test(string)) return abbreviate(string.substr(0, string.indexOf('-'))) + '-' + abbreviate(string.substr(string.indexOf('-') + 1));
    return string[0] + (string.length - 2) + string[string.length - 1];
  }

module.exports = abbreviate;
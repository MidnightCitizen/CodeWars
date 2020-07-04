/*
The autocomplete function will take in an input string and a 
dictionary array and return the values from the dictionary 
that start with the input string. 
If there are more than 5 matches, 
restrict your output to the first 5 results. 
If there are no matches, return an empty array.
*/

// ## MY-SOLUTION ## 
function autocomplete(input, dictionary){
  const filterInput = input.replace(/[^a-zA-Z ]/g, "");
  const result =[];

  if(filterInput.length === 0) return result;

  dictionary.forEach(element => {
      const matchResult = element.substring(0, filterInput.length).toLowerCase().localeCompare(filterInput) === 0;
      if (matchResult && result.length <= 4 ) {
          result.push(element);
      }
  });

  return result;
}

// ## INTELLIGENT SOLUTION ## //

function smartAutocomplete(input, dictionary){
    var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
    return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
  }


module.exports = autocomplete;
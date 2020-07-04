//Given a list of integers and a single sum value, 
//return the first two values (parse from the left please) 
//in order of appearance that add up to form the sum.

// Example 

//sum_pairs([11, 3, 7, 5],         10)
//#              ^--^      3 + 7 = 10
//== [3, 7]

//Negative numbers and duplicate numbers can and will appear.
 
/*NOTE: There will also be lists tested 
of lengths upwards of 10,000,000 elements. 
Be sure your code doesn't time out.*/

var sum_pairs=function(ints, s){
let cache = {};
for(let i = 0; i < ints.length; i++) {
    if(cache.hasOwnProperty(s - ints[i])) {
        return [s - ints[i], ints[i]];
    }
    cache[ints[i]] = 1;
}    
return undefined;
}
var CLEVER_sum_pairs=function(ints, s){
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
  }


module.exports = sum_pairs;

// FIRST SOLUTION, TIMEOUT
/*var sum_pairs=function(ints, s){
    let result = [];
    let j = 0;
    for(let x = 0; x < ints.length ; x++) {
        let i = 1 + j;
        for (let y = i; y < ints.length; y++) {
            if(ints[x] + ints[y] == s) {
                result.push([x, y]);
            }
        }
        j++;
    }
    if (result.length === 0) return undefined;
    if (result.length === 1) return [ints[result[0][0]], ints[result[0][1]]];
    let smallestIndice = returnSmallestIndice(result);
    return [ints[result[smallestIndice][0]], ints[result[smallestIndice][1]]];
  
}

function returnSmallestIndice(array) {
    let indices = [];
    for(let i = 0; i < array.length; i++) {
        indices.push(array[i][1]-array[i][0]);
    }
    return indices.indexOf(Math.min(...indices));
}*/


/* SECOND SOLUTION 
var sum_pairs=function(ints, s){
let indice = [];
// i : first pair / j : second pair
for (let i = 0; i < ints.length; i++) {
let pointer = ints[i];
let j = ints.slice(i+1).indexOf(s - pointer);

if (j !== -1) {
    j = j + i +1;
    if (i !== j) {
        if(indice.length === 0) {
            indice.push(i, j);
        }
        else {
            if(j < indice[1]) {
                indice = [];
                indice.push(i, j);
            }
        }
    }

}  
}
if (indice.length !== 0) return [ints[indice[0]], ints[indice[1]]];
return undefined;

}*/

// THIRD SOLUTION : timeout
/*var sum_pairs=function(ints, s){
let indice = [0, 0];
for (let i = 1;  i < s; i++) {
    let foundFirstPair = ints.indexOf(i);
    if(foundFirstPair !== -1) {
       let foundSecondPair = ints.indexOf(s - i);
       if(foundSecondPair !== -1 && foundFirstPair !== foundSecondPair) {
           if(foundFirstPair < foundSecondPair){
                indice.push([foundFirstPair, foundSecondPair]);
           } else {
            indice.push([foundSecondPair, foundFirstPair]);
           }
       }
    }
}
console.log(indice);
return undefined;
}*/
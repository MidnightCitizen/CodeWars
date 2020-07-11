/* Instructions
 This time we want to write calculations using functions and get the results 
 */


/* Examples
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/

/* Requirements
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
*/

// My Solution
//(seven(times(five())), 35)

let n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
}


let zero = n(0);
let one = n(1);
let two = n(2);
let three = n(3);
let four = n(4) ;
let five = n(5);
let six = n(6);
let seven = n(7);
let eight = n(8);;
let nine = n(9);

function plus(x) { 
    return function(y) {
      return y + x;
    }
}
function minus(x) {
  return function(y) {
    return y - x;
  }
}
function times(x) { 
  return  function(y) {
  return y * x;
}
}
function dividedBy(x) {
  return  function(y) {
    return y / x;
  }
}






// Clever solution from another code warrior    
/*
function cleverSolution(argument){
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
}
*/
module.exports =  {
    zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy
}

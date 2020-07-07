// Instructions : Round any given number to the closest 0.5 step

// Examples : 
// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5

// My Solution
function roundByZeroPointFive(n){
    const number = Math.floor(n);
    const decimal = parseInt((n % 1).toFixed(1)[2]);
    console.log(decimal);
    if(0 < decimal && decimal < 3) {
        return number;
    }

    if(3 <= decimal && decimal <= 7) {
        return number + 0.5;
    }

    if(7 < decimal && decimal <= 9) {
        return number + 1;
    }
    }


// A clever solution    
function cleverSolution(n){
    return Math.round(n*2)/2;
    }

module.exports = roundByZeroPointFive;
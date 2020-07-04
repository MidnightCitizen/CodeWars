/*
Complete the method which returns the number 
which is most frequent in the given input array. 
If there is a tie for most frequent number, 
return the largest number among them.

Note: no empty arrays will be given.*/
function highestRank(arr){
let dict = {};

arr.sort().forEach(element => {
    if(element in dict) {
        dict[element] += 1;
    } else {
        dict[""+element] = 1;
    }
});


let highest= Object.keys(dict)[0];
for (const number in dict) {
    if (dict[highest] <= dict[number] && Number(highest) < Number(number)) {
        highest = number   
    }
}

return Number(highest);

}
const cleverHighestRank = arr => {
    let nums = {};
    arr.forEach(el => {
        nums[el] ? nums[el]++ : nums[el] = 1;
    })   
    return +Object.keys(nums).reduce((a, b) => nums[a] > nums[b] ? a : b);
}

    module.exports = highestRank;
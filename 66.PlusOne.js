/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const arr = []
    let remember = 1
    const len = digits.length

    for(let i = len - 1; i >= 0; i--){
        const sum = digits[i] + remember
        if(sum >= 10) arr.push(sum - 10)
        else{
            arr.push(sum)
            remember = 0
        }
    }
    if(remember) arr.push(remember)
    return arr.reverse()
};
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split("")
    const len = arr.length
    const half = Math.trunc(len)
    for(let i = 0; i < half; i++){
        if(arr[i] !== arr[len - 1 - i]) return false
    }
    return true
};
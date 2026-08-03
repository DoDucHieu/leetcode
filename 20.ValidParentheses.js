/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    const arr = s.split("")
    const stack = []
    for(let i = 0; i< arr.length; i++){
        if(stack.length && stack[stack.length - 1] === obj[arr[i]]) stack.pop()
        else stack.push(arr[i])
    }
    return !stack.length
};
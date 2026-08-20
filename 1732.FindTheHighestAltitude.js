/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const arr = [0]
    let current = arr[0]
    for(let i = 0; i < gain.length; i++){
        current+= gain[i]
        arr.push(current)
    }
    const max = Math.max(...arr)
    return max
};
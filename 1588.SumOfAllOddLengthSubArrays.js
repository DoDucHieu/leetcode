/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0
    const prefix = [0]

    for(let i = 0; i< arr.length; i++){
        prefix[i+1] = prefix[i] + arr[i]
    }

    for(let step = 0; step < arr.length; step += 2){
        for(let i = 0; i + step < arr.length; i++){
            total += prefix[i + step + 1] - prefix[i]
        }
    }
    return total
};
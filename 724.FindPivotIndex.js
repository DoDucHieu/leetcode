/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefixLeft, prefixRight
    let prefix = [0]

    for(let i = 0; i<nums.length; i++){
        prefix[i + 1] = prefix[i] + nums[i]
    }

    for(let i = 0; i<= nums.length; i++){
        prefixLeft = prefix[i]
        prefixRight = prefix[nums.length] - prefix[i + 1]
        if(prefixLeft === prefixRight) return i
    }
    return -1
};
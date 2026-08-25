/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let left = 0
    let right = nums.reduce((total, item) => total += item, 0)
    
    for(let i = 0; i < nums.length; i++){
        left+= nums?.[i - 1] ? nums[i - 1] : 0 
        right-= nums[i]
        if(left === right) return i
    }
    
    return -1
};
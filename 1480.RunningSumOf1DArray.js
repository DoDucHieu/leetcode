/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const prefixSum = []
    prefixSum[0] = nums[0]
    for(let i = 1; i < nums.length; i++){
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }
    return prefixSum
};
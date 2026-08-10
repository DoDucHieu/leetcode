/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let emptyIdx
    const obj = {}
    for(let i = 0; i< nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
            if(emptyIdx) {
                nums[emptyIdx] = nums[i]
                emptyIdx++
            }
        }
        else{
            if(obj[nums[i]] < 2){
                obj[nums[i]]++
                if(emptyIdx){
                    nums[emptyIdx] = nums[i]
                    emptyIdx++
                }
            }
            else{
                if(!emptyIdx) emptyIdx = i
            }
        }
    }
    return emptyIdx || nums.length
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    nums.forEach((item)=>{
        if(!obj[item]) obj[item] = true
        else delete obj[item]
    })
    return Number(Object.keys(obj)[0])
};
var twoSum = function(nums, target) {
    const obj = {}
    for (let index = 0; index < nums.length; index++) {
        const item = nums[index];
        if (typeof(obj[target - item]) === "number") {
            return [obj[target - item], index];
        } else {
            obj[item] = index;
        }
    }
    return [];
};
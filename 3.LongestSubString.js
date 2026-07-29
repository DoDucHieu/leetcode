var lengthOfLongestSubstring = function(s) {
    const arr = s.split("")
    let leftIndex = 0
    let rightIndex = 0
    let max = 0
    const map = new Map()
    for(let i=0; i< arr.length; i++){
        rightIndex = i
        if(!map.has(arr[i])){
            map.set(arr[i], i)
        }
        else{
            leftIndex = map.get(arr[i]) + 1 > leftIndex ? map.get(arr[i]) + 1 : leftIndex
            map.set(arr[i], i)
        }
        if(rightIndex - leftIndex + 1 - max > 0) max = rightIndex - leftIndex + 1
    }
    return max
};
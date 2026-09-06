/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const arr1 = a.split("")
    const arr2 = b.split("")
    const len = arr1.length > arr2.length ? arr1.length : arr2.length
    let remember = 0
    let res = ""
    for(let i = 0; i < len; i++){
        const a = arr1?.[arr1.length - i - 1] || "0"
        const b = arr2?.[arr2.length - i - 1] || "0"
        const total = Number(a) + Number(b) + remember
        if(total === 3){
            res = `1${res}`
            remember = 1
        }
        else if (total === 2){
            res = `0${res}`
            remember = 1
        }
        else{
            res = `${total}${res}`
            remember  = 0
        }
    }
    if(remember === 1) res = `1${res}`
    return res
};
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const arr = new Array(ratings.length).fill(1); 
    var total = 0

    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i - 1]) {
            arr[i] = arr[i - 1] + 1
        }
    }

    for(let i = ratings.length - 1; i > 0; i--){
        if(ratings[i - 1] > ratings[i]) arr[i - 1] = Math.max(arr[i - 1], arr[i] + 1)
        total += arr[i - 1]
    }
    return total + arr[ratings.length - 1]
};
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const arr = []
    const obj = {}

    for(let i = 0; i < ratings.length; i++){
        const prevRate = ratings[i - 1]
        const nextRate = ratings[i + 1]
        const currRate = ratings[i]

        if(i === 0 && currRate <= nextRate) obj[i] = 1

        if(i === ratings.length - 1 && currRate < prevRate) obj[i] = 1

        if(currRate < prevRate && currRate < nextRate) obj[i] = 1
    }

    console.log(obj);
};

const ratings = [1,2,2]
const res = candy(ratings)
console.log(res);

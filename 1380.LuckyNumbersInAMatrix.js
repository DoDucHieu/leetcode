/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const rowArr = []
    const colArr = []
    const res = []

    for(let i = 0; i < matrix.length; i++){
        let min = matrix[i][0]
        for(let j = 0; j < matrix[i].length; j++){
            min = Math.min(matrix[i][j], min)
        }
        rowArr.push(min)
    }

    for(let i = 0; i < matrix[0].length; i++){
        let max = matrix[0][i]
        for(let j = 0; j < matrix.length; j++){
            max = Math.max(matrix[j][i], max)
        }
        colArr.push(max)
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(rowArr[i] === colArr[j]) res.push(rowArr[i])
        }
    }
    return res
};
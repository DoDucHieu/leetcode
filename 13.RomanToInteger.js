/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const str = s.split("")
    const len = str.length
    let i = 0
    let total = 0
    while(i < len){
        if(str[i] === "I"){
            if(str[i+1] === "V"){
                total += 4
                i += 2
            }
            else if(str[i+1] === "X"){
                total += 9
                i += 2
            }
            else {
                total += 1
                i++
            }
        }

        if(str[i] === "X"){
            if(str[i+1] === "L"){
                total += 40
                i += 2
            }
            else if(str[i+1] === "C"){
                total += 90
                i += 2
            }
            else {
                total += 10
                i++
            }
        }

        if(str[i] === "C"){
            if(str[i+1] === "D"){
                total += 400
                i += 2
            }
            else if(str[i+1] === "M"){
                total += 900
                i += 2
            }
            else {
                total += 100
                i++
            }
        }
        if(str[i] === "V"){
            total += 5
        }
        if(str[i] === "L"){
            total += 50
        }
        if(str[i] === "D"){
            total += 500
        }
        if(str[i] === "M"){
            total += 1000
        }
    }
    returnt
};

const s = "III"
const res = romanToInt(s)
console.log(res);

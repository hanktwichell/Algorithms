/* 
Recursive Sigma
Output: sum of integers from 1 to Input integer
*/

function recursiveSigma(input) {
    if (input < 1)
        return 0
    return recursiveSigma(input-1) + parseInt(input)
}

const num1 = 5;
const expected1 = 15;

const num2 = 2.5;
const expected2 = 3;

const num3 = -1;
const expected3 = 0;

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))

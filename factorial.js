/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (123)
rFact(6.8) = 720 (12345*6)
*/

function recursiveFactorial(n) {
    n = parseInt(n)
    if (n<=0)
        return 1
    return n*recursiveFactorial(n-1)
}

const num1 = 3;
const expected1 = 6;
// Explanation: 123 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 123456 = 720

const num3 = 0;
const expected3 = 1;

console.log(recursiveFactorial(num1))
console.log(recursiveFactorial(num2))
console.log(recursiveFactorial(num3))

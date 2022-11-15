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
console.log("-----------------")

/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

function fibonacci(n) {
    if (n==0)
        return 0
    if (n==1)
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

const num21 = 0;
const expected21 = 0;

const num22 = 1;
const expected22 = 1;

const num23 = 2;
const expected23 = 1;

const num24 = 3;
const expected24 = 2;

const num25 = 4;
const expected25 = 3;

const num26 = 8;
const expected26 = 21;

console.log(fibonacci(num21))
console.log(fibonacci(num22))
console.log(fibonacci(num23))
console.log(fibonacci(num24))
console.log(fibonacci(num25))
console.log(fibonacci(num26))

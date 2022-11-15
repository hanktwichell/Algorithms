/* 
Recursive Sigma
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;

const num2 = 2.5;
const expected2 = 3;

const num3 = -1;
const expected3 = 0;

function recursiveSigma(input) {
    if (input < 1)
        return 0
    return recursiveSigma(input-1) + parseInt(input)
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))


/*
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expectedv1 = 6;

const nums2 = [1];
const expectedv2 = 1;

const nums3 = [];
const expectedv3 = 0; 

function sumArray(nums) {
    if (nums.length == 0)
        return 0
    return nums.shift() + sumArray(nums)
}

console.log(sumArray(nums1))
console.log(sumArray(nums2))
console.log(sumArray(nums3))
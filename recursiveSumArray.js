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

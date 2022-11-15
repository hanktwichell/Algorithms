/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expectedv1 = 1;

const nums2 = [5, 4, 5];
const expectedv2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expectedv3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedv4 = 1;

function oddOneOut(nums) {
    var freqs = {}
    for (var i=0; i<nums.length; i++)
        if (!(nums[i] in freqs))
            freqs[nums[i]] = 1
        else
            freqs[nums[i]] += 1
    for (num in freqs)
        if (freqs[num]%2 == 1)
            return num
}

console.log(oddOneOut(nums1))
console.log(oddOneOut(nums2))
console.log(oddOneOut(nums3))
console.log(oddOneOut(nums4))

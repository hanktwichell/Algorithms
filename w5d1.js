/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

function sociallyDistanced(queue) {
    var spacing = 6
    if (queue.length < 1)
        return false
    for (var i=0; i<queue.length; i++)
        if (queue[i] == 1)
            if (spacing < 6)
                return false
            else
                spacing = 0
        else
            spacing++
    return true
}

console.log("1", sociallyDistanced(queue1))
console.log("2", sociallyDistanced(queue2))
console.log("3", sociallyDistanced(queue3))
console.log("4",sociallyDistanced(queue4))

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
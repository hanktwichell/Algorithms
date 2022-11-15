function getFrequencies(arr) {
    var result = {};
    for (var i=0; i<arr.length; i++)
        if (!result[arr[i]])
            result[arr[i]] = 1;
        else
            result[arr[i]]++; 
    return result;
}

function oddOneOut(arr) {
    var matched = {};
    for (var i=0; i<arr.length; i++)
        if (!matched[arr[i]])
            matched[arr[i]] = 1;
        else
            matched[arr[i]]++; 
    for (key in matched)
        if (matched[key]%2 == 1)
            return key;
}

const arr1 = ["a", "a", "a"];
const expected1 = {a: 3};
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};
const arr3 = [];
const expected3 = {};

const nums1 = [1];
const expectedv1 = 1;
const nums2 = [5, 4, 5];
const expectedv2 = 4;
const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expectedv3 = 4; // there is a pair of 4s but one 4 has no pair.
const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedv4 = 1; 
const nums5 = [1, 2, 3, 3, 2, 1, 1, 1, 2, 5, 2];
const expectedv5 = 5;

console.log(getFrequencies(arr1));
console.log(getFrequencies(arr2));

console.log(oddOneOut(nums1));
console.log(oddOneOut(nums2));
console.log(oddOneOut(nums3));
console.log(oddOneOut(nums4));
console.log(oddOneOut(nums5));
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

const nums1 = [1];
const expected1 = 1;
const nums2 = [5, 4, 5];
const expected2 = 4;
const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.
const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1; 
const nums5 = [1, 2, 3, 3, 2, 1, 1, 1, 2, 5, 2];
const expected5 = 5;

console.log(oddOneOut(nums1));
console.log(oddOneOut(nums2));
console.log(oddOneOut(nums3));
console.log(oddOneOut(nums4));
console.log(oddOneOut(nums5));

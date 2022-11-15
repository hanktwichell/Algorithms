function getFrequencies(arr) {
    var result = {};
    for (var i=0; i<arr.length; i++)
        if (!result[arr[i]])
            result[arr[i]] = 1;
        else
            result[arr[i]]++; 
    return result;
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

console.log(getFrequencies(arr1));
console.log(getFrequencies(arr2));


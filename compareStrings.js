// Algo 1
function compareStrings(str1, str2) {
    if (str1.length != str2.length)
        return false;
    else
        for (var i in str1) {
            // console.log(str1[i]);
            // console.log(str2[i]);
            if (str1[i].toUpperCase()!=str2[i].toUpperCase())
                return false;
        }
    return true;
}

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;
const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;
const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;
const strA4 = "AbC";
const strB4 = "aBc";
const expected4 = true;

console.log(compareStrings(strA1, strB1));
console.log(compareStrings(strA2, strB2));
console.log(compareStrings(strA3, strB3));
console.log(compareStrings(strA4, strB4));

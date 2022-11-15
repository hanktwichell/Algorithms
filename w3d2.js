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

// Algo 2 (No Split)
function acronymNoSplit(str) {
    var result = "";
    if (str == undefined)
        return result;
    else if (str[0] != " ")
        var result = str[0].toUpperCase();
    for (var i=1; i<str.length; i++)
        if (str[i-1]==" " && str[i] != " ")
            result+=str[i].toUpperCase();
    return result;
}

// Algo 2 (Using Split)
function acronymSplit(str) {
    var result = "";
    if (str == undefined)
        return result;
    const words = str.split(" ");
    for (i in words)
        if (words[i][0] != undefined)
            result += words[i][0].toUpperCase();
    return result;
}

const str1 = "object oriented programming";
const expectedv1 = "OOP";
// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expectedv2 = "APIE";
const str3 = "software development life cycle";
const expectedv3 = "SDLC";

console.log(acronymNoSplit(str1));
console.log(acronymNoSplit(str2));
console.log(acronymNoSplit(str3));
console.log(acronymNoSplit());
console.log(acronymNoSplit(" "));
console.log(acronymNoSplit("          "));

console.log(acronymSplit(str1));
console.log(acronymSplit(str2));
console.log(acronymSplit(str3));
console.log(acronymSplit());
console.log(acronymSplit(" "));
console.log(acronymSplit("          "));

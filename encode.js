function encode(str) {
    if (str.length <= 2)
        return str;
    count = 1;
    placeholder = str[0];
    result = str[0];
    for (var i=1; i<str.length; i++) {
        if (str[i] == placeholder)
            count++;
        else {
            result += count;  
            count = 1;
            placeholder = str[i];
            result += str[i];
        }
    }
    result += count; 
    if (result.length < str.length)
        return result;
    else
        return str;
}

function encodeNoOnes(str) { // "aaabbcddd" yields "a3b2cd3" instead of "a3b2c1d3"
    if (str.length <= 2)
        return str;
    result = "";
    count = 1;
    previous = str[0];
    for (var i=1; i<str.length; i++) {
        if (str[i] == previous)
            count++;
        else if (count >= 2) {
            result += (previous + count);
            count = 1;
            previous = str[i];
        } else {
            result += previous;
            previous = str[i];
        }
        if (i == str.length-1)
            result += (previous + count);
    }
    if (result.length < str.length)
        return result;
    else
        return str;
}

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "beeeeeeeeeeeeeeeeeeeeeeeeeeetlejuiceee";

console.log("str1", encode(str1));
console.log("str2", encode(str2));
console.log("str3", encode(str3));
console.log("str4", encode(str4));
console.log("str5", encode(str5));
console.log("str5N", encodeNoOnes(str5));

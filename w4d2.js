function dedupeConsecutive(str) {
    var result = "";
    var previous = "";
    for (i in str)
        if (str[i] != previous) {
            result += str[i];
            previous = str[i];
        }
    return result;
}

function dedupe(str) {
    var result = "";
    for (var i=str.length-1; i>=0; i--)
        if (result.indexOf(str[i]) == -1)
            result = str[i] + result;
    return result;
}

function dedupeDict(str) {
    var result = "";
    var dict = {};
    for (var i=str.length-1; i>=0; i--)
        if (dict[str[i]] == undefined) {
            dict[str[i]] = 1;
            result = str[i] + result;
        }
    return result;
}

function dedupeHash(str) {
    var freqs = new Map();
    for (i in str)
        if (freqs.get(str[i]) >= 1)
            freqs.set(str[i], freqs.get(str[i]) + 1);
        else
            freqs.set(str[i], 1);
    var result = "";
    for (i in str)
        if (freqs.get(str[i]) == 1)
            result += str[i];
        else
            freqs.set(str[i], freqs.get(str[i])-1)
    return result;
}

function dedupeHash2(str) { // dreadful for strings like "abcdefgfedcba"
    var lastIndices = new Map();
    for (var i=0; i<str.length; i++)
        lastIndices.set(str[i], i);
    var result = "";
    lastIndices.forEach((value, key) => {
        if (value == Math.min(...lastIndices.values())) {
            result += key;
            lastIndices.delete(key);
        } else {
            lastIndices.delete(key);
            lastIndices.set(key, value);
        }
    });
    return result;
}


const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a"; 

const str5 = "  ";
const expected5 = " ";

const str6 = "aaabccdeFF  gh118999$$$aaa";
const expected6 = "bcdeF gh189$a";

const str7 = "abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba";
const expected7 = "zyxwvutsrqponmlkjihgfedcba";

console.log("----------");
console.log("1:", dedupe(str1));
console.log("2:", dedupe(str2));
console.log("3:", dedupe(str3));
console.log("4:", dedupe(str4));
console.log("5:", dedupe(str5));
console.log("6:", dedupe(str6));
console.log("7:", dedupe(str7));
console.log("----------");
console.log("Hash 1:", dedupeHash(str1));
console.log("Hash 2:", dedupeHash(str2));
console.log("Hash 3:", dedupeHash(str3));
console.log("Hash 4:", dedupeHash(str4));
console.log("Hash 5:", dedupeHash(str5));
console.log("Hash 6:", dedupeHash(str6));
console.log("Hash 7:", dedupeHash(str7));
console.log("----------");
console.log("Better 1:", dedupeHash2(str1));
console.log("Better 2:", dedupeHash2(str2));
console.log("Better 3:", dedupeHash2(str3));
console.log("Better 4:", dedupeHash2(str4));
console.log("Better 5:", dedupeHash2(str5));
console.log("Better 6:", dedupeHash2(str6));
console.log("Better 7:", dedupeHash2(str7));
console.log("----------");
console.log("DedupeDict 1:", dedupeDict(str1));
console.log("DedupeDict 2:", dedupeDict(str2));
console.log("DedupeDict 3:", dedupeDict(str3));
console.log("DedupeDict 4:", dedupeDict(str4));
console.log("DedupeDict 5:", dedupeDict(str5));
console.log("DedupeDict 6:", dedupeDict(str6));
console.log("DedupeDict 7:", dedupeDict(str7));
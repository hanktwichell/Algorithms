function decode(str) {
    var result = "";
    var letters = str.split(/[\d]/);
    var nums = str.split(/[a-z\s]/i); 
    var finalLetters = [];
    var finalNums = [];
    var matchOffset = 0;
    if (Number.isInteger(parseInt(str[0])))
        matchOffset = 1
    if (nums.length <= 1 || letters.length <= 1)
        return ""
    for (var x=0; x<letters.length; x++)
        if (letters[x].match(/[a-z\s]/i))
            finalLetters.push(letters[x])
    for (var y=0; y<nums.length; y++) 
        if (nums[y].match(/[\d]/))
            finalNums.push(nums[y])
    for (var i=0; i<finalLetters.length; i++)
        result += finalLetters[i][finalLetters[i].length-1].repeat(finalNums[i+matchOffset])
    return result
}

const str1 = "a3b2c1d3"
const expected1 = "aaabbcddd"

const str2 = "a3b2c12d10"
const expected2 = "aaabbccccccccccccdddddddddd"

const str3 = "a2b7cdefg2h"
const ex3 = "aabbbbbbbgg"

const str4 = "a2bcdefgh1"
const ex4 = "aah"

const str5 = "a0bc1de"
const ex5 = "c"

const str6 = "1a2d3gh1"
const ex6 = "aadddh"

const str7 = "10a0b7"
const ex7 = "bbbbbbb"

const str8 = "1234"
const ex8 = ""

const str9 = ""
const ex9 = ""

const str10 = "   "
const ex10 = ""

const str11 = "3aaaaa6bbbbc1d4ee5ff"
const ex11 = "aaaaaacddddeeeee"

const str12 = "3a a15c   7b2 k2 o3  p1 f2   g  h  3  q2"
const ex12 = "aaaaaaaaaaaaaaa       bbkkooopff   qq"

const str13 = "2b 7g1"
const ex13 = "       g"

const str14 = "c2 a7"
const ex14 = "ccaaaaaaa"

const str15 = "2a4 7g1"
const ex15 = "aaaa       g"

const str16 = "y10qw9 9ypfh3H11HU   2w4"
const ex16 = "yyyyyyyyyywwwwwwwww         hhhHHHHHHHHHHH  wwww"

console.log("1:", decode(str1))
console.log("2:", decode(str2))
console.log("3:", decode(str3))
console.log("4:", decode(str4))
console.log("5:", decode(str5))
console.log("6:", decode(str6))
console.log("7:", decode(str7))
console.log("8:", decode(str8))
console.log("9:", decode(str9))
console.log("10:", decode(str10))
console.log("11:", decode(str11))
console.log("12:", decode(str12))
console.log("13:", decode(str13))
console.log("14:", decode(str14))
console.log("15:", decode(str15))
console.log("16:", decode(str16))

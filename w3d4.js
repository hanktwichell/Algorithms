function decode(str) {
    var result = "";
    var letters = str.split(/[\d]/);
    var nums = str.split(/[a-z\s]/i); 
    // "/[a-z\s]/i" is any instance of a letter or a space
    var finalLetters = [];
    var finalNums = [];
    var matchOffset = 0;
    // If first value is a number, need to offset matching indices to ensure letters are paired with following number, not preceding number
    if (Number.isInteger(parseInt(str[0])))
        matchOffset = 1; 
    // If str contains no numbers and/or no letters, return empty string
    if (nums.length <= 1 || letters.length <= 1)
        return ""; 
    // Condense letters array to remove empty values caused by leading integer or multiple consecutive integers
    for (var x=0; x<letters.length; x++)
        if (letters[x].match(/[a-z\s]/i))
            finalLetters.push(letters[x]);
    // Condense nums array to remove empty values caused by leading letter or multiple consecutive letters
    for (var y=0; y<nums.length; y++) 
        if (nums[y].match(/[\d]/))
            finalNums.push(nums[y]);
    // Loop through finalLetters[] and create result string
    for (var i=0; i<finalLetters.length; i++)
        result += finalLetters[i][finalLetters[i].length-1].repeat(finalNums[i+matchOffset]);
    return result;
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd"; 

const str3 = "a2b7cdefg2h";
const ex3 = "aabbbbbbbgg";

const str4 = "a2bcdefgh1";
const ex4 = "aah"

const str5 = "a0bc1de";
const ex5 = "c";

const str6 = "1a2d3gh1";
const ex6 = "aadddh";

const str7 = "10a0b7";
const ex7 = "bbbbbbb";

const str8 = "1234";
const ex8 = "";

const str9 = "";
const ex9 = "";

const str10 = "   ";
const ex10 = "";

const str11 = "3aaaaa6bbbbc1d4ee5ff";
const ex11 = "aaaaaacddddeeeee";

const str12 = "3a a15c   7b2 k2 o3  p1 f2   g  h  3  q2";
const ex12 = "aaaaaaaaaaaaaaa       bbkkooopff   qq";

const str13 = "2b 7g1";
const ex13 = "       g";

const str14 = "c2 a7";
const ex14 = "ccaaaaaaa";

const str15 = "2a4 7g1";
const ex15 = "aaaa       g";

const str16 = "y10qw9 9ypfh3H11HU   2w4";
const ex16 = "yyyyyyyyyywwwwwwwww         hhhHHHHHHHHHHH  wwww";

console.log("1:", decode(str1));
console.log("2:", decode(str2));
console.log("3:", decode(str3));
console.log("4:", decode(str4));
console.log("5:", decode(str5));
console.log("6:", decode(str6));
console.log("7:", decode(str7));
console.log("8:", decode(str8));
console.log("9:", decode(str9));
console.log("10:", decode(str10));
console.log("11:", decode(str11));
console.log("12:", decode(str12));
console.log("13:", decode(str13));
console.log("14:", decode(str14));
console.log("15:", decode(str15));
console.log("16:", decode(str16));

if (decode(str1)==expected1)
    console.log("1");
if (decode(str2)==expected2)
    console.log("2");
if (decode(str3)==ex3)
    console.log("3");
if (decode(str4)==ex4)
    console.log("4");
if (decode(str5)==ex5)
    console.log("5");
if (decode(str6)==ex6)
    console.log("6");
if (decode(str7)==ex7)
    console.log("7");
if (decode(str8)==ex8)
    console.log("8");
if (decode(str9)==ex9)
    console.log("9");
if (decode(str10)==ex10)
    console.log("10");
if (decode(str11)==ex11)
    console.log("11");
if (decode(str12)==ex12)
    console.log("12");
if (decode(str13)==ex13)
    console.log("13");
if (decode(str14)==ex14)
    console.log("14");
if (decode(str15)==ex15)
    console.log("15");
if (decode(str16)==ex16)
    console.log("16");

// function encode(str) {
//     if (str.length <= 2)
//         return str;
//     count = 1;
//     placeholder = str[0];
//     result = str[0];
//     for (var i=1; i<str.length; i++) {
//         if (str[i] == placeholder)
//             count++;
//         else {
//             result += count;  
//             count = 1;
//             placeholder = str[i];
//             result += str[i];
//         }
//     }
//     result += count; 
//     if (result.length < str.length)
//         return result;
//     else
//         return str;
// }

// console.log(encode(decode(str1)));
// if (str1 == encode(decode(str1)))
//     console.log("Yay 01");
// console.log(encode(decode(str2)));
// if (str2 == encode(decode(str2)))
//     console.log("Yay 02");
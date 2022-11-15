function parensValid(str) {
    var numOpen = 0;
    for (var i=0; i<str.length; i++)
        if (str[i] == "(")
            numOpen++;
        else if (str[i] == ")")
            if (numOpen == 0)
                return false;
            else
                numOpen--;
    return numOpen == 0;
}

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = ")hehfuiqw()"
const str6 = "hehfuiqw()"
const str7 = "hehfuiqw"

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));
console.log(parensValid(str5));
console.log(parensValid(str6));
console.log(parensValid(str7));

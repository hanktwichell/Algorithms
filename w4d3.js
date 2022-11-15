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

function bracesValid(str) {
    var braces = {};
    var index = 0;
    for (i in str)
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            braces[index] = str[i];
            index++;
        } else if (str[i] == ")")
            if (braces[index-1] == "(")
                index--;
            else
                return false;
        else if (str[i] == "}")
            if (braces[index-1] == "{")
                index--;
            else
                return false;
        else if (str[i] == "]")
            if (braces[index-1] == "[")
                index--;
            else
                return false;
    return index == 0;
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

console.log("-----");

const strv1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expectedv1 = true;

const strv2 = "D(i{a}l[ t]o)n{e";
const expectedv2 = false;

const strv3 = "A(1)s[O (n]0{t) 0}k";
const expectedv3 = false; 

const strv4 = "(){}[erg]et(hrey[j{yj()gd(sd)g{th}{d}fg[t]h}e])({[]})" // true (){}[]([{()(){}{}[]})({[]})
const strv5 = "(){}isdupqw[]([{phefu(ewg)hwt(trhe)er{her}y{}eytj[}fd]g}fg]sg)th(j{ut[]})" // false 

console.log(bracesValid(strv1));
console.log(bracesValid(strv2));
console.log(bracesValid(strv3));
console.log(bracesValid(strv4));
console.log(bracesValid(strv5));
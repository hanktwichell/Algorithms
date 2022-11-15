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

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false; 

const str4 = "(){}[erg]et(hrey[j{yj()gd(sd)g{th}{d}fg[t]h}e])({[]})" // true (){}[]([{()(){}{}[]})({[]})
const str5 = "(){}isdupqw[]([{phefu(ewg)hwt(trhe)er{her}y{}eytj[}fd]g}fg]sg)th(j{ut[]})" // false 

console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));
console.log(bracesValid(str4));
console.log(bracesValid(str5));

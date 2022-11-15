// Not Using "Split"
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

// Using "Split"
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

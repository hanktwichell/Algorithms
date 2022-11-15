function rotateString(str, num) {
    var rotations = num%str.length;
    return str.substring(str.length-rotations) + str.substring(0, str.length-rotations);
}

const str = "Hello World";
const rotateAmnt1 = 0;
const expectedv1 = "Hello World";
const rotateAmnt2 = 1;
const expectedv2 = "dHello Worl";
const rotateAmnt3 = 2;
const expectedv3 = "ldHello Wor";
const rotateAmnt4 = 4;
const expectedv4 = "orldHello W";
const rotateAmnt5 = 13;
const expectedv5 = "ldHello Wor"; 

console.log(rotateString(str, rotateAmnt1));
console.log(rotateString(str, rotateAmnt2));
console.log(rotateString(str, rotateAmnt3));
console.log(rotateString(str, rotateAmnt4));
console.log(rotateString(str, rotateAmnt5));

function giveChange(cents) {
    var change = {}
    if (cents >= 25) {
        change['quarter'] = Math.floor(cents/25);
        cents %= 25;
    }
    if (cents >= 10) {
        change['dime'] = Math.floor(cents/10);
        cents %= 10;
    }
    if (cents >= 5) {
        change['nickel'] = Math.floor(cents/5);
        cents %= 5;
    }
    if (cents > 0)
        change['penny'] = cents;
    return change;
}

function rotateString(str, num) {
    var rotations = num%str.length;
    return str.substring(str.length-rotations) + str.substring(0, str.length-rotations);
}

const cents1 = 25;
const expected1 = { quarter: 1 };
const cents2 = 50;
const expected2 = { quarter: 2 };
const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };
const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 }; 

console.log(giveChange(cents1));
console.log(giveChange(cents2));
console.log(giveChange(cents3));
console.log(giveChange(cents4));

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

// function worstRotateString(str, num) {
//     for (var i=0; i<num; i++)
//         str = str[str.length-1] + str.substring(0, str.length-1);
//     return str;
// }

// function decentRotateString(str, num) {
//     var rotations = num%str.length;
//     for (var i=0; i<rotations; i++)
//         str = str[str.length-1] + str.substring(0, str.length-1);
//     return str;
// }

// function worseGiveChange(cents) {
//     var quarters = Math.floor(cents/25);
//     cents -= 25 * quarters;
//     var dimes = Math.floor(cents/10);
//     cents -= 10 * dimes;
//     var nickels = Math.floor(cents/5);
//     cents -= nickels * 5;
//     var coins = {}
//     if (quarters > 0)
//         coins["quarters"] = quarters;
//     if (dimes > 0)
//         coins["dimes"] = dimes;
//     if (nickels > 0)
//         coins["nickels"] = nickels;
//     if (cents > 0)
//         coins["pennies"] = cents;
//     return coins;
// }
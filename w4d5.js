/* 
    Given an array of objects / dictionaries to represent new inventory,
    and an array of objects / dictionaries to represent current inventory,
    update the quantities of the current inventory

    if the item doesn't exist in current inventory, add it to the inventory
    return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

function updateInventory(newInv, currInv) {
    if (newInv.length < 1)
        return currInv
    if (currInv.length < 1)
        return newInv
    for (var i=0; i<newInv.length; i++) {
        notInInv = true
        for (var j=0; j<currInv.length; j++)
            if (currInv[j].name == newInv[i].name) {
                currInv[j].quantity += newInv[i].quantity
                notInInv = false
                break
            }
        if (notInInv)
            currInv.push({"name": newInv[i].name, "quantity": newInv[i].quantity})
    }
    return currInv
}

console.log("1", updateInventory(newInv1, currInv1))
console.log("2", updateInventory(newInv2, currInv2))
console.log("3", updateInventory(newInv3, currInv3))

/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

function sociallyDistanced(queue) {
    var spacing = 6
    if (queue.length < 1)
        return false
    for (var i=0; i<queue.length; i++)
        if (queue[i] == 1)
            if (spacing < 6)
                return false
            else
                spacing = 0
        else
            spacing++
    return true
}

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

console.log("1", sociallyDistanced(queue1))
console.log("2", sociallyDistanced(queue2))
console.log("3", sociallyDistanced(queue3))
console.log("4",sociallyDistanced(queue4))

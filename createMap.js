function createMap(keys, vals) {
    var result = {};
    for (var i=0; i<keys.length; i++)
        result[keys[i]] = vals[i];
    return result;
}

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {
}

console.log(createMap(keys1, vals1));

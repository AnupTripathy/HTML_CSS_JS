
function makeMultiplier(multiplier) {
    var result = function (x) {
        return multiplier * x;
    };

    return result
}

makeMultiplier.version = "v1.0.0";

var Times3 = makeMultiplier(3); //arg multiplier is now 3
console.log(Times3(4)); //result arg x value is 4
var doubleAll = makeMultiplier(2);
console.log(doubleAll(2500));
console.log(makeMultiplier.version);

function DoOperation(x, operation) {
    return operation(x);
}

console.log(DoOperation(4, doubleAll))
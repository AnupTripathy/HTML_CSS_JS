function multiply(x,y) {
    console.log(x*y);
}

multiply.version = "v1.0.0";
// Function is a object

function makeMultiplier(multiplier) {
    var result = function (x) {
        return multiplier * x;
    };

    return result
}


var Times3 = makeMultiplier(3); //arg multiplier is now 3
console.log(Times3(4)); //result arg x value is 4

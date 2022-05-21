// var a = 10;
// var b=a;
// console.log("b : " + b)
// b=32
// console.log("a : "+a); //it will never affect a
// console.log("b's value after 2 lines : "+b);

// Copying By Reference

// var a = {x : 5};
// var b = a;
// b.x = 15;
// console.log("B is updated by " + b.x)
// console.log("a's value: " + a.x);
// console.log("b's value: " + b.x);

// Pass by reference vs by value
// function changePrimitive(primValue) {
//     console.log("in changePrimitive");
//     console.log("before:");
//     console.log(primValue);
//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive the original value is:");
// console.log(value);

// changePrimitive()


function changeObject(objValue) {
    console.log("in objectPrimitive");
    console.log("before:");
    console.log(objValue);
    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}

var orig_objValue = {
    x : 10
}

console.log("The x's value of the object before changeObject " + orig_objValue.x);

changeObject(orig_objValue);

console.log("after changeObject:")
console.log("original value is also changed which is now "+orig_objValue.x);


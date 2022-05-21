// function test() {
//     console.log(this);
//     this.myName = "Anup Tripathy";
// }

// test();

// console.log(this.myName)

// Function Constructors

// function Circle(radius) {
//     this.radius = radius;
//     console.log(this); 
// };
// Circle.prototype.getArea = function () {
//     return Math.PI * Math.pow(this.radius, 2);
// };

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

var literalCircle = {
    radius : 10,
    getArea : function (argument) {
        console.log(this);
        var increaseRadius = function () {
            this.radius = 20;
        };
        increaseRadius();
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());
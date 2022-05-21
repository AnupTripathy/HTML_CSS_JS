// var arr = new Array();
// arr[0] = "Anup";
// arr[1] = 13;
// arr[2] = function (name) {
//     console.log("Hello " + name);
// }
// arr[3] = {course: "Html,Css & Js"};
// arr[4] = "Current Week : week4";


// arr[2]("A")
// console.log(arr[3].course)

// var names = ["Anup", "Amlan", "Adityansu"];
// names[100] = "Name 100th"
// for (var i=0; i<names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// var myObj = {
//     name : "Anup",
//     course : "HTML/CSS/JS",
//     platform : "Coursera",
// }

// for (var i in myObj) {
//     console.log(i + ": " + myObj[i]);
// }

var names2 = ["Grogu", "Anup", "Ghians"];
names2.greeting = "Hi";
console.log(names2)
for (var name in names2) {
    console.log("Hello " + names2[name]);
}
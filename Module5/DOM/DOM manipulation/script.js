// //DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello() {
    var name = document.getElementById('name').value;
    var message = "<h1>Hello " + name + "!</h1>";
    content = document.getElementById('content');
    content.innerHTML = message;
    if (name == "student") {
        var title = document.querySelector('#title').textContent;
        title += " & Loving it";
        document.querySelector('h1').textContent = title;
    }
}

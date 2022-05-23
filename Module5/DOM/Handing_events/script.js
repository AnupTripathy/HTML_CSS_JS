// //DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded", 
function(event){
    function sayHello() {
        var name = document.getElementById('name').value;
        var message = "<h1>Hello " + name + "!</h1>";
        content = document.getElementById('content');
        content.innerHTML = message;
        if (name == "student") {
            var title = document.querySelector('#title').textContent;
            title += " & Loving it";
            document.querySelector('#title').textContent = title;
        }
    }

    document.querySelector('button').
    addEventListener('click', sayHello);

    document.querySelector('button').addEventListener('mousemove', 
        function (event) {
            if (event.shiftKey === true) {
            console.log("X :" + event.clientX);
            console.log("Y :" + event.clientY);
            }
        }
    )
})


//addEventlistener



// document.querySelector("button").onclick = sayHello;
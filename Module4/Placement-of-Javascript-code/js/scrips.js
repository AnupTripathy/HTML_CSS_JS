var message = "This is a global message";

function a() {
    var message = "This is a local message";
    console.log(message);
    b();
}

function name(params) {
    console.log(message);
}

a(); 
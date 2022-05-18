var message="Global Message";

function a() {
    var message = "function message";
    return b();
}

function b(){
    console.log(message)
}
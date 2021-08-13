function show() {
    document.getElementById("side-menu").classList.toggle("show");
}

function data() {

var span;
var date = new Date();
var an;

an = date.getFullYear();

span = document.getElementById("data");
span.innerHTML =  an;
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}
// data();
let nav = document.getElementById("nav");
let logo = document.querySelector(".navbar-brand img");
let mybutton = document.getElementById("btn-back-to-top");

let sticky = nav.offsetHeight;

window.onscroll = function() {
    myFunction();
    scrollFunction();

};

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
        logo.setAttribute('src', './imgs/catBlack.svg');
        nav.style.boxShadow = '-5px -2px 6px #eee';
    } else {
        nav.classList.add("sticky");
        logo.setAttribute('src', './imgs/catBlack.svg')
    }
}

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$('body').css({ "overflow": "auto" });
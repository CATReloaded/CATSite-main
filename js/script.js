let nav = document.getElementById("nav");
let header = document.querySelector("header");
let logo = document.querySelector(".navbar-brand img")
let sticky = nav.offsetHeight;
let achievements = document.querySelector('.ourachievments');

window.onscroll = function () {
    myFunction();
    scrollFunction();

};
var fired = false;
window.addEventListener("scroll", function () {
    if (window.pageYOffset >= achievements.offsetTop - 200 && fired === false) {
        Counter();
        fired = true;
    }
}, true)

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
        logo.setAttribute('src', './imgs/catBlack.svg');
        nav.style.boxShadow = '-5px -2px 6px #eee';

    } else {
        nav.classList.remove("sticky");
        logo.setAttribute('src', './imgs/navLogo.svg')
        nav.style.boxShadow = 'none';

    }
}

let imgSession = document.querySelector('.ourachievments li img');
const counters = document.querySelectorAll('.ourachievments li span');
// Declate variable
var timer;

function Counter() {
    achievements.style.display = "flex";
    countUp(counters[0], 0, 15, 60);
    countUp(counters[1], 0, 7, 70);
    countUp(counters[2], 0, 50, 30);
    countUp(counters[3], 0, 5, 30);
    countUp(counters[4], 0, 50, 40);
    countUp(counters[5], 0, 200, 10);
}


function countUp(selector, min, max, duration) {
    var inter = setInterval(function () {
        selector.innerHTML = ++min;
        if (min >= max) {
            clearTimeout(inter);
        }
    }, duration);
}

let mybutton = document.getElementById("btn-back-to-top");

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


$(function () {

    $(window).on('load', function () {

        $('.loader').find($('img')).fadeOut(3500, function () {
            $('body').css({ "overflow": "auto" });
            $(this).parent().remove();
            $('.mainheader').find($('.overlay')).addClass("animate__backInUp");
            $('.About').find($('.leftanimate')).addClass("animate__fadeInLeft")

        });

    });

})
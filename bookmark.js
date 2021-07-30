// TABS
const redHeads = document.querySelectorAll(".red-heads");
const tabsPictureText = document.querySelectorAll(".tabs-picture-text");

redHeads.forEach((redHead, index) => {
    redHead.addEventListener("click", () => {


        redHeads.forEach(redHead => redHead.classList.remove("active"));


        redHead.classList.add("active");

        tabsPictureText.forEach((c) => c.classList.remove("active"));

        tabsPictureText[index].classList.add("active");



    });

});

redHeads[0].click();


// FAQ ACCORDIAN

var question = document.querySelectorAll(".question");
var i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });
}


// FORM VALIDATION
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorfor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Please provide a valid email address');
    } else {
        setSuccessfor(email);
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');


    small.innerText = message;

    formControl.className = 'form-control error';

}


function setSuccessfor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// HAMBURGER NAV

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuNav.classList.toggle('open');
});
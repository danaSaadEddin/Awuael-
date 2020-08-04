// $(document).ready(function () {

//     // sticky navigation menu

//     let nav_offset_top = $('.header_area').height() + 50;

//     function navbarFixed() {
//         if ($('.header_area').length) {
//             $(window).scroll(function () {
//                 let scroll = $(window).scrollTop();
//                 if (scroll >= nav_offset_top) {
//                     $('.header_area .main-menu').addClass('navbar_fixed');
//                 } else {
//                     $('.header_area .main-menu').removeClass('navbar_fixed');
//                 }
//             })
//         }
//     }

//     navbarFixed();

// });
// --------------------smooth anchor scroll-----------------------
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



// journey3
let arrowLeft = document.querySelector('.dr-sami .fa-arrow-circle-left');
let arrowLeft2 = document.querySelector('.eng-anas .fa-arrow-circle-left');
let foundersOn = document.querySelector('.founders-on')
let drSami = document.querySelector('.dr-sami');
let engAnas = document.querySelector('.eng-anas');
let engAnasBtn = document.querySelector('.engAnasBtn');
let drSamiBtn = document.querySelector(".drSamiBtn");
drSamiBtn.addEventListener('click', function () {
    console.log('clicked');
    drSami.classList.remove('active');
    foundersOn.classList.remove('active');

});
engAnasBtn.addEventListener('click', function () {
    console.log('clicked');
    engAnas.classList.remove('active');
    foundersOn.classList.remove('active');

});
arrowLeft.addEventListener('click', function () {
    console.log('clicked');
    drSami.classList.add('active');
    foundersOn.classList.add('active');

});
arrowLeft2.addEventListener('click', function () {
    console.log('clicked');
    engAnas.classList.add('active');
    foundersOn.classList.add('active');

});


// click to scroll top
$('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});



$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(document).ready(function () {
    $('.carousel-inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        addaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png" alt=""></button>'
    });
});
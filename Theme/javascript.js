$(window).on("scroll", function() {

    if ($(window).scrollTop()) {

        $("nav").removeClass("redd");
        $("nav").addClass("black");

    } else {

        $("nav").addClass("redd");
        $("nav").removeClass("black");

    }
})

//initializarea caruselului

var swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swpier-pagination',
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 3,

    },




});
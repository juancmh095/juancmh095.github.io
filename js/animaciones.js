$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 50) {
        $('#menu').addClass('fixed-top');
        $('#menu').removeClass('barraNormal');
    } else {
        $('#menu').removeClass('fixed-top');
        $('#menu').addClass('barraNormal');
    }

});
// JavaScript Document
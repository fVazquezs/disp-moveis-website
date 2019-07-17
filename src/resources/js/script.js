$(document).ready(function () {
    var oQueE = $('.js--section-features').offset();


   
    // funcoes do menu responsivo
    $('.js--mobile-nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-toggle-icon');

        nav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    })



    window.onscroll = function () {
        console.log("oQueE")
    }
});

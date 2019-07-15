$(document).onLoad(function () {
    $('.js--section-features').waypoint(function (direction) {
        console.log('qay')
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
            offset: '60px;'
        });
});


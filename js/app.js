$(document).ready(function() {
    $('.features').waypoint(function(direction) {
        if(direction === 'down') {
            $('nav').removeClass('.navigation');
            $('nav').addClass('.sticky');
        } else {
            $('nav').removeClass('.sticky');
        }
    });
});    
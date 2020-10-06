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


window.addEventListener('scroll', function() {
    var topbar = document.querySelector('.topbar');

    topbar.classList.toggle('sticky', window.scrollY(0));
})
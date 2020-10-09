var playButton = document.querySelector('.play--btn');
var video = document.querySelector('.feature__video');
playButton.addEventListener('click', function() {
    video.autoplay(); 
});
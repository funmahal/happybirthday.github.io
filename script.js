// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let gift= document.getElementById('gift')
gift.addEventListener('click',function () {
    var audio = new Audio('song.mp3');
    audio.loop='true'
    audio.play();
});


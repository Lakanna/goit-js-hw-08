import Player from '@vimeo/player';

    const throttle = require('lodash.throttle');

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


player.on('timeupdate', throttle(onTimeUpdate, 1000)); 
 

player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))); 
  

function onTimeUpdate(data) {

    let currentTime = data.seconds;

    localStorage.setItem("videoplayer-current-time", currentTime);
    
    console.log(currentTime);
};       
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const time = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(time, data.seconds);
};

player.on('play', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(time)) || 0);


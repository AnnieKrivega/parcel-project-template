import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const UPDATE_FREQUENCY = 1000; 


const saveCurrentTime = throttle(time => {
localStorage.setItem(STORAGE_KEY, time);
}, UPDATE_FREQUENCY);

player.on('timeupdate', event => {
const currentTime = event.seconds;
saveCurrentTime(currentTime);
});

const restoreCurrentTime = () => {
const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) {
    player.setCurrentTime(currentTime);
}
};

restoreCurrentTime();
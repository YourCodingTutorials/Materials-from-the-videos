var video = document.getElementById("myVideo");
var playPauseButton = document.getElementById("playPauseButton");
var fastForwardButton = document.getElementById("fastForwardButton");
var rewindButton = document.getElementById("rewindButton");
var fullScreenButton = document.getElementById("fullScreenButton");
var muteButton = document.getElementById("muteButton");
var volumeUpButton = document.getElementById("volumeUpButton");
var volumeDownButton = document.getElementById("volumeDownButton");
var volumeText = document.getElementById("volumeText");

playPauseButton.addEventListener("click", playPause);
fastForwardButton.addEventListener("click", fastForward);
rewindButton.addEventListener("click", rewind);
fullScreenButton.addEventListener("click", toggleFullScreen);
muteButton.addEventListener("click", toggleMute);
volumeUpButton.addEventListener("click", volumeUp);
volumeDownButton.addEventListener("click", volumeDown);

function playPause() {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function fastForward() {
    video.currentTime += 10;
}

function rewind() {
    video.currentTime -= 10;
}

function toggleFullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function toggleMute() {
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

function volumeUp() {
    if (video.volume < 1) {
        video.volume += 0.1;
    }
    updateVolumeText();
}

function volumeDown() {
    if (video.volume > 0) {
        video.volume -= 0.1;
    }
    updateVolumeText();
}

function updateVolumeText() {
    volumeText.textContent = "Volume: " + Math.round(video.volume * 100) + "%";
}

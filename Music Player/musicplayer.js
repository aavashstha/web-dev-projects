

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}


function playPause(){
  if(controlIcon.classList.contains("fa-pause")){
    song.pause();
    controlIcon.classList.replace("fa-pause", "fa-play");
  }
  else{
    song.play();
    controlIcon.classList.replace("fa-play", "fa-pause");
  }
}

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}


progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  controlIcon.classList.replace("fa-play", "fa-pause");
}

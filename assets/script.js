var audioPlayer = document.getElementById("bg-music"); 

function playPause() {
  document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
    if (audioPlayer.paused) {
    audioPlayer.play();
    document.getElementById("playerVolumeOff").style.display = "none";
    document.getElementById("playerVolumeOn").style.display = "block";
  } else {
    audioPlayer.pause(); 
    document.getElementById("playerVolumeOff").style.display = "block";
    document.getElementById("playerVolumeOn").style.display = "none";
  }
}
var audioPlayer = document.getElementById("bg-music");
audioPlayer.loop = true;
audioPlayer.volume = 0.3;
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

$(window).scroll(function (e) {
  parallax();
});
parallax();

function parallax() {
  var scrollTop = $(window).scrollTop();
  var screenHeight = $(window).height();
  $(".parallax").each(function () {
    let offseTop = $(this).offset().top;

    if (scrollTop >= offseTop - screenHeight) {
      let y = scrollTop - offseTop;
      $(this).css("transform", `translate(0, ${Math.floor(y > 0 ? y : 0)}px)`);
    }
  });
}

$(".carousel-image .swiper-slide").each(function (index) {
  $(this).click(function () {
    $(".thumb-gallery-dialog").css("opacity", 1);
    $(".thumb-gallery-dialog").css("visibility", "visible");
    $("body").css("overflow", "hidden");
  });
});

$(".thumb-gallery-dialog_close").click(function () {
  $("body").css("overflow", "auto");
  $(".thumb-gallery-dialog").css("opacity", 0);
  $(".thumb-gallery-dialog").css("visibility", "hidden");
});

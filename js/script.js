let galleryBottom;
let galleryThumb;
$(".carousel-image .swiper-slide").each(function (index) {
  $(this).click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".thumb-gallery-dialog").css("display", "block");
    $(".thumb-gallery-dialog").css("opacity", 1);
    $(".thumb-gallery-dialog").css("visibility", "visible");
    $("body").css("overflow", "hidden");
    galleryBottom = new Swiper(".thumb-gallery-bottom", {
      lazy: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      lazyPreloadPrevNext: 4,
      initialSlide: index,
      cssMode: true,
      breakpoints: { 768: { slidesPerView: 6 }, 1024: { slidesPerView: 8 } },
    });
    galleryThumb = new Swiper(".thumb-gallery", {
      spaceBetween: 10,
      lazy: true,
      lazyPreloadPrevNext: 3,
      initialSlide: index,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: { swiper: galleryBottom },
    });
  });
});
$(".thumb-gallery-dialog_close").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("body").css("overflow", "auto");
  $(".thumb-gallery-dialog").css("display", "none");
  $(".thumb-gallery-dialog").css("opacity", 0);
  $(".thumb-gallery-dialog").css("visibility", "hidden");
  galleryBottom.destroy();
  galleryThumb.destroy();
});
window.onscroll = function (e) {
  if (
    $(window).scrollTop() + window.screen.height >
    document.body.scrollHeight - 100
  ) {
    $(".mouse-scroll-on-mobile").css("display", "none");
  } else {
    $(".mouse-scroll-on-mobile").css("display", "block");
  }
};

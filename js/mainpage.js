$(function () {

  $(".main-nav__button").click(function () {
    $(".main-nav__items").slideToggle("slow");
    $(".main-nav__toogle").toggleClass("main-nav__toogle--opened");
    $(".main-nav__button").toggleClass("main-nav__button--opened");
  });


  if (window.matchMedia("(min-width: 700px)").matches) {


    $(".intro__inform").addClass("wow fadeInLeft");

    $(".advantages__intro").each(function () {

      $(this).addClass("wow fadeIn").css({
        animationDuration: "1s"
      });
      $(".advantages__intro").eq(1).css({
        animationDelay: ".5s"
      });
    });


    $(".advantages__image").addClass("wow fadeInLeft").css({
      animationDuration: "1.5s",
    });

    $(".advantages__item").each(function () {

      $(this).addClass("wow zoomInUp").css({
        animationDuration: "1s"
      });
      $(".advantages__item").eq(0).css({
        animationDelay: ".3s"
      });
      $(".advantages__item").eq(1).css({
        animationDelay: ".7s"
      });
      $(".advantages__item").eq(2).css({
        animationDelay: "1.2s"
      });
    });

    $(".advantages__science-img").addClass("wow fadeInLeft").css({
      animationDuration: "1.5s",
    });
    $(".advantages__science-inform").addClass("wow fadeInRight").css({
      animationDuration: "2s",
    });

    $(".contacts__intro").each(function () {

      $(this).addClass("wow fadeIn").css({
        animationDuration: "1s"
      });
      $(".advantages__intro").eq(1).css({
        animationDelay: "1s"
      });
    });

    $(".contacts__inform").each(function () {

      $(this).addClass("wow tada").css({
        animationDelay: "1s"
      });
    });
  }
});


$('.review__items').slick({
  mobileFirst: true,

  slidesToShow: 1,
  speed: 600,
  cssEase: "ease-in",
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 699,
      settings: {
        autoplay: true,
        autoplaySpeed: 3000
      }
    },
    {
      breakpoint: 1199,
      settings: {
        dots: false,
        arrows: true
      }
    }
  ]

});
$('.tariffs__slider').slick({
  mobileFirst: true,
  slidesToShow: 1,
  speed: 300,
  cssEase: "ease-in",
  dots: true,
  arrows: false,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: "unslick"
    }
  ]

});


function initMap() {
  var coords = {
    lat: 59.9391,
    lng: 30.3232
  };
  var markerImage = "img/contacts-marker.svg"
  var myMap = new google.maps.Map(document.querySelector(".map"), {
    zoom: 17,
    scrollwheel: false,
    center: coords
  });

  var markers = [
    {
      coordinates: {
        lat: 59.93895,
        lng: 30.32329
      },
      image: markerImage,
      info: "ул. Большая Конюшенная,19/8"
		}
	]

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  function addMarker(properties) {
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap
    });
    if (properties.image) {
      marker.setIcon(properties.image);
    }
    if (properties.info) {
      var infoWindow = new google.maps.InfoWindow({
        content: properties.info
      })

      marker.addListener("click", function () {
        infoWindow.open(myMap, marker);
      })
      infoWindow.open(myMap, marker);
    }
  }
}
$(function () {
  $(".main-nav__button").click(function () {
    $(".main-nav__items").slideToggle("slow");
    $(".main-nav__toogle").toggleClass("main-nav__toogle--opened");
    $(".main-nav__button").toggleClass("main-nav__button--opened");
  });
});
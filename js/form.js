$(function () {
  $(".main-nav__button").click(function () {
    $(".main-nav__items").slideToggle("slow");
    $(".main-nav__toogle").toggleClass("main-nav__toogle--opened");
    $(".main-nav__button").toggleClass("main-nav__button--opened");
  });

  if (window.matchMedia("(max-width: 700px)").matches) {
    
  $(".competition-form__label").on("touchstart", function () {
    $(".competition-form__label").each(function () {
      
        $(this).toggleClass("hover");
        $(".competition-form__label").not(this).removeClass("hover");
    });
  });
    
}
});
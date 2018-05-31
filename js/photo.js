$(function () {
  $(".main-nav__button").click(function () {
    $(".main-nav__items").slideToggle("slow");
    $(".main-nav__toogle").toggleClass("main-nav__toogle--opened");
    $(".main-nav__button").toggleClass("main-nav__button--opened");
  });
});

var img = document.getElementById("image"),
  buttons = document.querySelectorAll(".add-photo__mobile-btn"),
  icons = document.querySelectorAll(".add-photo__icon--mob"),
  inputs = document.querySelectorAll(".add-photo__input");


if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
{
  var msg = "Sorry, but IE doesn't support css-filter, please use other browser"
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", function () {

      alert(msg);
    }, false);
  }
} else {

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", function () {

      var getFilter = "";
      inputs.forEach(function (item) {

        getFilter += item.getAttribute("data-filter") + "(" + item.value + item.getAttribute("data-scale") + ")";

        img.style.filter = getFilter;
      });
    }, false);
  }
}


if (window.matchMedia("(max-width: 700px)").matches) {
  if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10 
  {
    var msg = "Sorry, but IE doesn't support css-filter, please use other browser"
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {

        alert(msg);
      }, false);
    }
  }
  else {


function active(id) {
  buttons[id].addEventListener("click", function () {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("add-photo__input--active");
        icons[i].classList.remove("add-photo__icon--active");
      }
      inputs[id].classList.add("add-photo__input--active");
      icons[id].classList.add("add-photo__icon--active");
    },
    false);
}

buttons[0] = active(0);
buttons[1] = active(1);
buttons[2] = active(2);
}
}
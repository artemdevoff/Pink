var ajax = new XMLHttpRequest();
ajax.open("GET", "img/sprite.svg", true);
ajax.send();
ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
}
! function (a, b) {
	"use strict";
	var c = "img/sprite.svg",
		d = 1;
	if (!b.createElementNS || !b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) return !0;
	var e, f, g = "localStorage" in a && null !== a.localStorage,
		h = function () {
			b.body.insertAdjacentHTML("afterbegin", f)
		},
		i = function () {
			b.body ? h() : b.addEventListener("DOMContentLoaded", h)
		};
	if (g && localStorage.getItem("inlineSVGrev") == d && (f = localStorage.getItem("inlineSVGdata"))) return i(), !0;
	try {
		e = new XMLHttpRequest, e.open("GET", c, !0), e.onload = function () {
			e.status >= 200 && e.status < 400 && (f = e.responseText, i(), g && (localStorage.setItem("inlineSVGdata", f), localStorage.setItem("inlineSVGrev", d)))
		}, e.send()
	} catch (j) {}
}(window, document);

var img = new Array();
img[0] = new Image();
img[1] = new Image();
img[2] = new Image();
img[3] = new Image();
img[4] = new Image();


img[0].src = "img/logo-mob-hover.svg"
img[1].src = "img/logo-tablet-hover.svg"
img[2].src = "img/logo-desc-hover.svg"
img[3].src = "img/icons/open-btn-hover.svg"
img[4].src = "img/icons/close-btn-hover.svg"
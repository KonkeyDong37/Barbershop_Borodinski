var popup_login = document.querySelector(".modal-login");
var popup_map = document.querySelector(".modal-map");
var popup_login_show = document.querySelector(".login-link");
var popup_map_show = document.querySelectorAll(".js-find-us");
var modal_name = document.querySelector(".login-icon-user");
var modal_close = document.querySelectorAll(".modal-close");

popup_login_show.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_login.classList.add("js-modal-login-show");
  modal_name.focus();
});

for (var i = 0; i < popup_map_show.length; i++) {
  popup_map_show[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.add("js-modal-map-show");
  });
};

for (var i = 0; i < modal_close.length; i++) {
  if (modal_close[i]) {
    modal_close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_login.classList.remove("js-modal-login-show");
    });
  };
  if (modal_close[i]) {
    modal_close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_map.classList.remove("js-modal-map-show");
    });
  };
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
          evt.preventDefault();
    if (popup_login.classList.contains("js-modal-login-show")) {
      popup_login.classList.remove("js-modal-login-show");
    };
    if (popup_map.classList.contains("js-modal-map-show")) {
      popup_map.classList.remove("js-modal-map-show");
    };
  };
});

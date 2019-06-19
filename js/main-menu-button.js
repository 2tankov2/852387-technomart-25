

var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-contacts");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
      login.focus();
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remote("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-button");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

var buyLink = document.querySelectorAll(".buy");

var buyPopup = document.querySelector(".modal-cart-form");
var buyClose = buyPopup.querySelector(".modal-close");

for (var i = 0; i < buyLink.length; i++) {

  buyLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
}

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

//переключение слайдера-сервисы
var clickService = document.querySelectorAll(".service-item");

var service = document.querySelectorAll(".service-content");
console.log(service[0], service[1], service[2]);

  clickService[1].addEventListener("click", function (evt) {
    evt.preventDefault();

    clickService[0].classList.remove("service-item--active");
    service[0].classList.add("slider-item--close");
    service[0].classList.remove("slider-item--show");

    clickService[2].classList.remove("service-item--active");
    service[2].classList.add("slider-item--close");
    service[2].classList.remove("slider-item--show");

    service[1].classList.remove("slider-item--close");
    clickService[1].classList.add("service-item--active");
    service[1].classList.add("slider-item--show");
  });


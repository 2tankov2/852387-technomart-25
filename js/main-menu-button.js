

var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-contacts");
if  (popup) {
var btnClose = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
}
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

if (link) {
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
}

if (btnClose) {
  btnClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remote("modal-error");
  });
}

if (form) {
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
}

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
if (mapClose) {
var mapClose = mapPopup.querySelector(".modal-close");
}
if (mapLink) {
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
}

if (mapClose) {
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
}

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
var buttonServices = document.querySelectorAll(".service-item");

var contentServices = document.querySelectorAll(".service-content");

if (buttonServices[i]) {
buttonServices[0].addEventListener("click", function (evt) {
  //сброс для всех
  for (var j=0; j<buttonServices.length; j++) {
      buttonServices[j].classList.remove("service-item--active");
      contentServices[j].classList.add("slider-item--close");
  }

   buttonServices[0].classList.add("service-item--active");
   contentServices[0].classList.remove("slider-item--close");
});

buttonServices[1].addEventListener("click", function (evt) {
  //сброс для всех
  for (var j=0; j<buttonServices.length; j++) {
      buttonServices[j].classList.remove("service-item--active");
      contentServices[j].classList.add("slider-item--close");
  }

   buttonServices[1].classList.add("service-item--active");
   contentServices[1].classList.remove("slider-item--close");
});


buttonServices[2].addEventListener("click", function (evt) {
  //сброс для всех
  for (var j=0; j<buttonServices.length; j++) {
      buttonServices[j].classList.remove("service-item--active");
      contentServices[j].classList.add("slider-item--close");
  }

   buttonServices[2].classList.add("service-item--active");
   contentServices[2].classList.remove("slider-item--close");
});
}

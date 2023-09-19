var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var picture = document.getElementById("picture");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/toggle-off.svg";
    logo.src = "./images/white-logo.png";
    picture.src = "./images/img-white.png";
  } else {
    icon.src = "./images/toggle-on.svg";
    logo.src = "./images/dark-logo.png";
    picture.src = "./images/img-black.png";
  }
}

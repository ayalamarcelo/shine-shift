var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var picture = document.getElementById("picture");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./src/toggle-off.svg";
    logo.src = "./src/white-logo.png";
    picture.src = "./src/img-white.png";
  } else {
    icon.src = "./src/toggle-on.svg";
    logo.src = "./src/dark-logo.png";
    picture.src = "./src/img-black.png";
  }
}

document.getElementById("btn-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu")
}
const icon = document.getElementById("icon");
const logo = document.getElementById("logo");
const picture = document.getElementById("picture");
const btnMenu = document.getElementById("btn-menu");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./src/toggle-off.svg";
    logo.src = "./src/white-logo.png";
    picture.src = "./src/img-white.png";
    btnMenu.src = "./src/menu-white.svg"
  } else {
    icon.src = "./src/toggle-on.svg";
    logo.src = "./src/dark-logo.png";
    picture.src = "./src/img-black.png";
    btnMenu.src = "./src/menu-black.svg";
  }
}

document.getElementById("btn-menu").addEventListener("click", show_menu);

function show_menu(){
    document.querySelector(".menu").classList.toggle("show_menu");
}
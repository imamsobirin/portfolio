const menuBar = document.querySelector(".menu-bar"),
  menuList = document.querySelector(".navbar-list");

menuBar.addEventListener("click", (e) => {
  if (menuList.style.display == "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

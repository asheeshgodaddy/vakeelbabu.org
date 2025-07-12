//JavaScript to fix the menu on top while scrolling
const scrollmenu = document.getElementById("scrollmenu");
const offsetTop = scrollmenu.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= offsetTop) {
    scrollmenu.classList.add("fixed");
  } else {
    scrollmenu.classList.remove("fixed");
  }
});

const openMenu = () => {
  document.getElementById("interior-mobile-page").style.display = "block";
  document.getElementById("interior-web-page").style.display = "none";
};
const closeMenu = () => {
  document.getElementById("interior-mobile-page").style.display = "none";
  document.getElementById("interior-web-page").style.display = "block";
};

window.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.getElementById("interior__header__open");
  menuOpenBtn.addEventListener("click", openMenu);

  const menuCloseBtn = document.getElementById("interior__mobile__close");
  menuCloseBtn.addEventListener("click", closeMenu);
});

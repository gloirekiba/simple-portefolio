const navTogglerOpen = document.querySelector(".nav__toggler-open");
const navTogglerClose = document.querySelector(".nav__toggler-close");
const navList = document.querySelector(".nav__list");

navTogglerOpen.addEventListener("click", () => {
  navList.classList.add("nav__list-translate");
});

navTogglerClose.addEventListener("click", () => {
  navList.classList.remove("nav__list-translate");
});

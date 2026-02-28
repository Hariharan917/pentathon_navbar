const navLinks = document.querySelectorAll(".navbar-center a");
const logo = document.querySelector(".logo");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});

logo.addEventListener("click", function () {
  navLinks.forEach(item => item.classList.remove("active"));
});
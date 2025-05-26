

  document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");

    homeLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });




document.getElementById("menu-link").addEventListener("click", function () {
  window.location.href = "menu.html";
});


document.getElementById("about-link").addEventListener("click", function () {
  window.location.href = "about.html";
});

document.getElementById("contact-link").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contact-popup").style.display = "block";
});

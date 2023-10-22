'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});


var button = document.getElementById("nextButton");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the "data-next-page" attribute
    var nextPage = button.getAttribute("data-next-page");

    // Redirect to the specified page
    if (nextPage) {
      window.location.href = nextPage;
    }
  });

  var button = document.getElementById("nextButton1");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the "data-next-page" attribute
    var nextPage = button.getAttribute("data-next-page");

    // Redirect to the specified page
    if (nextPage) {
      window.location.href = nextPage;
    }
  });

  var button = document.getElementById("nextButton2");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the "data-next-page" attribute
    var nextPage = button.getAttribute("data-next-page");

    // Redirect to the specified page
    if (nextPage) {
      window.location.href = nextPage;
    }
  });

  var button = document.getElementById("nextButton3");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the "data-next-page" attribute
    var nextPage = button.getAttribute("data-next-page");

    // Redirect to the specified page
    if (nextPage) {
      window.location.href = nextPage;
    }
  });


  var button = document.getElementById("nextButton4");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the "data-next-page" attribute
    var nextPage = button.getAttribute("data-next-page");

    // Redirect to the specified page
    if (nextPage) {
      window.location.href = nextPage;
    }
  });


  var button = document.getElementById("nextButton5");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the "data-next-page" attribute
    var nextPage = button.getAttribute("data-next-page");

    // Redirect to the specified page
    if (nextPage) {
      window.location.href = nextPage;
    }
  });


  






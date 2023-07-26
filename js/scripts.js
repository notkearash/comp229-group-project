/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  function handleFormSubmit(formId, successMessage) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const url = form.getAttribute("action");
      const method = form.getAttribute("method");

      try {
        const response = await fetch(url, {
          method: method,
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(successMessage, data);
          // Redirect to the dashboard or homepage after successful login/signup
          window.location.href = "../newindex.html";
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
          const errorMessage = errorData.error || "An error occurred";
          // Display the error message to the user (e.g., show it on the page)
          // For example, you can have a <div> with id="error-message" in your HTML
          document.getElementById("error-message").textContent = errorMessage;
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle any other errors that may occur during the AJAX request
      }
    });
  }

  // Call the function to handle login form submissions
  handleFormSubmit("login-form", "Login successful!");

  // Call the function to handle signup form submissions
  handleFormSubmit("signup-form", "Signup successful!");
});

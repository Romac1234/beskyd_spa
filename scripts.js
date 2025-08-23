window.onload = function () {
  // scroll to the top after page reload
  window.scrollTo(0, 0);

  //   let logo fall
  const logo = document.getElementById("logo");
  logo.classList.add("logo-animation");

  logo.addEventListener("animationend", () => {
    // Once the animation is complete, remove the animation class
    logo.classList.remove("logo-animation");

    // And add the fixed class
    logo.classList.add("logo-fixed");
  });
};

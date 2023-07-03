$(document).ready(function () {
  var imagesLoaded = 0;
  var totalImages = $("img").length;
  $("img").on("load", function (event) {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
    }
  });

  function allImagesLoaded() {
    console.log("ALL IMAGES LOADED");
  }
});

this.window.onload = function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("experience_show");
      } else {
        entry.target.classList.remove("experience_show");
      }
    });
  });
  const experiences = document.querySelectorAll(".experience");
  experiences.forEach((el) => observer.observe(el));

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("entry_show");
      } else {
        entry.target.classList.remove("entry_show");
      }
    });
  });
  const entries = document.querySelectorAll(".entry");
  entries.forEach((el) => observer2.observe(el));
};

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("dc").textContent;
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  document.getElementById("dc").textContent = "Copied!";
  setTimeout(function () {
    document.getElementById("dc").textContent = copyText;
  }, 1000); //delay is in milliseconds
}

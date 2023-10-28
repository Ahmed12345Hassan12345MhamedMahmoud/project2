/* ==========================
         Skills
   ========================== */

let Section = document.querySelector(".our-skills");
let Spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= Section.offsetTop) {
    Spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};


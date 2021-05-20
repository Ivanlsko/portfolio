const header = document.querySelector("header");
const optionsHeader = {
  rootMargin: "0% 0% -30%",
};
const observerHeader = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting == true) {
      console.log("tylepsi");
      document.querySelector("#navbar").classList.remove("invert");
    } else {
      document.querySelector("#navbar").classList.add("invert");
    }
  });
}, optionsHeader);

observerHeader.observe(header);

const section = document.querySelectorAll("section");
const optionsSection = {
  rootMargin: "60%",
  treshold: 0.2,
};
const beenloaded = false;
const observerSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entries.target);
    if ((entry.isIntersecting == true, beenloaded == false)) {
      console.log("sectionin");
      entry.target.classList.add("goUp");
      beenloaded = true;
    } else {
      console.log("sectionout");
      entry.target.classList.remove("goUp");
    }
  });
}, optionsSection);

section.forEach((thatSection) => observerSection.observe(thatSection));

const header = document.querySelector("header");
const options = {
  rootMargin: "0% 0% -30%",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting == true) {
      console.log("tylepsi");
      document.querySelector("#navbar").classList.remove("invert");
    } else {
      document.querySelector("#navbar").classList.add("invert");
    }
  });
}, options);

observer.observe(header);

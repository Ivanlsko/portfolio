const cardOne = document.querySelector("#addAboutme");
const options = {
  rootMargin: "0% 0% -30%",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting == true) {
      console.log("tylepsi");
      document.querySelector("#addAboutme").style.color = "red";
    } else {
      document.querySelector("#addAboutme").style.color = "black";
    }
  });
}, options);

observer.observe(cardOne);

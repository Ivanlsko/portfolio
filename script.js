const navItem = document.querySelectorAll(".navItem");
const navItemArray = Array.from(navItem);

navItemArray[0].addEventListener("mouseenter", hoverStateNav);
navItemArray[1].addEventListener("mouseenter", hoverStateNav);
navItemArray[2].addEventListener("mouseenter", hoverStateNav);
navItemArray[3].addEventListener("mouseenter", hoverStateNav);
navItemArray[4].addEventListener("mouseenter", hoverStateNav);
navItemArray[5].addEventListener("mouseenter", hoverStateNav);

navItemArray[0].addEventListener("mouseleave", hoverStateNav);
navItemArray[1].addEventListener("mouseleave", hoverStateNav);
navItemArray[2].addEventListener("mouseleave", hoverStateNav);
navItemArray[3].addEventListener("mouseleave", hoverStateNav);
navItemArray[4].addEventListener("mouseleave", hoverStateNav);
navItemArray[5].addEventListener("mouseleave", hoverStateNav);

function hoverStateNav() {
  console.log("hello");
  this.firstElementChild.classList.toggle("hoverLineActive");
  this.classList.toggle("bold");
}

const button = document.querySelectorAll(".button");
const buttomArray = Array.from(button);

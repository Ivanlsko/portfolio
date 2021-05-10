const navItem = document.querySelectorAll(".navItem");
const navItemArray = Array.from(navItem);

navItem.forEach((a) => {
  a.addEventListener("mouseenter", hoverStateNav);
  a.addEventListener("mouseleave", hoverStateNav);
});

function hoverStateNav() {
  console.log("hello");
  this.firstElementChild.classList.toggle("hoverLineActive");
  this.classList.toggle("bold");
}

const button = document.querySelectorAll(".button");
const buttonArray = Array.from(button);
console.log(buttonArray);

buttonArray.forEach((button) => {
  button.addEventListener("mouseenter", buttonHover);
  button.addEventListener("mouseleave", buttonHover);
});

function buttonHover() {
  this.classList.toggle("bigger");
}

document.querySelectorAll(".someIcon").forEach((someIcon) => {
  someIcon.addEventListener("mouseenter", buttonHover);
  someIcon.addEventListener("mouseleave", buttonHover);
});

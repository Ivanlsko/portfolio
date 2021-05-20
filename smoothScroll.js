$(".topNavItem").on("click", function (e) {
  if (this.hash !== "") {
    console.log("malobyist");
    e.preventDefault();

    const hash = this.hash;

    $("html, body, main").animate(
      {
        scroollTop: $(hash).offset().top,
      },
      800
    );
  }
});

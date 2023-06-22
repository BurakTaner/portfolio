const links = document.querySelectorAll(".nav-list li");
let currentActive:Element;
links.forEach(e => {
  if(e.classList.contains("active")) {
    currentActive = e;
  }
});
links.forEach((el) => el.addEventListener("click", function(this:Element)  {
  currentActive.classList.remove("active");
  this.classList.add("active");
  currentActive = this;
}));

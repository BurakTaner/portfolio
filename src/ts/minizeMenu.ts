const hambars = document.querySelector<HTMLElement>("#hamburger-bars")!;
hambars.addEventListener("click", () => {
  const navList = document.querySelector<HTMLUListElement>("#nav-list")!;
  if(navList.style.display === "none") {
    navList.style.display = "flex";
  }
  else {
    navList.style.display = "none";
  }
});

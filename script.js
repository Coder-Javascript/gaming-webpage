const menuBtn = document.querySelector(".menu-btn");
const li=document.getElementsByClassName(".menu-list");
let menuOpen = false;


menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    li.classList.add("ieslegts");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    li.classList.remove("ieslegts");
    menuOpen = false;
  }
});

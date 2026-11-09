const menuItems = [...document.querySelectorAll(".menu-item")];
const selectionFrame = document.querySelector(".selection-frame");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuItems.forEach((candidate) => {
      candidate.classList.remove("is-active");
      candidate.removeAttribute("aria-current");
      candidate.setAttribute("aria-selected", "false");
    });

    item.classList.add("is-active");
    item.setAttribute("aria-current", "page");
    item.setAttribute("aria-selected", "true");
    selectionFrame.style.transform = `translateX(${index * 100}%)`;
  });
});

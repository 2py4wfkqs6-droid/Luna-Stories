const menuItems = [...document.querySelectorAll(".menu-item")];

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((candidate) => {
      candidate.classList.remove("is-active");
      candidate.removeAttribute("aria-current");
      candidate.setAttribute("aria-selected", "false");
      candidate.querySelector(".selection-frame")?.remove();
    });

    item.classList.add("is-active");
    item.setAttribute("aria-current", "page");
    item.setAttribute("aria-selected", "true");

    const frame = document.createElement("img");
    frame.className = "selection-frame";
    frame.src = "assets/menu-active-frame.png";
    frame.alt = "";
    frame.setAttribute("aria-hidden", "true");
    item.prepend(frame);
  });
});

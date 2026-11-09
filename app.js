const app = document.querySelector(".app");
const menuItems = [...document.querySelectorAll(".menu-item")];
const selectionFrame = document.querySelector(".selection-frame");
const wardrobeScreen = document.querySelector("#wardrobe-screen");
const outfitOptions = [...document.querySelectorAll(".outfit-option")];
const garments = [...document.querySelectorAll(".garment")];
const outfitName = document.querySelector("#outfit-name");
const outfitBonus = document.querySelector("#outfit-bonus");
const wearButton = document.querySelector("#wear-button");

const outfits = {
  moonlight: { name: "Платье «Лунный свет»", bonus: "+2 к уверенности" },
  crimson: { name: "Платье «Рубиновая роза»", bonus: "+3 к обаянию" }
};
let pendingOutfit = "moonlight";

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

    const showWardrobe = item.dataset.tab === "wardrobe";
    wardrobeScreen.hidden = !showWardrobe;
    app.classList.toggle("is-wardrobe", showWardrobe);
  });
});

outfitOptions.forEach((option) => {
  option.addEventListener("click", () => {
    pendingOutfit = option.dataset.outfit;
    outfitOptions.forEach((candidate) => {
      const selected = candidate === option;
      candidate.classList.toggle("is-selected", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });
    garments.forEach((garment) => garment.classList.toggle("is-visible", garment.dataset.garment === pendingOutfit));
    outfitName.textContent = outfits[pendingOutfit].name;
    outfitBonus.textContent = outfits[pendingOutfit].bonus;
    wearButton.textContent = "Надеть";
  });
});

wearButton.addEventListener("click", () => {
  wearButton.textContent = "Надето ✓";
  window.setTimeout(() => { wearButton.textContent = "Надеть"; }, 1200);
});

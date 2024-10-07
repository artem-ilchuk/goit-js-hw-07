function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
btn.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  color.textContent = newColor;
});

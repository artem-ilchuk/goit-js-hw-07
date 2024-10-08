function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = controls.querySelector(".controls-input");
const createBtn = controls.querySelector(".create-btn");
const destroyBtn = controls.querySelector(".delete-btn");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {

  const boxesQubes = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
  }
  boxesContainer.append(boxesQubes);
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();

  createBoxes(amount);

  input.value = "";
});

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);

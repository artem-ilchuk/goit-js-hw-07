const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const user = input.value.trim();
  output.textContent = user === "" ? "Anonymous" : user;
});

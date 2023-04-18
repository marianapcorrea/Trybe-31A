const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
console.log(popoverList);

const sendBtn = document.getElementById("submit-btn");
let agreement = document.getElementById("agreement");
const sendBtnSpan = document.querySelector("span");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const clearButton = document.querySelector("#clear-btn");

const clearFields = () => {
  textArea.value = "";
  for (let input of inputs) {
    input.type === "text" || input.type === "email" ? (input.value = "") : (input.value = false);
  }
};
//////////////////
window.onload = () => {
  sendBtnSpan.addEventListener("mouseover", (event) => {
    event.preventDefault();
    if (sendBtn.hasAttribute("disabled") === true) {
      alert("Você precisa concordar com o uso das suas imagens para enviar o formulário");
    }
  });
  sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Formulário enviado! Boa sorte!");
  });
  agreement.addEventListener("change", () => {
    if (agreement.checked) sendBtn.removeAttribute("disabled");
  });
  clearButton.addEventListener("click", clearFields);
};

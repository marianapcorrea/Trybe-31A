window.onload = () => {
  const contentArea = document.querySelector("main");
  //Captura valor para o localStorage e define o valor para o atributo style
  const setBGC = (color) => {
    localStorage.setItem("backgroundColor", color);
    contentArea.style.backgroundColor = color;
  };

  //Dispara evento
  const handleBGChange = () => {
    const bcList = document.querySelectorAll("#background-color button");
    for (let button of bcList) {
      button.addEventListener("click", (event) => {
        contentArea.style.backgroundColor = event.target.innerHTML;
        setBGC(event.target.innerHTML);
      });
    }
  };
  const activateSettings = () => {
    let backgroundColor = localStorage.getItem("backgroundColor");
    backgroundColor && setBGC(backgroundColor);
  };
  const startEvents = () => {
    activateSettings();
    handleBGChange();
  };
  startEvents();
};

window.onload = () => {
  const contentArea = document.querySelector("main");
  //Captura valor para o localStorage e define o valor para propriedades em style
  const setBGC = (color) => {
    localStorage.setItem("backgroundColor", color);
    contentArea.style.backgroundColor = color;
  };

  const setTxColor = (color) => {
    localStorage.setItem("txColor", color);
    contentArea.style.color = color;
  };

  const setTxSize = (size) => {
    localStorage.setItem("txSize", size);
    contentArea.style.fontSize = size;
  };

  const setLnHeight = (height) => {
    localStorage.setItem("lnHeight", height);
    contentArea.style.lineHeight = height;
  };

  const setFntFamily = (font) => {
    localStorage.setItem("fntFamily", font);
    contentArea.style.fontFamily = font;
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

  const handleTxSizeChange = () => {
    const txColorList = document.querySelectorAll("#font-color button");
    for (let button of txColorList) {
      button.addEventListener("click", (event) => {
        contentArea.style.color = event.target.innerHTML;
        setTxColor(event.target.innerHTML);
      });
    }
  };

  const handleTxColorChange = () => {
    const txSizeList = document.querySelectorAll("#font-size button");
    for (let button of txSizeList) {
      button.addEventListener("click", (event) => {
        contentArea.style.fontSize = event.target.innerHTML;
        setTxSize(event.target.innerHTML);
      });
    }
  };

  const handleLnHeightChange = () => {
    const lnHeightList = document.querySelectorAll("#line-height button");
    for (let button of lnHeightList) {
      button.addEventListener("click", (event) => {
        contentArea.style.lineHeight = event.target.innerHTML;
        setLnHeight(event.target.innerHTML);
      });
    }
  };

  const handleFntFamilyChange = () => {
    const fntFamilyList = document.querySelectorAll("#font-family button");
    for (let button of fntFamilyList) {
      button.addEventListener("click", (event) => {
        contentArea.style.fontFamily = event.target.innerHTML;
        setFntFamily(event.target.innerHTML);
      });
    }
  };

  //Ativa as funções
  const activateSettings = () => {
    let backgroundColor = localStorage.getItem("backgroundColor");
    backgroundColor && setBGC(backgroundColor);
    let txColor = localStorage.getItem("txColor");
    txColor && setTxColor(txColor);
    let txSize = localStorage.getItem("txSize");
    txSize && setTxSize(txSize);
    let lnHeight = localStorage.getItem("lnHeight");
    lnHeight && setLnHeight(lnHeight);
    let fntFamily = localStorage.getItem("fntFamily");
    fntFamily && setFntFamily(fntFamily);
  };
  const startEvents = () => {
    activateSettings();
    handleBGChange();
    handleTxColorChange();
    handleTxSizeChange();
    handleLnHeightChange();
    handleFntFamilyChange();
  };
  startEvents();
};

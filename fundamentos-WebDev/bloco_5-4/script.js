window.onload = function () {
  // Captura dos paragrafos:
  let text = document.querySelectorAll('.paragraph');
  
  // Funções:
  function backgroundColor (color){
    let content = document.querySelector('.content');
    content.style.backgroundColor = color

    localStorage.setItem('backgroundColor', color);
  }

  function textColor(color) {
    text.style.color = color;

    localStorage.setItem('textColor', color);
  }

  function fontSize(size) {
    text.style.fontSize = size;

    localStorage.setItem('fontSize', size);
  }

  function lineHeight(height) {
    text.style.lineHeight = size;

    localStorage.setItem('lineHeight', height);
  }

  function fontFamily(family) {
    text.style.fontFamily = family;

    localStorage.setItem('fontFamily', family);
  }

  // Eventos:
  // BG-Color
  let backgroundColorButtons = document.querySelectorAll("#background>button");

  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener("click", function(event) {
      backgroundColor(event.target.innerHTML)
    })
  }

  // text-Color
  let textColorButtons = document.querySelectorAll("#text-color>button");

  for (let i = 0; i < textColorButtons.length; i += 1) {
    textColorButtons[i].addEventListener("click", function(event) {
      textColor(event.target.innerHTML)
    })
  }

  // font-size
  let fontSizeButtons = document.querySelectorAll("#font-size>button");

  for (let i = 0; i < fontSizeButtons.length; i += 1) {
    fontSizeButtons[i].addEventListener("click", function(event) {
      fontSize(event.target.innerHTML);
    })
  }

  // font-height
  let lineHeightButtons = document.querySelectorAll("#line-height>button");

  for (let i = 0; i < lineHeightButtons.length; i += 1) {
    lineHeightButtons[i].addEventListener("click", function(event) {
      lineHeight(event.target.innerHTML)
    })
  }

  // font family
  let fontFamilyButtons = document.querySelectorAll("#font-family>button");

  for (let i = 0; i < fontFamilyButtons.length; i += 1) {
    fontFamilyButtons[i].addEventListener("click", function(event) {
      fontFamily(event.target.innerHTML)
    })
  }
}
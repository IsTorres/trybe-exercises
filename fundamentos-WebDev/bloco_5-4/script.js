window.onload = function () {
  let text = document.querySelectorAll('.paragraph');

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
}
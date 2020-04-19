function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Твой компьютер заражен вирусом! Твой компьютер заражен вирусом! Твой компьютер заражен вирусом! Твой компьютер заражен вирусом! ';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph); 
}

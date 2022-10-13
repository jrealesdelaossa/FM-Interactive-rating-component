const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');

const buttonSelect = document.querySelector('.btn')
const buttons = [btn1, btn2, btn3, btn4, btn5];

function changeStatusSelection() {
  buttonSelect.classList.toggle('btn-select');
  for (let btn of buttons) {
    console.log(btn.classList.contains('btn'));
  }
}

btn1.addEventListener('click', changeStatusSelection);
btn2.addEventListener('click', changeStatusSelection);
btn3.addEventListener('click', changeStatusSelection);
btn4.addEventListener('click', changeStatusSelection);
btn5.addEventListener('click', changeStatusSelection);
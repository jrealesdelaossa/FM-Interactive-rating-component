const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');

const btns = [btn1, btn2, btn3, btn4, btn5];

function changeSelectButton() {
  for (let b of btns) {
    if (b.classList.contains('btn-select')) {
      b.classList.remove('btn-select');
    }
  }

  this.classList.add('btn-select')
}

btn1.addEventListener('click', changeSelectButton);
btn2.addEventListener('click', changeSelectButton);
btn3.addEventListener('click', changeSelectButton);
btn4.addEventListener('click', changeSelectButton);
btn5.addEventListener('click', changeSelectButton);
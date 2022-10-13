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

/**
 * Thank you state interaction
 */

const btnSelect = document.querySelector('.btn-submit');
// contenedor
const container = document.querySelector('#main-container');

function getSelectButton() {
  for (let b of btns) {
    if (b.classList.contains('btn-select')) {
      return b.innerHTML;
    }
  }
}

function changeAThanksPage() {
  const value = getSelectButton();

  // elimina los estilos de la pagina de selección
  // y los reemplaza por los de la pagina de agradecimiento
  container.classList.remove('main-container');
  container.classList.add('main-container-thank');

  container.innerHTML = `
  <img src='./images/illustration-thank-you.svg' alt='thanks image'/>
  <span>You selected ${value} out of 5</span>
  <h1>Thank you!</h1>
  <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  `;
}

btnSelect.addEventListener('click', changeAThanksPage);

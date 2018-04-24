let prev_btn = document.querySelector('.prev')
let next_btn = document.querySelector('.next')
let slider = document.querySelectorAll('.slide')
let indicators = document.querySelectorAll('.carousel-indicator')

let i = 0;
let j = 0;

prev_btn.addEventListener('click', function (e) {
  slider[i].classList.remove('active');
  i--;
  if (i < 0) {
    i = slider.length - 1;
  }
  slider[i].classList.add('active')

  indicators[j].classList.remove('active');
  j--;
  if (j < 0) {
    j = indicators.length - 1;
  }
  indicators[j].classList.add('active')

}, false)

next_btn .addEventListener('click', function (e) {
  slider[i].classList.remove('active');
  i++;

  if (i >= slider.length) {
    i = 0;
  }
  slider[i].classList.add('active');

  indicators[j].classList.remove('active');
  j++;
  if (j >= indicators.length) {
    j = 0;
  }
  indicators[j].classList.add('active')
}, false)

document.querySelector('#slideShow').addEventListener('click', function (e) {
  let slideInterval = setInterval(function () {
    if(document.querySelector('#slideShow').checked){
      slider[i].classList.remove('active');
      i++;
      if (i >= slider.length) {
        i = 0;
      }
      slider[i].classList.add('active');

      indicators[j].classList.remove('active');
      j++;
      if (j >= indicators.length) {
        j = 0;
      }
      indicators[j].classList.add('active')

    } else {
      clearInterval(slideInterval)
    }
  }, 2500);
}, false)

document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('is-active');
}, true)

const menu = document.querySelector('.menu-block');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', function () {
  menu.classList.toggle('is-hidden');
});

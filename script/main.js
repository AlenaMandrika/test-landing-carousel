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

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
document.querySelector('.menu-icon').addEventListener('click', function () {
  myFunction()
}, true)

document.addEventListener('click', function (e) {
  console.log(e.target)
  if (!e.target.matches('.menu-icon')) {
    let myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}, true)

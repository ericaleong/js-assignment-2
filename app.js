const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')
const closeButton = document.querySelector('.close')

burger.addEventListener('click', function(){
  nav.classList.toggle('active')
})

closeButton.addEventListener('click', function(){
  nav.classList.toggle('inactive')
})

nav();

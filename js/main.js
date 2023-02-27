let headerBurger = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__menu')
let back = document.querySelector('body')
let headerList = document.querySelector('.header__list')
let menuLink = document.querySelectorAll('.item-link')
console.log(menuLink)

headerBurger.onclick = function () {
  headerBurger.classList.toggle('active')
  headerList.classList.toggle('active')
  back.classList.toggle('noscroll')
}

headerList.onclick = function () {
  headerBurger.classList.toggle('active')
  headerList.classList.toggle('active')
  back.classList.toggle('noscroll')
}

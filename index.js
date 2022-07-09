
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__navigation');
const menuClose = document.querySelector('.close-burger');
const menuLink = document.querySelector('.navigation__list')

const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')


burgerItem.addEventListener('click', () => {
  menu.classList.add('header__navigation_active');
  overlay.classList.add('overlay_active');
  body.classList.add('lock')

});

menuClose.addEventListener('click', () => {
  menu.classList.remove('header__navigation_active');
  overlay.classList.remove('overlay_active');
  body.classList.remove('lock')
});

menuLink.addEventListener('click', () => {
  menu.classList.remove('header__navigation_active');
  overlay.classList.remove('overlay_active');
  body.classList.remove('lock')
  console.log('link')
})

overlay.addEventListener('click', () => {
  menu.classList.remove('header__navigation_active');
  overlay.classList.remove('overlay_active');
  body.classList.remove('lock')
});




console.log('Оценка: 85\n\n1. Вёрстка соответствует макету. 	Ширина экрана 390px +48\n\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n\n3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22')
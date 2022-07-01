const links = document.querySelectorAll('.header__link')
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    links.forEach(item => item.classList.remove('header__link-active'))
    links[i].classList.add('header__link-active')
  })
}

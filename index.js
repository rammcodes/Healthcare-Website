const hamMenuIcon = document.querySelector('.main-nav .ham-menu-cont')
const sideMenuCloseBtn = document.querySelector('.side-menu-main .close-cont')
const sideMenuContainer = document.querySelector('.side-menu-cont')

hamMenuIcon.addEventListener('click', () => {
  sideMenuContainer.classList.remove('hide-menu')
  sideMenuContainer.classList.add('show-menu')
})

sideMenuCloseBtn.addEventListener('click', () => {
  sideMenuContainer.classList.remove('show-menu')
  sideMenuContainer.classList.add('hide-menu')
})

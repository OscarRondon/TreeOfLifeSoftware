export const menuClick = () => {
  const $button = document.querySelector('.hamburger-button')
  const $sideBar = document.querySelector('.sidebar')
  $button?.classList.toggle('opened')
  $button?.setAttribute('aria-expanded', $button?.classList.contains('opened') ? 'true' : 'false')
  $sideBar?.classList.toggle('display-none')
  $sideBar?.setAttribute('aria-expanded', $sideBar?.classList.contains('display-none') ? 'true' : 'false')
}

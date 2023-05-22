import { HamburgerButtonSVG } from '../utils/svgs'
import { menuClick } from '../utils/menuClick'

export function HamburgerButton () {

  /*
  const handleClick = () => {
    const $button = document.querySelector('.hamburger-button')
    const $sideBar = document.querySelector('.sidebar')
    $button?.classList.toggle('opened')
    $button?.setAttribute('aria-expanded', $button?.classList.contains('opened') ? 'true' : 'false')
    $sideBar?.classList.toggle('display-none')
    $sideBar?.setAttribute('aria-expanded', $sideBar?.classList.contains('display-none') ? 'true' : 'false')
  }
  */

  return (
    <button
      type='button'
      className='hamburger-button'
      aria-label='Hamburger Button'
      aria-expanded='false'
      onClick={menuClick}
    >
      <HamburgerButtonSVG />
    </button>
  )
}

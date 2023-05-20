import { HamburgerButtonSVG } from '../utils/svgs'

export function HamburgerButton () {

  const handleClick = () => {
    const $button = document.querySelector('.hamburger-button')
    $button?.classList.toggle('opened')
    $button?.setAttribute('aria-expanded', $button?.classList.contains('opened') ? 'true' : 'false')
  }

  return (
    <button
      type='button'
      className='hamburger-button'
      aria-label='Hamburger Button'
      aria-expanded='false'
      onClick={handleClick}
    >
      <HamburgerButtonSVG />
    </button>
  )
}

import { AppNavbar } from './AppNavbar'

export function AppHeader () {
  return (
    <header className='main-header border'>
      <img className='header-logo border' src='src/assets/Images/logos/Logo4_NoBG.png' alt='logo' />
      <AppNavbar />
      <div className='header-button-contact border'>
        <button type='button'>Contac Us</button>
      </div>
      <div className='header-button-hamburger border'>Hamburger</div>
    </header>
  )
}

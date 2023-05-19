import { AppNavbar } from './AppNavbar'

export function AppHeader () {
  return (
    <div className='sticky-area'>
      <header className='main-header'>
        <img className='header-logo' src='src/assets/Images/logos/Logo4_NoBG.png' alt='logo' />
        <AppNavbar />
        <div className='header-button-contact'>
          <button type='button'>Contac Us</button>
        </div>
        <div className='header-button-hamburger'>Hamburger</div>
      </header>
      <section className='spikes' />
    </div>
  )
}

import { AppNavbar } from './AppNavbar'

export function AppHeader () {
  return (
    <div className='sticky-header-area'>
      <header className='main-header page-width'>
        <img className='header-logo' src='src/assets/Images/logos/Logo4_NoBG.png' alt='logo' />
        <AppNavbar />
        <div className='header-button-contact'>
          <button className='button-m' type='button'>CONTACT US</button>
        </div>
        <div className='header-button-hamburger'>Hamburger</div>
      </header>
      <section className='spikes' />
    </div>
  )
}

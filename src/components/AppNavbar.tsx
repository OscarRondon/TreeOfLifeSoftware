import { menuClick } from '../utils/menuClick'

interface Props {
  type: 'HEADER' | 'ASIDE'
}

export function AppNavbar ({ type }: Props) {

  return (
    <nav className={type === 'HEADER' ? 'header-navbar' : 'aside-navbar'}>
      <ul>
        <li><a href='#' onClick={type === 'ASIDE' ? menuClick : undefined}>Home</a></li>
        <li><a href='#technologies' onClick={type === 'ASIDE' ? menuClick : undefined}>Technologies</a></li>
        <li><a href='#services' onClick={type === 'ASIDE' ? menuClick : undefined}>Services</a></li>
        <li><a href='#aboutUs' onClick={type === 'ASIDE' ? menuClick : undefined}>About Us</a></li>
      </ul>
    </nav>
  )
}

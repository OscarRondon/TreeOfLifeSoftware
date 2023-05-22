import { AppNavbar } from './AppNavbar'

export function AppSidebar () {
  return (
    <aside className='sidebar display-none' aria-expanded='false'>
      <AppNavbar type='ASIDE' />
    </aside>
  )
}

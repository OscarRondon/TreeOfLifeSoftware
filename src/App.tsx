import './styles/App.css'
import { Opening } from './components/Opnening'
import { AppMain } from './components/AppMain'
import { AppSidebar } from './components/AppSidebar'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'

function App () {

  return (
    <>
      <Opening />
      <AppHeader />
      <AppSidebar />
      <AppMain />
      <AppFooter />
    </>
  )
}

export default App

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
      <div style={{ height: '100vh' }} />
      <AppSidebar />
      <div style={{ height: '100vh' }} />
      <AppMain />
      <div style={{ height: '100vh' }} />
      <AppFooter />
    </>
  )
}

export default App

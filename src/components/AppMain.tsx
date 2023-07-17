import { AboutUs } from './AboutUs'
import { ContactUsModal } from './ContactUsModal'
import { Home } from './Home'
import { Services } from './Services'
import { Technologies } from './Technologies'

export function AppMain () {
  return (
    <main className='main'>
      <Home />
      <Technologies />
      <Services />
      <AboutUs />
      <ContactUsModal />
    </main>
  )
}

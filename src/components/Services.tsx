import services from '../assets/data/services.json'
import { type Service } from '../dataTypes'
import { ServicesDetail } from './ServicesDetail'


export function Services () {

  const servicesData: Service[] = services as Service[]

  return (
    <section className='container page-width page-height'>
      <div className='services-container'>
        <h2 className='container-title'>
          <span id='services' className='main-inpage-anchor-space' />
          <strong>Our Services</strong>
        </h2>
        <div className='services-list border'>
          {
            servicesData.map((serv) => {
              return (
                <section key={serv.id} className='services-card border'>
                  <div>
                    <img src={serv.imgSrc} />
                    <h2 className='services-card-title'>{serv.tittle}</h2>
                  </div>
                  <ServicesDetail servId={serv.id} details={serv.detail} />
                </section>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

import technologies from '../assets/data/technologies.json'
import { Techs } from '../dataTypes.d'

export function Technologies () {

  const techData: Techs[] = technologies as Techs[]

  return (
    <section id='technologies' className='container page-width page-height border'>
      <div className='tech-container'>
        <h2 className='container-title'><strong>Our Technology Stack</strong></h2>
        <div className='tech-list'>
          {
            techData.map((tech) => {
              return (
                <div key={tech.id}>
                  <figure>
                    <img src={tech.imgSrc} alt={tech.name} />
                    <figcaption>{tech.name}</figcaption>
                  </figure>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

import technologies from '../assets/data/technologies.json'
import { Techs } from '../dataTypes.d'

export function Technologies () {

  const techData: Techs[] = technologies as Techs[]

  return (
    <section className='container page-width page-height'>
      <div className='tech-container'>
        <h2 className='container-title'>
          <span id='technologies' className='main-inpage-anchor-space' />
          <strong>Our Technology Stack</strong>
        </h2>
        <div className='tech-list'>
          {
            techData.map((tech) => {
              return (
                <div key={tech.id} className='tech-card'>
                  <figure>
                    <img style={{ height: tech.heightvh }} src={tech.imgSrc} alt={tech.name} title={tech.name} />
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

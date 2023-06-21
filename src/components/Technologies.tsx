import technologies from '../assets/data/technologies.json'
import { Tech } from '../dataTypes.d'

export function Technologies () {

  const techData: Tech[] = technologies as Tech[]

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
                  <img style={{ height: tech.heightPerc }} src={tech.imgSrc} alt={tech.name} title={tech.name} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

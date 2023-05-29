import technologies from '../assets/data/technologies.json'
import { Techs } from '../dataTypes.d'

export function Technologies () {

  const techData: Techs[] = technologies as Techs[]

  return (
    <section id='technologies' className='container page-width page-height border'>
      <div className='tech-container'>
        <h2 className='container-title'><strong>Our Technologies Stack</strong></h2>
        <div className='tech-list'>
          {
            techData.map((tech) => { return <p key={tech.id}>Hola</p> })
          }
        </div>
      </div>
    </section>
  )
}

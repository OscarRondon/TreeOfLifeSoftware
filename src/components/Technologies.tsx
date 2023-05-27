import { useState, useEffect } from 'react'
import { Techs } from '../dataTypes.d'

const getTech = async () => {
  return await fetch('/src/assets/data/technologies.json ')
    .then(async res => await res.json())
    .then(data => data)
    .catch(err => { console.log(err) })
}

export function Technologies () {

  const [techData, setTechData] = useState<Techs[]>([])

  useEffect(() => {
    getTech()
      .then(data => { setTechData(data) })
      .catch(err => { console.log(err); return [] })
  }, [])

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

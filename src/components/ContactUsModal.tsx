
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { type ContactUsData } from '../dataTypes'


export function ContactUsModal () {
  const captchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    const $email = document.getElementById('Email') as HTMLInputElement
    const $name = document.getElementById('Name') as HTMLInputElement
    const $comments = document.getElementById('Comments') as HTMLInputElement
    const formData = new FormData(e.currentTarget)
    const json = JSON.stringify(Object.fromEntries(formData.entries()))
    const contactUsData: ContactUsData = JSON.parse(json)

    if (contactUsData.Email === '') {
      $email.classList.toggle('border-error')
      return
    } else $email.classList.remove('border-error')
    if (contactUsData.Name === '') {
      $name.classList.toggle('border-error')
      return
    } else $name.classList.remove('border-error')
    if (contactUsData.Comments === '') {
      $comments.classList.toggle('border-error')
      return
    } else $comments.classList.remove('border-error')

    if (contactUsData['g-recaptcha-response'] !== '') {
      alert('siiiiii')
    } else {
      alert('You must check the captcha')
    }

  }

  return (
    <div className='contactUsModal'>
      <form action='#' onSubmit={handleSubmit}>
        <article className='contactUsModal-content'>
          <header className=''>
            <h2>CONTACT US</h2>
          </header>
          <section className='contactUsModal-content-data'>
            <div className='contactUsModal-field'>
              <label>Email: </label>
              <input type='email' id='Email' name='Email' placeholder='Email' autoComplete='off' />
            </div>
            <div className='contactUsModal-field'>
              <label>Name: </label>
              <input type='text' id='Name' name='Name' placeholder='Name' autoComplete='off' />
            </div>
            <div className='contactUsModal-field'>
              <label>Comments: </label>
              <textarea id='Comments' name='Comments' placeholder='Comments' maxLength={1024} autoComplete='off' />
            </div>
          </section>
          <section className='contactUsModal-content-recaptcha '>
            <ReCAPTCHA
              sitekey={import.meta.env.Google_reCaptcha_siteKey}
              ref={captchaRef}
            />
          </section>
          <footer className='contactUsModal-content-footer'>
            <button type='submit' className='button-s'>Submit</button>
            <button type='button' className='button-s'>Cancel</button>
          </footer>
        </article>
      </form>
    </div>
  )
}

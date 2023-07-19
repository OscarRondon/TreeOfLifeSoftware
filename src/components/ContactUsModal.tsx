
import ReCAPTCHA from 'react-google-recaptcha'
export function ContactUsModal () {

  return (
    <div className='contactUsModal'>
      <article className='contactUsModal-content'>
        <header className=''>
          <h2>CONTACT US</h2>
        </header>
        <section className='contactUsModal-content-data'>
          <form action='#'>
            <div className='contactUsModal-field'>
              <label>Email: </label><input type='email' placeholder='Email' autoComplete='off' />
            </div>
            <div className='contactUsModal-field'>
              <label>Name: </label><input type='text' placeholder='Name' autoComplete='off' />
            </div>
            <div className='contactUsModal-field'>
              <label>Comments: </label><textarea placeholder='Comments' maxLength={1024} autoComplete='off' />
            </div>
          </form>
        </section>
        <section className='contactUsModal-content-recaptcha '>
          <ReCAPTCHA
            sitekey={import.meta.env.Google_reCaptcha_siteKey}
          />
        </section>
        <footer className='contactUsModal-content-footer'>
          <button type='submit' className='button-s'>Submit</button>
          <button type='button' className='button-s'>Cancel</button>
        </footer>
      </article>
    </div>
  )
}



export function ContactUsModal () {
  return (
    <div className='contactUsModal'>
      <article className='contactUsModal-content border-red'>
        <header>
          <h2>Contact Us</h2>
        </header>
        <section>
          <form action='#'>
            <label>Email: </label><input type='email' placeholder='Email' />
            <label>Name: </label><input type='text' placeholder='Name' />
            <label>Comments: </label><input type='text' placeholder='Comments' />
          </form>
        </section>
        <footer>
          <button type='submit'>Send</button>
          <button type='button'>Cancel</button>
        </footer>
      </article>
    </div>
  )
}

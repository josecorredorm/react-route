import './Contact.css'
const Contact = () => {
  return (
    <section className="contact">
        <h1>Contacto</h1>
        <form>
            <input type="text" placeholder="Nombre"/>
            <input type="email" placeholder="Email"/>
            <input className='message' type="text" placeholder="Mensaje"/>
            <button>Enviar</button>
        </form>
    </section>
  )
}

export default Contact

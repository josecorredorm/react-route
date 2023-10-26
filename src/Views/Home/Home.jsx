import './Home.css'
import sl1 from '../../assets/sl1.jpg'
import RenderCards from '../../Components/RenderCards/RenderCards'
import info from '../../Components/Data/dataservice'
const Home = () => {
  return (
    <div>
      <div className='slaider'>
        <h1 className='TitleOne'>SOMOS</h1>
        <h1 className='TitleTwo'>ALTAMENTE CALIFICADOS</h1>
      </div>
      <h1 className='titleservice'>NUESTROS SERVICIOS</h1>
      <br />
      <br />
      <section className='servicesSection'>
        {info.map (e => (
          <RenderCards
           key={e.id}
           img={e.img}
           title={e.title}
           text={e.text}/>
        ))}
        
      </section>
    </div>
  )
}

export default Home

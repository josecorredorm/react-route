import './About.css'
import info from '../../Components/Data/data'
import RenderAboutSection from '../../Components/RenderAboutSection/RenderAboutSection'
const About = () => {
  return (
    <section >  {/*className='aboutSection'*/}
        {/* <div className="aboutImg"></div>
        <div className='aboutText'>
            <h1>Somos una empresa de talento colombiano</h1>
            <p>Quiroga Soluciones e Ingeniería S.A.S. es una empresa Colombiana fundada el 07 de Julio de 2011, dedicada al desarrollo de proyectos de ingeniería civil, eléctrica y arquitectónica, conformada por un grupo multidisciplinario de profesionales y técnicos altamente calificados y confiables a la vanguardia en las soluciones técnicas y económicas que plantea a sus clientes. <br /> <br />
Con base en la experiencia de nuestros funcionarios y de alianzas estratégicas con empresas líderes, mantenemos un crecimiento contínuo, lo que nos ha llevado a participar en proyectos de adecuación, remodelación y construcción de todo tipo de edificaciones a lo largo del territorio nacional.</p>
        </div> */}
        
        {info.map (e => (
            <RenderAboutSection 
            key={e.id}
            id={e.id} 
            title={e.title} 
            text={e.text} 
            img={e.img} />
        ))}
    </section>
  )
}

export default About

import './About.css'
import info from '../../Components/Data/data'
import RenderAboutSection from '../../Components/RenderAboutSection/RenderAboutSection'
const About = () => {
  return (
    <section >  
        
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

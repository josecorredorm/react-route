import './RenderAboutSection.css'
const RenderAboutSection = ({id,title,text,img}) => {
  return (
    <section className='aboutSection'>
    

    { id%2 === 0 ? (
    <> 
    {console.log(id)}
    <div className="aboutImg"><img src={img} alt="imagen" /></div>
    <div className='aboutText'>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
    </>) : (
    <>
    <div className='aboutText'>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
    <div className="aboutImg"><img src={img} alt="imagen" /></div>
    </>)}
    </section>
  )
}

export default RenderAboutSection

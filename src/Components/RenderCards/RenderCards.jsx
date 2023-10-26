import './RenderCards.css'
const RenderCards = ({id, img, title, text}) => {
  return (
  
    <div className="cards">
       <img src={img} alt="Imagen de referencia" />
       <h1>{title}</h1>
       <p>{text}</p>       
    </div>
  
  )
}

export default RenderCards

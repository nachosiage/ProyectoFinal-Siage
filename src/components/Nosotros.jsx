import { useEffect } from 'react'
import '../App.css'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click")
    }

    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    }
    
  
  }, [])
  




  return (
    <div>
      <h2 className='titulo-nosotros'>PassPampa</h2>

    <p className='parrafo-nosotros'>PassPampa es una plataforma de eventos global que le permite crear, buscar, compartir y asistir a los eventos que ama.
      Desde festivales de música, fiestas, conferencias, seminarios, eventos en streaming/on-demand, maratones,
      concursos de videojuegos, discotecas y más.</p>
    
      <div className="parrafo-nosotros-2">
        <p>Nuestra misión es brindar a todos los usuarios herramientas para que puedan administrar y comercializar
       sus eventos de forma gratuita,
       y espacios donde puedan encontrar y aprender sobre todo lo que hay que hacer.</p>
        
      </div> 

    </div>
    

  )
}

export default Nosotros
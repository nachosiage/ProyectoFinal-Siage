import '../App.css'
import Portada1 from '/assets/portada/Fabula.jpeg';
import Portada2 from '/assets/portada/Lola-24.jpeg';
import Portada3 from '/assets/portada/Sunset-fabula.jpeg';

function Carrousel () {
    return (
        
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="#"> <img src={Portada1} className="d-block w-100" alt="..."></img> </a> 
                </div>
                <div className="carousel-item">
                  <a href="#"> <img src={Portada2} className="d-block w-100" alt="..."></img> </a>  
                </div>
                <div className="carousel-item">
                  <a href="#"> <img src= {Portada3} className="d-block w-100" alt="..."></img> </a>  
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default Carrousel;
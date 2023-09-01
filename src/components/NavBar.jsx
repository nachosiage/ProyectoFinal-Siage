import "../App.css";
import PassPampaNegro from "/assets/logo.png";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
     
        <Link to="/"> <img className='logo' src={PassPampaNegro} alt='PassPampa'/> </Link>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/productos/Fiesta">Fiesta</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/Cine">Cine</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/crea-tu-evento">Crea tu evento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cuenta">Cuenta</Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
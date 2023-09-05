import './App.css'
import NavBar from './components/NavBar';
import Carrousel from './components/Carrousel'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import CreaTuEvento from './components/CreaTuEvento';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';

function App() {

  
  return ( 
    
      <div>

        <CartProvider>

          <BrowserRouter>

            <NavBar/>

            <Carrousel/>

            <Routes>
              {/* contenedor de todos los productos */}
              <Route path="/" element={<ItemListContainer />}/> 

              {/* detalle de cada producto */}
              <Route path="/item/:id" element={<ItemDetailContainer />} />


              <Route path="/productos" element={<ItemListContainer />}/>

              {/* filtrando por categorias */}
              <Route path="/productos/:categoria" element={<ItemListContainer />}/>

              {/* filtrando por categorias */}
              <Route path="/crea-tu-evento" element={<CreaTuEvento />}/>

              {/* pagina de nosotros */}
              <Route path="/nosotros" element={<Nosotros />}/>

              {/* pagina de contacto */}
              <Route path="/contacto" element={<Contacto />}/>

              {/* pagina de carrito */}
              <Route path="/carrito" element={<Carrito />}/>


            </Routes>

          </BrowserRouter>

          <Footer /> 

        </CartProvider>
      </div>      
     
    
  )
}

export default App

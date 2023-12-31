import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito,precioTotal,vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
      vaciarCarrito();
    }
 
  return (
    <div className='container'>
        <h1 className='main-tittle'>Carrito</h1>

        {
            carrito.map((prod) => (
                <div className='producto-carrito' key={prod.id}>
                <h3>{prod.title}</h3>
                <img src={prod.img} alt="" />
                <p>Precio unitario: {prod.price}</p>
                <p>Cantidad: {prod.stock }</p>
                <p>Total: {precioTotal()}</p>
                <br />
                </div>
            ))
        } 

        { carrito.length > 0 ? 
          <>
            <h2>Precio total: ${precioTotal()}</h2> 
            <button onClick={handleVaciar}>Vaciar</button>
            <Link to="/checkout" > Finalizar compra </Link> 
          </> :
          <h2>El carrito está vacío</h2>
        }

        
        
    </div>
  )
}

export default Carrito
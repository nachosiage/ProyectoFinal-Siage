import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

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
                <p>Cantidad: {prod.cantidad}</p>
                <p>Total: {prod.precio * prod.cantidad}</p>
                <br />
                </div>
            ))
        }

        { carrito.length > 0 ? 
          <>
            <h2>Precio total: ${precioTotal()}</h2> 
            <button onClick={handleVaciar}>Vaciar</button>
          </> :
          <h2>El carrito está vacío</h2>
        }

        
        
    </div>
  )
}

export default Carrito
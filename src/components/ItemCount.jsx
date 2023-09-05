import React, { useState } from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
    
    handleAgregar = ( {} ) => {
        Toastify({
            text: "Agregado al carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "black",
              color: "white"
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    
    return (

    <div>
        
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad} </p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount
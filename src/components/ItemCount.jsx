import React, { useState } from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar, onAdd} ) => {
    
    
    return (

    <div>
        
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad} </p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className='agregar-al-carrito' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount
// Carrito.jsx
import React, { useContext } from 'react';
import { ProductContext } from '../components/context/ProductContext';

const Carrito = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(ProductContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value);
    updateCartItemQuantity(productId, newQuantity); // Llama a la función para actualizar la cantidad del producto en el carrito
  };

   // Función para calcular el total del carrito
   const calcularTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.precio * item.quantity;
    });
    return total.toFixed(2); // Redondeamos el total a dos decimales
  };

  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map(item => (
            <div key={item.id}>
              <img src={item.imagen} alt={item.nombre} style={{ width: '50px', height: '50px' }} />
              <p>{item.titulo}</p>
              <p>Precio: {item.precio}</p>
              <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e)} // Llama a handleQuantityChange al cambiar el valor
              />
              <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
            </div>
          ))
          
        )}
        <p>Total: ${calcularTotal()}</p> {/* Muestra el total calculado */}
      </div>
    </div>
  );
};

export default Carrito;

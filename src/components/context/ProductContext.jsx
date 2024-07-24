// ProductContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]); // Estado del carrito

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const selectProductById = (productId) => {
    const product = products.find((prod) => prod.id === parseInt(productId)); // Asegúrate de comparar con parseInt
    setSelectedProduct(product);
  };

     // Función para agregar un producto al carrito
  const addToCart = (productToAdd) => {
    const existingItemIndex = cart.findIndex(item => item.id === productToAdd.id);
    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += productToAdd.quantity;
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo con su cantidad inicial
      setCart([...cart, productToAdd]);
    }
  };

   // Función para eliminar un producto del carrito
   const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <ProductContext.Provider value={{ products, selectedProduct, selectProductById, isLoading,cart, addToCart,removeFromCart,updateCartItemQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

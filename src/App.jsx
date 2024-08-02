import Layout from './components/Layout/Layout.jsx';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Coleccion from './components/Coleccion.jsx';
import CategoriaProductos from './components/ColeccionContainer.jsx'
import { ProductProvider } from './components/context/ProductContext.jsx';
import DetalleProducto from './components/DetalleProducto.jsx';
import Carrito from './components/Carrito.jsx'; // Importa el componente Carrito
import Login from './components/Login.jsx';
import Locales from './components/Locales.jsx';
import { useState } from 'react';

function App() {
  const [user,setUser] = useState([]);

  return (
      <BrowserRouter>
        <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout user={user}  />}>
          <Route path="/" element={user ? <Home /> : <Login setUser={setUser} />} />
            <Route path="coleccion" element={<Coleccion />} />
            <Route path="categoria/:categoria" element={<CategoriaProductos />} />
            <Route path="producto/:productId" element={<DetalleProducto />} />
           <Route path="carrito" element={<Carrito />} />
           <Route path='login' element = {<Login setUser={setUser}/>} />
           <Route path='locales' element = {<Locales/>} />
          </Route>
        </Routes>
        </ProductProvider>
      </BrowserRouter>
  );
}

export default App;

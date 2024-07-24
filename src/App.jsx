import Layout from './components/Layout/Layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Coleccion from './components/Coleccion.jsx';
import CategoriaProductos from './components/ColeccionContainer.jsx'
import { ProductProvider } from './components/context/ProductContext.jsx';
import DetalleProducto from './components/DetalleProducto.jsx';
import Carrito from './components/Carrito.jsx'; // Importa el componente Carrito






function App() {
  return (
   
      <BrowserRouter>
        <ProductProvider>
          
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="coleccion" element={<Coleccion />} />
            <Route path="categoria/:categoria" element={<CategoriaProductos />} />
            <Route path="producto/:productId" element={<DetalleProducto />} />
           <Route path="carrito" element={<Carrito />} />


           
          </Route>
        </Routes>
       
       
        </ProductProvider>
      </BrowserRouter>
    
  );
}

export default App;

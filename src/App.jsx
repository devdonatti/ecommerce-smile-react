import Layout from './components/Layout/Layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Coleccion from './components/Coleccion.jsx';
import CategoriaProductos from './components/ColeccionContainer.jsx'




function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="coleccion" element={<Coleccion />} />
            <Route path="categoria/:categoria" element={<CategoriaProductos />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

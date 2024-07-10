import Layout from './components/Layout/Layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Coleccion from './components/Coleccion.jsx';
import ProductsProvider from './components/context/ProductsContext.jsx';
import ProductListContainer from './components/ProductListContainer.jsx';

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="coleccion" element={<Coleccion />} />
            <Route path="categoria/:categoriaId" element={<ProductListContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;

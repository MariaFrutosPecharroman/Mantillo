import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Home/Home';
import NoPage from './NoPage/NoPage';
import AboutUs from "./AboutUs/AboutUs";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
import ProductDescription from "./ProductDescription/ProductDescription";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/productdescription/:id" element={<ProductDescription/>}></Route>
            <Route path="*" element={<NoPage />} /> {/* Por si no existe la vista */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import CustomerPhotos from "./pages/CustomerPhotos";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/customerphotos" element={<CustomerPhotos />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;

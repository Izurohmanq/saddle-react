import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import CustomerPhotos from "./pages/CustomerPhotos";

function App() {
	return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/customerphotos" element={<CustomerPhotos />} />
        </Routes>
      </BrowserRouter>

    </>
	);
}

export default App;

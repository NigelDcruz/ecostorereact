import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/styles.scss";
import ProductDetail from "./pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;

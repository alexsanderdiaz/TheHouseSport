import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./components/layouts/MainLayout";
import ProductsPage from "./pages/Productspage";
import ProductsLayout from "./components/layouts/ShopLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/locations" element={<Homepage />} />
          <Route path="/plans" element={<Homepage />} />
          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<ProductsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

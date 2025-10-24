import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Orders from "./pages/Orders";
import AuthPage from "./components/AuthPage";

export default function App() {
  return (
    <div
      className="min-h-screen text-gray-900"
      
    >
      <Header />
      <main className="max-w-screen mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<AuthPage />} />

        </Routes>
      </main>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import OrderTracking from "./pages/OrderTracking";
import "./index.css";
import AuthPage from "./components/AuthPage";
import DietMenu from "./pages/DietMenu";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/auth" element={<AuthPage />} />
                    <Route path="/diet" element={<DietMenu />} />
          

          {/* <Route path="order-tracking" element={<OrderTracking />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

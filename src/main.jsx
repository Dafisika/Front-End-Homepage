import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import All from "./pages/product/All";
import DetailProduct from "./pages/product/DetailProduct";
import Payment from "./pages/payment/Payment";
import PaymentMethod from "./pages/payment/PaymentMethod";
import ChangePaymentMethod from "./pages/payment/ChangePaymentMethod";
import DoneOrPending from "./pages/payment/DoneOrPending";
import OrderDetailProduct from "./pages/order/MyOrderDetailProduct";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <DoneOrPending />
    </StrictMode>
);

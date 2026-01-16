import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/homePage/Home";
import All from "./pages/product/All";
import DetailProduct from "./pages/product/DetailProduct";
import Payment from "./pages/payment/Payment";
import PaymentMethod from "./pages/payment/PaymentMethod";
import ChangePaymentMethod from "./pages/payment/ChangePaymentMethod";
import DoneOrPending from "./pages/payment/DoneOrPending";
import MyOrderDetail from "./pages/order/MyOrderDetail.jsx";
import MyClassDetail from "./pages/order/MyClassDetail";
import MyProfile from "./pages/order/MyProfile";
import Video from "./pages/collection/Video";
import Rules from "./pages/collection/Rules";
import Question from "./pages/collection/Question";
import Congrats from "./pages/collection/Congrats";
import TryAgain from "./pages/collection/TryAgain";
import Summary from "./pages/collection/Summary";
import Certificate from "./pages/collection/Certificate";
import ClassDetail from "./components/detailOrder/ClassDetail";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <Payment />
        </Provider>
    </StrictMode>
);

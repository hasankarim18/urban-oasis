import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Shop from './Components/Shop/Shop'
import EmaJhonMain from './Components/EmaJhonMain'
import Home from './Components/Layout/Home'
import Orders from './Components/Orders/Orders'
import Inventory from './Components/Inverntory/Inventory'
import Login from './Components/Login/Login'
import { cartProductsLoader } from './loaders/cartProductsLoader'
import Checkout from './Components/Checkout/Checkout'
import SignUp from './Components/SignUp/SignUp'
import AuthProvider from './Components/providers/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from './Components/Routes/PrivateRoutes'
import UrbanOasiMain from './Components/UrbanOasiMain'
import baseUrl from './Components/utilities/baseUrl'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <UrbanOasiMain />,
        loader: () => fetch(`${baseUrl}/totalProducts`),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoutes>
            <Inventory />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.Fragment>
);

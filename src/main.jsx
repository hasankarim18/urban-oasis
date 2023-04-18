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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <EmaJhonMain />,
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: "/inventory",
        element: <Inventory />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"signup",
        element:<SignUp />
      },
      {
        path:"/checkout",
        element:<Checkout />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

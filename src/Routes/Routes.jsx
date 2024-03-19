import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contacts/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Contactus',
        element: <Contact />
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/orderfood/:category',
        element: <OrderFood />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },

]);
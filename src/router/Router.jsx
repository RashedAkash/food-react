import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/menu',
        element:<PrivateRoute> <Menu /></PrivateRoute>
      },
      {
        path: '/signUp',
        element:<SignUp />
      },
      {
        path: '/signIn',
        element:<SignIn />
      },
    ]
  }
])
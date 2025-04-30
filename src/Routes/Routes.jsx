import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRoutes from "./PrivetRoutes";
import Orders from "../Pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "orders",
        element: (
          <PrivetRoutes>
            <Orders></Orders>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;

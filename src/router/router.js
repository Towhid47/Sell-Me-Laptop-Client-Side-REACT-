import Lottie from "lottie-react";
import error404 from "../assets/animations/Error404.json";
import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./Private_Routes/PrivateRoute";
import { Button } from "react-bootstrap";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
         path: '/brand/:id',
         element:<BrandProducts></BrandProducts>,
         loader:({params}) => fetch(`http://localhost:4000/category/${params.id}`) ,
      }
    ],
  },
  {
    path: "/*",
    element: (
      <div>
        <div>
          <Lottie className="w-75" animationData={error404}></Lottie>
        </div>
         <div className="text-center mb-5">
          <Link to="/">
            <Button className="btn btn-primary">Go Back To Homepage</Button>
          </Link>
        </div>
      </div>
    ),
  },
]);

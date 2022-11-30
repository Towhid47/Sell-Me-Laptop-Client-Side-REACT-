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
import AddProduct from "../Pages/AddProduct/AddProduct";
import DashboardLayout from "../layouts/DashboardLayout";
import MyOrders from "../Pages/Dashboard/Dashboard/MyOrders/MyOrders";

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
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children:[
           {
             path:'/dashboard',
             element:<MyOrders></MyOrders>
           }
        ]
      },
      {
         path: '/brand/:name',
         element:<PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
         loader:({params}) => fetch(`http://localhost:4000/category/${params.name}`) ,
      },
      {
        path:'/add-product',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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

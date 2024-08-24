import * as React from "react"; 
import * as ReactDOM from "react-dom/client";
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import "./index.css"; 
import Root from "./Root";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import Policy from "./components/Policy";
 
const router = createBrowserRouter([ 
 { 
 path: "/", 
 element: <Root></Root>, 
 children: [
  { path: "/",
    element: <Home></Home>
  },
  { path: "/allproducts",
    element: <AllProducts></AllProducts>
  },
  { path: "/contact",
    element: <Contact></Contact>
  },
  { path: "/about",
    element: <About></About>
  },
  { path: "/policy",
    element: <Policy></Policy>
  },
  {
    path: '/item/:id',
    element: <Products></Products>,
    loader : () => fetch('/items.json'),
  }
]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

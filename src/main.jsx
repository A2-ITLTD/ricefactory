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
import AuthProvider from "./components/AuthProvider";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NonSupplying from "./components/NonSupplying";
import RiceForm from "./components/RiceForm";
 
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
  },
  { path: "/login",
    element: <Login></Login>
  },
  { path: "/registration",
    element: <Registration></Registration>
  },
  { path: "/nonsuppling",
    element: <NonSupplying></NonSupplying>
  },
  { path: "/riceform",
    element: <RiceForm></RiceForm>
  },
  
]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider> 
 </React.StrictMode> 
); 

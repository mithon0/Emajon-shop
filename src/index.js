import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/products/Products';
import Product from './components/product/Product';
import Order from './components/Order/Order';
import cartsLoderProducts from './LoderProducts/LoderProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children:[
      {
        path:"/",
        element:<Products></Products>
      },
      {
        path:"/order",
        element: <Order></Order>,
        loader:cartsLoderProducts
      },
      {
        path:"/review",
        element:<h1>this is review page</h1>
      },
      {
        path:"/inventory",
        element:<h1>this is inventory page</h1>
      },
      {
        path:"/login",
        element:<h1>this is login page</h1>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

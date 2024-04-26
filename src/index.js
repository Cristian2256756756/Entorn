import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Route, Link } from 'react-router-dom';

import AboutmeCristian from './aboutme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />
    ),
  },
  {
    path: "about",
    element: (
      <AboutmeCristian/>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);



const root = ReactDOM.createRoot(doument.getElementById('root'));
root.render(
  <React.StricMode>
    <RouterProvide router={router} />
  </React.StricMode>
)


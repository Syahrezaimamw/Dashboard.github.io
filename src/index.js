import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font.css'
import { Contex } from './contex/Ctx';
import App from './App';
import { DetailProject } from './DetailProject';
import 'react-loading-skeleton/dist/skeleton.css'
import NotesPath from './NotesPath';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Dashboard.github.io/",
    element:<App/>,
  },
  {
    path: "/Dashboard.github.io/detail",
    element:<DetailProject/>,
  },
  {
    path: "/Dashboard.github.io/notes",
    element:<NotesPath/>,
  },
]);
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;
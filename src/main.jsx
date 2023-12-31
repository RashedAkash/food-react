import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router.jsx'
import AuthContext from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Router.jsx';
import "./index.css";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <RouterProvider router={router} />
    </Provider> */}
    <App/>
  </React.StrictMode>
)

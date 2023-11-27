import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from "./routes/root";
import Home from "./routes/inicio.jsx"
import Panel from "./routes/panel.jsx"
import Facturas from "./routes/facturas.jsx";
import Perfil from "./routes/perfil.jsx";
import Pagar from "./routes/pagar.jsx";
import PayMethod from "./routes/paymethod.jsx";
import Confirmation from "./routes/confirmation.jsx";
import ConfirmationFactura from "./routes/confirmaFacturas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "panel",
        element: <Panel />,
      },
      {
        path: "facturas",
        element: <Facturas />,
      },
      {
        path: "Perfil",
        element: <Perfil />,
      },
      
    ],
  },
  {
    path: "Pagar",
    element: <Pagar />,
    children: [
      {
        path: "",
        element: <ConfirmationFactura />,
      },
      {
        path: "PayMethod",
        element: <PayMethod />,
      },
      {
        path: "Confirmation",
        element: <Confirmation />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


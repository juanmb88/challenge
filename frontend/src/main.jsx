import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './componentes/Layuot';
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente';
import TablaClientes, {loader as clientesLoader} from './pages/TablaClientes';
import Editar from './pages/Editar';
const router = createBrowserRouter([

  {
    path:'/',
    element: <Layout />,
    children: [ 

      {
        path:'/clientes',
        element : <TablaClientes/>,
        loader : clientesLoader
      },
      {
        path:'/formulario',
        element: <NuevoCliente />,
        action : nuevoClienteAction
      },
      {
        path:'/editar',
        element: <Editar />
      }

    ]
  },
  
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

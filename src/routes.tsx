import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Register from './pages/register'
import Login from './pages/login'
import AplicacaoLayout from './pages/layouts/aplicacao'
import AutenticacaoLayout from './pages/layouts/autenticacao'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <AplicacaoLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <AutenticacaoLayout />,
        children: [{
            path: '/login',
            element: <Login />
        }]
    }
])
import { createBrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
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
=======

import Dashboard from './pages/dashboard'
import SignIn from './pages/auth/sign-in'
import SignUp from './pages/auth/sign-up'
import ApplicationLayout from './pages/layouts/application'
import AuthenticationLayout from './pages/layouts/authentication'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      }
    ]
  },
  { 
    path: '/',
    element: <AuthenticationLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  }
>>>>>>> 01d0dd3a73190499418607706a3e23dc97614ae9
])
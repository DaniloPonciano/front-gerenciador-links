import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import SigIn from './pages/signin'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/sign-in',
        element: <SigIn />
    }
])